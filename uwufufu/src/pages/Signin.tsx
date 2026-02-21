import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { InputForm } from "../components/InputForm";

type User = {
    email: string
    senha: string
}

export function SignIn() {
    
    const [form, setForm] = useState<User>({
        email: "",
        senha: ""
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
        const storedUsers = localStorage.getItem("users")
        if (!storedUsers) {
            alert("Nenhum usuário cadastrado.")
            return
        }
        const parsedUsers: User[] = JSON.parse(storedUsers) as User[]
        const userFound = parsedUsers.find(
            (user: User) =>
                user.email === form.email &&
                user.senha === form.senha
        )
        if (!userFound) {
            alert("Email ou senha incorretos.")
            return
        }
        alert("Login bem-sucedido!")
        localStorage.setItem('usuario logado', JSON.stringify(userFound))
        window.location.href = "/"
    } catch (error) {
        console.error("Erro ao fazer login:", error)
    }
    console.log(form)
}

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121]">
            <h1 className=" text-xl md:text-5xl text-white flex font-bold mb-4 gap-4 items-center"> Login <FiLogIn className="w-11 h-11"/></h1>
            <form className="flex flex-col gap-8 p-8 px-20 py-7" onSubmit={handleSubmit}>
                <InputForm type="email" placeholder="Email" name="email" onChange={handleChange}/>
                <InputForm type="password" placeholder="Senha" name="senha" onChange={handleChange}/>
                <button type="submit" className="rounded-md text-white w-100 h-10 bg-[#e73929]" >Entrar</button>
                <p className="text-white">Não possui registro? <a href="/cadastro" className="text-red-500">Cadastre-se</a> agora.</p>
            </form>
        </div>
    );
}
