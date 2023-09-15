import React from 'react';
type ISectionProps = React.ComponentProps<'section'> & {cor?: string};
const Section = ({
  children,
  cor = 'bg-transparent',
  ...props
}: ISectionProps) => {
  return (
    <section className={`h-max p-4 ${cor}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
