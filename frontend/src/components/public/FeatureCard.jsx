import React from 'react';
import PropTypes from 'prop-types';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

