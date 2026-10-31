-- ==============================================================================
-- LifeLine AI: PostgreSQL Schema for Supabase
-- Target: Real Authentication, Profiles, Requests, Donors & RLS Policies
-- ==============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES (Tied to Supabase auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null unique,
  role text not null check (role in ('donor', 'requester', 'admin')) default 'donor',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Trigger to automatically create a profile record when a user signs up via Supabase Auth
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email,
    coalesce(new.raw_user_meta_data->>'role', 'donor')
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. DONORS
create table if not exists public.donors (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  blood_group text not null check (blood_group in ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
  city text not null,
  phone text,
  availability boolean default true,
  last_donation_date date,
  created_at timestamp with time zone default now()
);

-- 3. BLOOD REQUESTS
create table if not exists public.blood_requests (
  id uuid primary key default uuid_generate_v4(),
  requester_id uuid references public.profiles(id) on delete set null,
  blood_group text not null check (blood_group in ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
  units integer not null check (units > 0),
  hospital text not null,
  city text not null,
  urgency text not null check (urgency in ('Critical', 'Urgent', 'Planned')),
  status text not null check (status in ('Pending', 'Searching', 'Fulfilled', 'Cancelled')) default 'Pending',
  notes text,
  created_at timestamp with time zone default now()
);

-- 4. ROW LEVEL SECURITY (RLS)
alter table public.profiles enable row level security;
alter table public.donors enable row level security;
alter table public.blood_requests enable row level security;

-- Profiles: Anyone authenticated can read profiles; Users update own
create policy "Public profiles are readable by authenticated users"
  on public.profiles for select
  using (true);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Donors: Anyone can search donors; Users update own donor record
create policy "Donors readable by all"
  on public.donors for select
  using (true);

create policy "Users can insert own donor profile"
  on public.donors for insert
  with check (auth.uid() = user_id);

create policy "Users can update own donor profile"
  on public.donors for update
  using (auth.uid() = user_id);

-- Requests: Anyone can read; Authenticated users can create
create policy "Requests are viewable by all"
  on public.blood_requests for select
  using (true);

create policy "Authenticated users can create requests"
  on public.blood_requests for insert
  with check (auth.uid() is not null);

