import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar(){
    const [value , setValue] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(value)}`);
    }

    return(
        <div id="search-bar" className="fixed top-0 w-full bg-white flex justify-center z-1 border-gray-200 border">
            <form onSubmit={handleSubmit} className="sm:w-100 md:w-190 border rounded-full m-2 flex flex-row items-center ">
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search Book by title ......"
                    className="border-none outline-none focus:outline-none   rounded-full p-2 md:w-180 "
                />
                <button className=" h-10 w-10 flex justify-center  items-center rounded-full transition-all duration-200 ease-in-out hover:bg-gray-300 cursor-pointer">
                    <Search size={30}/>
                </button>
            </form>
        </div>
    )


}