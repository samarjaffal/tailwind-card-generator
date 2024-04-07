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
        className='w-full rounded-md border border-transparent bg-theme-white mt-2 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-sky-500 focus:border focus:shadow-blue-300 focus:shadow-md'
      />
    </>
  )
}
