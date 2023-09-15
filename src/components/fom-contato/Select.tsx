import React from 'react';
type ISlectProps = React.ComponentProps<'select'> & {
  label: string;
  backgroundColor: 'bg-cyan-50' | 'bg-fuchsia-50' | 'bg-yellow-50';
};
const Select = ({
  label,
  name,
  id,
  children,
  backgroundColor,
  ...props
}: ISlectProps) => {
  return (
    <div className="mb-4">
      <label className="text-sm block " htmlFor={name}>
        {label}
      </label>
      <select
        className={`form-select w-full block rounded-xl focus:ring-black 
        ${backgroundColor} focus:border-4 focus:border-black 
        border border-black text-black font-semibold focus:bg-transparent`}
        name={name}
        id={id}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
