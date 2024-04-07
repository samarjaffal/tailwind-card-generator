import { BsFillHeartFill } from 'react-icons/bs'
import { Card } from '@components/card/Card'
import { CardConfiguration } from '@components/card-configuration/CardConfiguration'
import { Dialog } from '@components/dialog/Dialog'
import { initCard } from '@consts/Card'
import { useRef, useState } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import ReactDOMServer from 'react-dom/server'
import type { Card as CardType } from '@tsTypes/Card'

function App () {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [config, setConfig] = useState<CardType>(initCard)
  const [generatedHTML, setGeneratedHTML] = useState('')

  const onChangeConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig(prevConfig => {
      return {
        ...prevConfig,
        [event.target.name]: event.target.value
      }
    })
  }

  const showCode = () => {
    setGeneratedHTML(ReactDOMServer.renderToStaticMarkup(<Card config={config} showTailwindClasses />))
    dialogRef.current?.showModal()
  }

  return (
    <div className='grid grid-rows-layout h-screen'>
      <div className='flex justify-between px-4 py-4 border-b border-gray-600'>
        <h1 className='text-2xl font-bold'>
          Tailwind Card Generator
        </h1>
        <div className='flex items-center gap-4'>
          <a href='https://github.com/samarjaffal/tailwind-card-generator' target='_blank' rel='noreferrer'>
            <VscGithubInverted size={28} className='hover:text-sky-500 transition duration-300' />
          </a>
          <button className='bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-400 transition duration-300' onClick={showCode}>
            Show Code
          </button>
        </div>
      </div>

      {/* Card generator */}
      <main className='grid grid-cols-1 xl:grid-cols-body  px-6 h-full overflow-auto xl:overflow-hidden'>
        <CardConfiguration config={config} onChangeConfig={onChangeConfig} />
        <div className='py-10 mx-auto w-full'>
          <div className='flex justify-center items-center px-20 py-6 bg-theme-white rounded-xl mt-12 xl:mt-0 h-full'>
            <Card config={config} />
          </div>
        </div>
      </main>

      <Dialog dialogId='show-code-dialog' dialodRef={dialogRef}>
        <h2 className='text-3xl font-bold text-gray-700 mb-6'>Generated Code</h2>
        <p className='text-gray-500'>You can copy the generated code and use it in your project</p>
        <pre className='my-2 text-theme-white bg-[#1e293b] shadow-[inset_0_0_0_1px_#ffffff1a] py-6 px-4 rounded-md w-full overflow-auto'>
          <code>{generatedHTML}</code>
        </pre>
      </Dialog>

      <footer className='flex justify-center p-6 border-t border-gray-600'>
        <p className='flex items-center gap-x-2'>With a lot of <span><BsFillHeartFill className='text-pink-600' /></span> <a href='https://github.com/samarjaffal' target='_blank' rel='noreferrer' className='hover:text-sky-500 transition duration-300 underline'>Samar Jaffal</a></p>
      </footer>
    </div>
  )
}

export default App
