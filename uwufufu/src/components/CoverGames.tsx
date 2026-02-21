import { FiImage } from 'react-icons/fi'

export function CoverGames() {
  return (
      <form action="" className="w-full">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-white text-4xl font-bold pb-5">Criar Jogo</h1>
          <label htmlFor="Title" className="text-white text-xl">
            Titulo
          </label>
          <input type="text" id="Title" className="h-10 rounded-md bg-[#2c2c2c] text-white px-3" />
          <label htmlFor="Description" className="text-white pt-5 text-xl">
            Descrição
          </label>
          <textarea id="Description" className="h-40 rounded-md bg-[#2c2c2c] text-white px-3 py-2" />
          <label htmlFor="image" className="text-white text-xl pt-5">
            Imagem de Capa
          </label>
          <label
            htmlFor="Image"
            className="cursor-pointer flex flex-col justify-center items-center h-40 bg-[#2c2c2c] rounded-md text-white"
          >
            <span>
              <FiImage className="text-4xl" />
            </span>
            <span>Enviar Imagem</span>
            <input
              type="file"
              id="Image"
              accept="image/*"
              className="hidden w-150 h-70 rounded-md bg-[#2c2c2c] text-white px-3"
            />
          </label>
          <button type="submit" className="cursor-pointer rounded-md text-white w-32 h-10 bg-[#e73929] mt-3">
            Opções
          </button>
        </div>
      </form>
  )
}
