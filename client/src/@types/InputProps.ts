export interface InputProps{
  label: string,
  type: string,
  value: {
    get: string,
    set: (newValue: string) => void,
  }
  placeholder: string
}