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
        <div className="flex items-center justify-center">
            <div className="fixed top-0 md:w-full flex justify-center z-1 ">
                <form onSubmit={handleSubmit} className="w-[95vw] max-w-xl border rounded-full m-2 flex items-center bg-white/80 px-2">
                    <input 
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Search Book by title ......"
                        className="flex-1 border-none outline-none focus:outline-none rounded-full p-2 bg-transparent"
                    />
                    <button className="h-10 w-10 flex justify-center items-center rounded-full transition-all duration-200 ease-in-out hover:scale-110 hover:text-gray-600 cursor-pointer ">
                        <Search size={22}/>
                    </button>
                </form>
            </div>
        </div>
    )


}