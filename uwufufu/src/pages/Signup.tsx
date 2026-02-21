import { useState, type ChangeEvent, type FormEvent } from 'react'
import { RiUserAddLine } from 'react-icons/ri'
import { InputForm } from '../components/InputForm'

type User = {
  id: number
  nome: string
  email: string
  senha: string
}

export function SignUp() {
  const [form, setForm] = useState<User>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(form)
    try {
      console.log('PINTO')
      const storedUsers = localStorage.getItem('users')
      if (!storedUsers) {
        localStorage.setItem('users', JSON.stringify([form]))
        alert('Cadastro bem-sucedido!')
        window.location.href = '/login'
        return
      }
      const parsedUsers: User[] = storedUsers ? JSON.parse(storedUsers) as User[] : [];
      const emailExists = parsedUsers.some((user: User) => user.email === form.email)
      if(emailExists){
        alert("Email ja existe arrombado tenta outro")
        return
      }
      const lastId = Math.max(...parsedUsers.map(user => user.id))
      const newUser = {
      ...form,
      id: lastId + 1
    }
      parsedUsers.push(newUser)
      localStorage.setItem('users', JSON.stringify(parsedUsers))
      alert("Cadatro bem feito saco de vacilo")
      window.location.href = '/login'
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121]">
      <h1 className=" text-xl md:text-5xl text-white flex items-center gap-4 font-bold mb-4">
        Cadastre-se <RiUserAddLine className="w-11 h-11" />
      </h1>
      <form className="flex flex-col gap-8 p-8 px-20 py-7" onSubmit={handleSubmit}>
        <InputForm type="text" placeholder="nome" name="nome" onChange={handleChange} />
        <InputForm type="email" placeholder="email" name="email" onChange={handleChange} />
        <InputForm type="password" placeholder="senha" name="senha" onChange={handleChange} />
        <button type="submit" className="rounded-md text-white w-100 h-10 bg-[#e73929]">
          Cadastrar
        </button>
        <p className="text-white">
          Já possui registro?{' '}
          <a href="/login" className="text-red-500">
            Entrar
          </a>{' '}
          agora.
        </p>
      </form>
    </div>
  )
}
