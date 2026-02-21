import { FiImage, FiVideo } from "react-icons/fi";

export function ChoiceGames(){
    return(
        <div className="flex flex-col w-full justify-center">
        <h3 className="flex flex-col justify-center items-center">Tipo</h3>
        <div className="flex w-full justify-center items-center gap-10">
            <button className=" flex flex-col rounded-md border-white/20 border p-20 w-100 items-center justify-center"><FiImage className="text-6xl"/>Image</button>
            <button className="flex flex-col rounded-md border-white/20 border p-20 w-100 items-center justify-center"><FiVideo className="text-6xl"/> Video</button>
        </div>
    </div>   
    )
}