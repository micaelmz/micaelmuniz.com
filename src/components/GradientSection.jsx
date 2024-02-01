import React from 'react';

export default function GradientSection({ children, index, id }) {
  return (
      <section id={id} className={index % 2 === 0 ? "gradient-up h-dvh" : "gradient-down h-dvh"}>
        <div className="gradient-blue h-dvh">
          {children}
        </div>
      </section>
  );
};
