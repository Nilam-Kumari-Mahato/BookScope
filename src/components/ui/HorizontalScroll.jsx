import {ArrowLeft , ArrowRight} from "lucide-react"

export default function ScrollButton({scrollref, id}){
    return(
        <div className="flex flex-row gap-2" >
            <button onClick={() => (scrollref.current[id].scrollLeft -=300)} className="p-2 bg-amber-800/20 rounded-full hover:bg-amber-800/40 transition-all ease-in-out duration-200 cursor-pointer">
               <ArrowLeft size={24} /> 
            </button>
            <button onClick={() => (scrollref.current[id].scrollLeft +=300)} className="p-2 bg-amber-800/20 rounded-full hover:bg-amber-800/40 transition-all ease-in-out duration-200 cursor-pointer">
                <ArrowRight size={24} />
            </button>
        </div>
    )
}