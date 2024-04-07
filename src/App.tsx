import { BsFillHeartFill } from 'react-icons/bs'
import { Card } from '@components/Card'
import { CardConfiguration } from '@components/CardConfiguration'
import { initCard } from '@consts/Card'
import { useState } from 'react'

import type { Card as CardType } from '@tsTypes/Card'
import { Nav } from '@components/Nav'

function App () {
  const [config, setConfig] = useState<CardType>(initCard)

  const onChangeConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig(prevConfig => {
      return {
        ...prevConfig,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className='grid grid-cols-1 lg:grid-rows-layout h-screen'>
      <Nav config={config} />

      {/* Card generator */}
      <main className='block xl:grid xl:grid-cols-body px-6 h-full overflow-visible xl:overflow-hidden mb-4 xl:mb-0'>
        <CardConfiguration config={config} onChangeConfig={onChangeConfig} />
        <div className='py-0 xl:py-10 mx-auto w-full'>
          <div className='flex justify-center items-center px-20 py-6 border border-slate-200 dark:border-0 bg-gray-100  dark:bg-theme-white rounded-xl mt-4 xl:mt-0 h-full'>
            <Card config={config} />
          </div>
        </div>
      </main>

      <footer className='flex justify-center p-6 border-t border-gray-200 dark:border-gray-600'>
        <p className='flex items-center gap-x-2'>With a lot of <span><BsFillHeartFill className='text-pink-600' /></span> <a href='https://github.com/samarjaffal' target='_blank' rel='noreferrer' className='hover:text-sky-500 transition duration-300 underline'>Samar Jaffal</a></p>
      </footer>
    </div>
  )
}

export default App
