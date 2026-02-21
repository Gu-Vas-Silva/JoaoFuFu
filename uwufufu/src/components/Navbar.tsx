import { FiLogOut } from "react-icons/fi";

export function Navbar() {
    function logOut(){
    localStorage.removeItem('usuario logado')
  }
  return (
    <nav className="flex items-center gap-10 pt-5 border-white/30 border-b w-screen justify-center pb-5">
      <a href="/"><h1 className="text-red-600 font-bold text-xl md:text-6xl ">JoaoFuFu</h1></a>     
      <a href="/CriarJogo" className="rounded-md text-white bg-[#e73929] px-3 py-2">
        Criar Jogo
      </a>
      <a href="/login" className="text-white px-3 py-2" onClick={logOut}>
        <FiLogOut className="text-3xl" />
      </a>
    </nav>
  )
}
