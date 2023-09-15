import React from 'react';
type ITextareaProps = React.ComponentProps<'textarea'> & {label: string};
const Textarea = ({label, name, ...props}: ITextareaProps) => {
  return (
    <div className="mb-4">
      <label className="text-sm block " htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        className=" form-textarea w-full block rounded-xl focus:ring-black focus:border-4 focus:border-black border-black bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-yellow-50 text-black font-semibold focus:bg-transparent"
        {...props}
      />
    </div>
  );
};
export default Textarea;
