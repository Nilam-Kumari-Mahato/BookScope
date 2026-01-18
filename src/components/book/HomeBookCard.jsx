import { useNavigate } from "react-router-dom"
import { slugify } from "../../utils/slugify";

export default function HomeBookCard( {book} ) {

    const naviagate = useNavigate();

    function handleclick(){
        naviagate(`/book/${book.id}/${slugify(book.title)}`);
    }

    return(
        <div 
            onClick={handleclick}
            key={book.id} 
            className="flex flex-col gap-4 justify-arround m-2 p-4 bg-amber-800/20 rounded-lg cursor-pointer transtion-all ease-in-out duration-200 hover:shadow-amber-950 shadow-lg"
        >
            <div>
                <img src={book.thumbnail} alt="book cover" className="w-20 h-25 md:w-40 md:h-45 transition-all ease-in-out duration-200 hover:scale-105" />
            </div>
            <div className="flex flex-row gap-5 w-20 md:w-40 text-sm md:font-bold">
                <p className="">
                    {book.title}
                </p>
            </div>
        </div>
    )
}