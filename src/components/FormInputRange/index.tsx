import { InputProps } from '@tsTypes/Input'
import { Input } from '@components/Input'

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
            max={max}
            min={min}
            readOnly
          />
        </div>

      </div>
      <Input
        type='range'
        name={name}
        value={value}
        onChange={onChange}
        placeHolder={title ?? ''}
        className='border-0 w-full h-2 p-0 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700'
        min={min}
        max={max}
      />
    </>
  )
}
