import { FiImage } from 'react-icons/fi'

export function ChoiceImage() {
  return (
    <div>
      <label htmlFor="image" className="text-white text-xl pt-5">
        Upload Images
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
      <input type="text" placeholder='coloque a url da imagem' />
      <button className='className="rounded-md text-white bg-[#e73929] px-3 py-2 rounded-md'>Publicar</button>
    </div>
  )
}
