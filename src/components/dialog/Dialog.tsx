interface Props {
  dialogId: string
  children: React.ReactNode
  dialodRef: React.RefObject<HTMLDialogElement>
}
export const Dialog = ({ dialogId = 'dialog', dialodRef, children }: Props) => {
  return (
    <dialog id={dialogId} className='max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8' ref={dialodRef}>
      <div>{children}</div>
      <div className='w-full mt-10'>
        <button className='flex ml-auto bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-400 transition duration-300' onClick={() => dialodRef.current?.close()}>Close</button>
      </div>
    </dialog>
  )
}
