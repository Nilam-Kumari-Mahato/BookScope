import { useState , useEffect, use } from "react"
import { useSearchParams , useNavigate } from "react-router-dom"
import { searchBooksByTittle } from "../services/googlebooksApi"
import { normalizeSearchBooks } from "../utils/normalizeSearchBooks";
import Ratingstars from "../components/ui/Ratingstars";
import { slugify } from "../utils/slugify";
import NavBar from "../components/layout/NavBar";
import SearchBar from "../components/ui/SearchBar";
import { motion } from "motion/react"



export default function Searchresults(){
    const [books , setBooks] = useState([]);
    const [loading , setLoading] = useState(false)
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const navigate = useNavigate();

    useEffect(() =>{
        if(!query) return ; 
        setLoading(true);
        const fetchBooksBytitle = async () => {
            const res =await searchBooksByTittle(query);
            const normalized = res.items?.map(normalizeSearchBooks);
            setBooks(normalized);
            setLoading(false);
        } 
        fetchBooksBytitle();
    } , [query])

    if(loading) {
        return <p>searching ....</p>
    }

    return(
        <div className="bg-amber-900/5 h-screen overflow-scroll no-scrollbar ">
            <NavBar />
            <SearchBar />
            <motion.div 
                layout
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                
                className="md:p-10 m-2 mt-14 mb-16 md:ml-16"
            >
                <h2 className="text-m md:text-xl text-amber-800">
                    Searched Results for <span className="font-bold">"{query}"</span>
                </h2>

                {books.length === 0 && 
                    <p>No Books Foumd .</p>                         
                }
                
                <div className="md:grid md:grid-cols-2 md:gap-5">
                    {books.map(book => (
                        <div 
                            key={book.id} 
                            onClick={ () => navigate(`/book/${book.id}/${slugify(book.title)}`)}
                            className="flex flex-row gap-5 md:gap-15 items-center m-2 mt-5 md:m-5 p-2 md:p-4 bg-amber-50 rounded-xl transition-all duration-200 ease-in-out hover:border-amber-800 hover:border hover:scale-102 shadow"
                        >
                            <div >
                                <img src={book.thumbnail} alt="book cover"  className=" h-20 w-20 md:h-30  transition-all duration-200 ease-in-out hover:drop-shadow-gray-800 hover:drop-shadow-xl"/>
                            </div>
                            <div>
                                <p className="text-m md:text-xl font-['Protest_Guerrilla'] text-amber-900">{book.title}</p>
                                <p className="text-m md:text-lg">{book.authors}</p>
                                <div><Ratingstars rating={book.rating}/></div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}