import { useState } from 'react'
import type { Card as CardType } from '@tsTypes/Card'
import { FormInput } from '@components/FormInput/FormInput'
import { Card } from '@components/Card/Card'
import { FormInputRange } from '@components/FormInputRange/FormInputRange'
import { MAX_BLUR_RANGE, MAX_INPUT_RANGE, MIN_BLUR_RANGE, MIN_INPUT_RANGE } from '@consts/Card'

const initialConfig: CardType = {
  boxShadowHorizontal: '0',
  boxShadowVertical: '10',
  boxShadowBlur: '15',
  boxShadowSpread: '3',
  boxShadowColor: 'rgba(0,0,0,0.1)',
  backgroundColor: '#FFF',
  borderColor: 'transparent',
  borderWidth: '1px',
  borderRadius: '16'
}

function App () {
  const [config, setConfig] = useState<CardType>(initialConfig)

  const onChangeConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig(prevConfig => {
      return {
        ...prevConfig,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className='grid grid-rows-layout h-screen'>
      <div className='flex justify-between px-4 py-4 border-b border-gray-600'>
        <h1 className='text-2xl font-bold'>
          Tailwind Card Generator
        </h1>
      </div>

      {/* Card generator */}
      <main className='grid grid-cols-1 xl:grid-cols-body  px-6 h-full overflow-auto xl:overflow-hidden'>
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
                min={MIN_INPUT_RANGE}
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
        <div className='py-10 mx-auto w-full'>
          <div className='flex justify-center items-center px-20 py-6 bg-theme-white rounded-xl mt-12 xl:mt-0 h-full'>
            <Card config={config} />
          </div>
        </div>
      </main>

      <footer className='flex justify-center p-6 border-t border-gray-600'>
        <small>With a lot of ❤️ by Samar Jaffal</small>
      </footer>
    </div>
  )
}

export default App
