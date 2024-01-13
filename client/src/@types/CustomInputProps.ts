export interface CustomInputProps{
  label: string,
  value: {
    get: string,
    set: (newValue: string) => void,
  }
  placeholder: string
}