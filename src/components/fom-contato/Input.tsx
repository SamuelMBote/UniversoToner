import React from 'react';
type IInputProps = React.ComponentProps<'input'> & {label: string};
const Input = ({label, name, ...props}: IInputProps) => {
  return (
    <div className="mb-4">
      <label className="text-sm block " htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="form-input w-full block rounded-xl focus:ring-black focus:border-4 focus:border-black border-black bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-yellow-50 text-black font-semibold focus:bg-transparent"
        type="text"
        {...props}
      />
    </div>
  );
};
export default Input;
