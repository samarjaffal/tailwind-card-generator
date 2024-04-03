import { InputProps } from '@tsTypes/Input'

export const Input = ({ className, type, name, value, onChange, placeHolder, ...otherProps }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className={className}
      {...otherProps}
    />
  )
}
