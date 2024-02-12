import React from 'react';

export default function GradientSection({children, index, id}) {
  return (
      <section id={id} className={`gradient-${index % 2 === 0 ? "up" : "down"} 2xl:h-[1440px] xl:h-[1080px] lg:h-[720px] md:h-[480px] sm:h-[360px] h-[240px]`}>
        <div className="gradient-blue 2xl:h-[1440px] xl:h-[1080px] lg:h-[720px] md:h-[480px] sm:h-[360px] h-[240px]">
          {children}
        </div>
      </section>
  );
};
