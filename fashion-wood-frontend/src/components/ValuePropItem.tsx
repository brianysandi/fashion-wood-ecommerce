// lokasi: src/components/ValuePropItem.tsx
import React from "react";

interface ValuePropItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const ValuePropItem = ({ icon, title, subtitle }: ValuePropItemProps) => {
  return (
    // Kita akan atur warna dari parent-nya
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  );
};

export default ValuePropItem;
