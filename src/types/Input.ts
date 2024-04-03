export interface InputProps {
  title?: string
  type?: string
  name: string
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeHolder?: string
  className?: string
  min?: number
  max?: number
}
