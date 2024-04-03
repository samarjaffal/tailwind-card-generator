import { useState } from 'react'
import type { Card as CardType } from '@tsTypes/Card'
import { FormInput } from '@components/FormInput/FormInput'
import { Card } from '@components/Card/Card'
import { FormInputRange } from '@components/FormInputRange/FormInputRange'

const initialConfig: CardType = {
  boxShadow: '0px 10px 15px -3px',
  backgroundColor: '#FFF',
  borderColor: 'transparent',
  borderWidth: '1px',
  borderRadius: 16
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
      <main className='grid grid-cols-1 lg:grid-cols-body px-6 py-10 h-full'>
        <div className='mr-16'>
          <h2 className='text-lg font-bold'>Card Properties</h2>
          <div className='mt-4'>
            <FormInput title='Box Shadow' name='boxShadow' onChange={onChangeConfig} value={config.boxShadow} />
          </div>
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
              max={80}
            />
          </div>
        </div>
        <div className='flex justify-center items-center px-20 py-6 bg-theme-white rounded-xl mt-12 lg:mt-0'>
          <Card config={config} />
        </div>
      </main>

      <footer className='flex justify-center p-6 border-t border-gray-600'>
        <small>With a lot of ❤️ by Samar Jaffal</small>
      </footer>
    </div>
  )
}

export default App
