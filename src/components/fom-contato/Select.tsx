import React from 'react';
type ISlectProps = React.ComponentProps<'select'> & {label: string};
const Select = ({label, name, id, children, ...props}: ISlectProps) => {
  return (
    <div className="mb-4">
      <label className="text-sm block " htmlFor={name}>
        {label}
      </label>
      <select
        className="form-select w-full block rounded-xl focus:ring-black focus:border-4 focus:border-black border-black bg-gradient-to-r from-cyan-100 via-fuchsia-100 to-yellow-100 text-black font-semibold focus:bg-transparent placeholder-gray-400"
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
