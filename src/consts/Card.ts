import { Card } from '@tsTypes/Card'

export const MIN_INPUT_RANGE = -100
export const MAX_INPUT_RANGE = 100
export const MIN_BLUR_RANGE = 0
export const MAX_BLUR_RANGE = 100

export const initCard: Card = {
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
