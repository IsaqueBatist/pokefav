import { Control } from "react-hook-form"
export interface Iinput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  id: string
  control: Control<any, any>
  name: string
  errorMessage?: string
  placeholder?: string;
  type?: string
  required?: boolean
}