import clsx from 'clsx'
import { Card as CardType } from '@tsTypes/Card'

interface Props {
  config: CardType
  showTailwindClasses?: boolean
}
export const Card = ({ config, showTailwindClasses = false }: Props) => {
  const {
    boxShadowHorizontal,
    boxShadowVertical,
    boxShadowBlur,
    boxShadowSpread,
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius,
    boxShadowColor
  } = config

  const boxShadow = `${boxShadowHorizontal}px ${boxShadowVertical}px ${boxShadowBlur}px ${boxShadowSpread}px ${boxShadowColor}`

  const cardStyle = !showTailwindClasses
    ? {
        boxShadow,
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius: borderRadius.toString().concat('px')
      }
    : {}

  const tailwindClasses = `shadow-[${boxShadowHorizontal}px_${boxShadowVertical}px_${boxShadowBlur}px_${boxShadowSpread}px_${boxShadowColor}] bg-[${backgroundColor}] border-[${borderColor}] border-[${borderWidth}] rounded-[${borderRadius}px]`

  return (
    <div
      className={clsx(
        'h-fit min-w-[250px] w-full xl:max-w-[650px] p-6 text-gray-500 border flex flex-col justify-between',
        {
          [tailwindClasses]: showTailwindClasses
        }
      )} style={cardStyle}
    >
      <header>
        <h2 className='text-gray-700 font-bold text-xl'>Card Title</h2>
        <div className='border-b border-gray-100 mt-2' />
      </header>
      <div className=''>
        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic similique quo quia voluptates minus quod cumque pariatur, fuga explicabo voluptatem, ex excepturi harum recusandae eveniet odit nihil debitis ea aliquid? Similique, incidunt cupiditate fugit tempora inventore asperiores nam expedita eligendi veniam ratione.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic similique quo quia voluptates minus quod cumque pariatur, fuga explicabo voluptatem, ex excepturi harum recusandae eveniet odit nihil debitis ea aliquid? Similique, incidunt cupiditate fugit tempora inventore asperiores nam expedita eligendi veniam ratione.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <footer>
        <div className='border-t border-gray-100 mt-10 pt-2'>
          <p className='text-xs text-gray-500'>I'm a card footer</p>
        </div>
      </footer>
    </div>
  )
}
