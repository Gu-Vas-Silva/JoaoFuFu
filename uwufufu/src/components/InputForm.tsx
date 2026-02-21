interface InputFormProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputForm({
    type, placeholder, name, onChange
}: InputFormProps){
    return (
        <input type={type} placeholder={placeholder} name={name} className="rounded-md focus:outline-none text-[#ffffffb4] w-100 h-10 bg-[#2c2c2c] px-3" onChange={onChange}/>
    )
}