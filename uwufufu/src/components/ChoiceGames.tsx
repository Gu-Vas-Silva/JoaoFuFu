import { useState } from "react";
import { FiImage, FiVideo } from "react-icons/fi";
import { ChoiceImage } from "./ChoiceImage";
import { ChoiceVideo } from "./ChoiceVideo";

export function ChoiceGames(){
    const [selecionado, setSelecionado] = useState<string | null>(null);

    return(
        <div className="flex flex-col w-full justify-center">
        <h3 className="flex flex-col justify-center items-center text-white text-2xl">Tipo</h3>
        <div className="flex w-full justify-center items-center gap-10">
            <button onClick={() => setSelecionado("Image")} className={`  flex flex-col rounded-md border p-20 w-100 items-center cursor-pointer
            hover:border-red-500 transition-all duration-200 ${selecionado === "Image"? "border border-red-500 text-white" : " border-white/20 hover:border-red-500" }`} >
            <FiImage className="text-6xl"/>Image</button>
            <button onClick={() => setSelecionado("Video")} className={`  flex flex-col rounded-md border p-20 w-100 items-center cursor-pointer
            hover:border-red-500 transition-all duration-200 ${selecionado === "Video" ? "border border-red-500 text-white" : " border-white/20 hover:border-red-500" }`}>
            <FiVideo className="text-6xl"/> Video</button>
        </div>
        {selecionado === "Image" && < ChoiceImage/>}
        {selecionado === "Video" && < ChoiceVideo/>}
    </div>   
    )
}