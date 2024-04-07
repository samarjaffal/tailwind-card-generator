import { Card } from '@components/Card'
import { Card as CardType } from '@tsTypes/Card'
import { Dialog } from '@components/Dialog'
import { GrSun } from 'react-icons/gr'
import { RiMoonClearFill } from 'react-icons/ri'
import { useRef, useState } from 'react'
import { useTheme } from 'hooks/useTheme'
import { VscGithubInverted } from 'react-icons/vsc'
import ReactDOMServer from 'react-dom/server'

export const Nav = ({ config }: { config: CardType }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [generatedHTML, setGeneratedHTML] = useState('')
  const { theme, toggleTheme } = useTheme()
  const showCode = () => {
    setGeneratedHTML(ReactDOMServer.renderToStaticMarkup(<Card config={config} showTailwindClasses />))
    dialogRef.current?.showModal()
  }

  return (
    <>
      <nav className='flex flex-col gap-y-3 md:gap-y-o md:flex-row justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-600'>
        <h1 className='text-2xl font-bold'>
          Tailwind Card Generator
        </h1>
        <div className='flex items-center gap-4'>
          <button onClick={toggleTheme}>
            {
              theme === 'light'
                ? <RiMoonClearFill size={28} className='text-sky-500 hover:text-sky-800 transition duration-300' />
                : <GrSun size={28} className='text-sky-500 hover:text-yellow-500 transition duration-300' />
            }
          </button>
          <a href='https://github.com/samarjaffal/tailwind-card-generator' target='_blank' rel='noreferrer'>
            <VscGithubInverted size={28} className='hover:text-sky-500 transition duration-300' />
          </a>
          <button className='bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-400 transition duration-300' onClick={showCode}>
            Show Code
          </button>
        </div>
      </nav>
      <Dialog dialogId='show-code-dialog' dialodRef={dialogRef}>
        <h2 className='text-3xl font-bold text-gray-700 mb-6'>Generated Code</h2>
        <p className='text-gray-500'>You can copy the generated code and use it in your project</p>
        <pre className='my-2 text-theme-white bg-[#1e293b] shadow-[inset_0_0_0_1px_#ffffff1a] py-6 px-4 rounded-md w-full overflow-auto'>
          <code>{generatedHTML}</code>
        </pre>
      </Dialog>
    </>
  )
}
