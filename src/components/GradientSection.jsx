import React from 'react';

export default function GradientSection({children, height, index, id}) {
  return (
      <section id={id} className={`gradient-${index % 2 === 0 ? "up" : "down"} ${height}`}>
        <div className="gradient-blue lg:h-full h-full">
          {children}
        </div>
      </section>
  );
};
