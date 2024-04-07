import { InputProps } from '@tsTypes/Input'
import { twMerge } from 'tailwind-merge'

export const Input = ({ className = '', type, name, value, onChange, placeHolder, ...otherProps }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className={twMerge('w-full rounded-md border border-gray-200 dark:border-transparent bg-theme-white mt-2 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-sky-500 focus:border focus:shadow-blue-300 focus:shadow-md', className)}
      {...otherProps}
    />
  )
}
