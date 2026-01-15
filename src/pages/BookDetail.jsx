import { useParams } from "react-router-dom"
import { fetchBookById } from "../services/googlebooksApi"
import { normalizeBookDetail } from "../utils/normalizeBookDetail"
import { useState , useEffect } from "react";
import NavBar from "../components/layout/NavBar"
import Ratingstars from "../components/ui/Ratingstars";
import SearchBar from "../components/ui/SearchBar";
import { motion } from "motion/react"



export default function BookDetail(){

    const {id} = useParams();
    const [data , setData] = useState(null);

    useEffect (() =>{

        const getBookDetail = async () =>{
            const res = await fetchBookById(id);
            setData(normalizeBookDetail(res));
        }

        getBookDetail();

    } , [id]);

    if (!data) {
    return <p className="p-6">Loading book details...</p>;
    }
    return (
        <div className="bg-amber-900/5 h-screen overflow-scroll no-scrollbar ">
            <NavBar />
            <SearchBar />
            <motion.div 
                layout
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="pt-14 m-2 mb-16 md:ml-16 md:m-10 "
            >
                <div className="flex flex-row gap-5 md:gap-0 md:justify-around">   
                    <div className="">
                    <img src={data.thumbnail} alt="Book Cover" className="h-40 w-30 md:h-80 md:w-60 drop-shadow-gray-800 drop-shadow-2xl" />
                    </div>
                    <div className=" w-50 md:w-150 flex flex-col items-start justify-center">
                        <div>
                            <p className="text-lg md:text-3xl font-['Protest_Guerrilla'] ">{data.title}</p>
                            <p className="text-m md:text-xl font-bold">{data.authors}</p>
                            <p>{data.subtitle}</p>
                            <p className="mt-1 md:mt-5 text-sm md:text-lg md:w-150">{data.categories}</p>
                            <div><Ratingstars rating={data.rating} /></div>
                            <p className="text-sm">{data.pagecount}</p>
                        </div>

                        {data.publisher &&
                        <div className="mt-2 md:mt-5">
                            <p className="text-sm md:text-lg font-bold ">Publication Info</p>
                            <p className="text-sm md:text-m">{data.publisher}</p>
                            <p className="text-sm md:text-m">{data.publishedDate}</p> 
                        </div>
                        }
                    </div>
                </div>
                
                <div className="bg-yellow-50  mt-5 md:ml-20 p-5 md:p-10 rounded-2xl md:w-300 flex  flex-col gap-5 items-start ">
                    <p className="text-lg md:text-2xl font-bold">Description:</p>
                    <p className=" md:w-240">{data.description}</p>
                </div>
                
            </motion.div>
        </div>
    )
}