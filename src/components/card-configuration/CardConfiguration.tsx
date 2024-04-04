import { FormInput } from '@components/form-input/FormInput'
import { FormInputRange } from '@components/form-input-range/FormInputRange'
import { MAX_BLUR_RANGE, MAX_INPUT_RANGE, MIN_BLUR_RANGE, MIN_INPUT_RANGE } from '@consts/Card'
import type { Card as CardType } from '@tsTypes/Card'

interface Props {
  config: CardType
  onChangeConfig: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const CardConfiguration = ({ config, onChangeConfig }: Props) => {
  return (
    <div className='mr-0 xl:mr-16 pr-0 xl:pr-6 py-6 overflow-visible xl:overflow-auto'>
      <h2 className='text-lg font-bold opacity-80'>General Properties</h2>
      <section>
        <div className='mt-4'>
          <FormInput title='Background Color' name='backgroundColor' onChange={onChangeConfig} value={config.backgroundColor} />
        </div>
        <div className='mt-4'>
          <FormInput title='Border Color' name='borderColor' onChange={onChangeConfig} value={config.borderColor} />
        </div>
        <div className='mt-4'>
          <FormInput title='Border Width' name='borderWidth' onChange={onChangeConfig} value={config.borderWidth} />
        </div>
        <div className='mt-4'>
          <FormInputRange
            title='Border Radius'
            name='borderRadius'
            onChange={onChangeConfig}
            value={config.borderRadius}
            type='range'
            className='cursor-pointer bg-transparent focus:border-transparent focus:shadow-transparent'
            min={0}
            max={MAX_INPUT_RANGE}
          />
        </div>
      </section>
      <h2 className='text-lg font-bold opacity-80 mt-4'>Shadow Properties</h2>
      <section>
        <div className='mt-4'>
          <FormInputRange
            title='Box Shadow - Horizontal Offset'
            name='boxShadowHorizontal'
            onChange={onChangeConfig}
            value={config.boxShadowHorizontal}
            type='range'
            className='cursor-pointer bg-transparent focus:border-transparent focus:shadow-transparent'
            min={MIN_INPUT_RANGE}
            max={MAX_INPUT_RANGE}
          />
        </div>
        <div className='mt-4'>
          <FormInputRange
            title='Box Shadow - Vertical Offset'
            name='boxShadowVertical'
            onChange={onChangeConfig}
            value={config.boxShadowVertical}
            type='range'
            className='cursor-pointer bg-transparent focus:border-transparent focus:shadow-transparent'
            min={MIN_INPUT_RANGE}
            max={MAX_INPUT_RANGE}
          />
        </div>
        <div className='mt-4'>
          <FormInputRange
            title='Box Shadow - Blur Radius'
            name='boxShadowBlur'
            onChange={onChangeConfig}
            value={config.boxShadowBlur}
            type='range'
            className='cursor-pointer bg-transparent focus:border-transparent focus:shadow-transparent'
            min={MIN_BLUR_RANGE}
            max={MAX_BLUR_RANGE}
          />
        </div>
        <div className='mt-4'>
          <FormInputRange
            title='Box Shadow - Spread Radius'
            name='boxShadowSpread'
            onChange={onChangeConfig}
            value={config.boxShadowSpread}
            type='range'
            className='cursor-pointer bg-transparent focus:border-transparent focus:shadow-transparent'
            min={MIN_INPUT_RANGE}
            max={MAX_INPUT_RANGE}
          />
        </div>
        <div className='mt-4'>
          <FormInput title='Box Shadow Color' name='boxShadowColor' onChange={onChangeConfig} value={config.boxShadowColor} />
        </div>
      </section>
    </div>
  )
}
