import { InputProps } from '@tsTypes/Input'
import { Input } from '@components/input/Input'

export const FormInputRange = ({ title, name, value, onChange, min = 0, max = 100 }: InputProps) => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <label>{title}</label>
        <div className='w-[80px]'>
          <Input
            type='number'
            name={name}
            value={value}
            onChange={onChange}
            placeHolder='0'
            className='w-full rounded-md border border-transparent bg-theme-white mt-2 py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-sky-500 focus:border focus:shadow-blue-300 focus:shadow-md'
            max={max}
            min={min}
          />
        </div>

      </div>
      <Input
        type='range'
        name={name}
        value={value}
        onChange={onChange}
        placeHolder={title ?? ''}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
        min={min}
        max={max}
      />
    </>
  )
}
