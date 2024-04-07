import { InputProps } from '@tsTypes/Input'
import { Input } from '@components/Input'

export const FormInput = ({ title, name, type = 'text', value, onChange }: InputProps) => {
  return (
    <>
      <label>{title}</label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeHolder={title ?? ''}
      />
    </>
  )
}
