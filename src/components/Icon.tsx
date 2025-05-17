import React from 'react';
import type { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  className?: string;
  'client:load'?: boolean;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, className = '' }) => {
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export default Icon; 