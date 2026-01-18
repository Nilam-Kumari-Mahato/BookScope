import { useNavigate  } from "react-router-dom";
import { useState , useRef ,useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchBar(){
    const [value , setValue] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef();

    useEffect(() => {
            const handleFocus = () => {
            inputRef.current?.scrollIntoView({ behavior: "smooth" });
            inputRef.current?.focus();
            };

            window.addEventListener("focus-search", handleFocus);

            return () => {
            window.removeEventListener("focus-search", handleFocus);
            };
    }, []);

    function handleSubmit(e){
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(value)}`);
    }

    return(
        <div className="fixed top-0 w-full    flex justify-center z-1 ">
            <form onSubmit={handleSubmit} className="w-190 border rounded-full m-2 flex flex-row justify-between items-center bg-white/80">
                <input 
                    ref={inputRef}
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