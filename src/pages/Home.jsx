import {useState , useEffect , useRef} from "react"
import { categories } from "../utils/categories"
import { normalizeHomeBook } from "../utils/normalizeHomeBooks"
import { fetchBooksByCategory } from "../services/googlebooksApi"
import ScrollButton from "../components/ui/HorizontalScroll"
import NavBar from "../components/layout/NavBar"
import hero from "../assets/hero.png"
import heroimg from "../assets/heroimg.png"
import HomeBookCard from "../components/book/HomeBookCard"
import fictionBooks from "../assets/fiction.png"
import fantasy from "../assets/fantasy.png"
import mysteryBooks from "../assets/mystery.png"
import thrillerBooks from "../assets/thriller.png"
import romanceBooks from "../assets/romance.png"
import SearchBar from "../components/ui/SearchBar"
import { motion } from "motion/react"
import { BookCardSkeleton } from "../components/skeletons/BookcardSkeleton"
import { useLocation } from "react-router-dom"


export default function Home(){

    const[booksByCategory , setBooksByCategory] = useState({});
    const [loading , setLoading] = useState(false);
    const scrollref = useRef({});
    const location = useLocation();


   useEffect(() => {
        let isMounted = true;

        const fetchAllCategories = async () => {
            setLoading(true);

            try {
            const results = await Promise.all(
                categories.map((category) =>
                fetchBooksByCategory(category.query)
                    .then((res) => ({
                    id: category.id,
                    items: res?.items?.map(normalizeHomeBook) || [],
                    }))
                    .catch(() => ({
                    id: category.id,
                    items: [],
                    }))
                )
            );

            if (!isMounted) return;

            const grouped = {};
            results.forEach(({ id, items }) => {
                grouped[id] = items;
            });

            setBooksByCategory(grouped);
            } catch (err) {
            console.warn(err.message);
            } finally {
            if (isMounted) setLoading(false);
            }
        };

        fetchAllCategories();

        return () => {
            isMounted = false;
        };
    }, []);


    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(
            location.state.scrollTo
            );

            setTimeout(() => {
            section?.scrollIntoView({ behavior: "smooth" });
            }, 200);
        }
    }, [location]);



    return(
        <>
            <NavBar />

            <SearchBar />     
            <motion.div className="bg-yellow-50 m-1 mt-14 md:ml-16 rounded-2xl p-2 lg:p-10 pt-5 overflow-scroll no-scrollbar ">
                {/*Desktop  Hero Section */}
                <motion.div
                    layout
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className=" hidden md:flex justify-between gap-20 m-2 ">
                    
                    <div className=" flex flex-col">
                        <h1 className=" font-['Protest_Guerrilla'] md:text-6xl lg:text-7xl xl:text-8xl text-amber-900 mb-2">BookScope</h1>
                        <h1 className="text-xl  lg:text-4xl font-bold mb-18">Discover. Decide. Read.</h1>
                        <p className="text-sm md:text-lg lg:text-xl font-bold">Your Guide to Books Before You Read .....</p>
                        <p className=" lg:w-100 md:w-60 text-sm lg:text-xl">Get to know the story, the author, and what readers think — so you can choose a book you’ll truly enjoy .</p>
                        <p className="text-md">Because every great read starts with knowing the story behind it.</p>
                    </div>
                    <div>
                        <img src={hero} alt="stacked books"  className="md:h-120"/>
                    </div>
                </motion.div>

                {/* Mobile Hero Section */}
                <motion.div
                    layout
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="md:hidden flex flex-col items-center gap-4 mb-16">
                    <div >
                        <h1 className="font-['Protest_Guerrilla'] text-4xl sm:text-5xl text-amber-900 mb-2">BookScope</h1>
                        <h3 className="text-xl font-bold ">Discover. Decide. Read.</h3>
                        <p className="text-sm font-bold">Your Guide to Books Before You Read .....</p>
                    </div>
                    <div>
                        <img src={hero} alt="stacked books" className="h-80" />
                    </div>
                </motion.div>

                {/* Explore Section & Categories */}

                <div id="explore" className="flex flex-col gap-10 ">
                    <motion.div
                        layout
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-bold text-2xl font-['Protest_Guerrilla'] text-amber-900 lg:text-4xl" id="explore">
                            Explore
                        </h2>
                        <div className="flex flex-row md:justify-around md:gap-0 gap-4 overflow-scroll no-scrollbar">
                            <div className="flex flex-col justify-center mt-4 cursor-pointer" link="/explore">
                                <img src={heroimg} alt="all books"  className="h-20 md:h-26 transition-all ease-in-out duration-200 hover:scale-120  hover:drop-shadow-amber-950 hover:drop-shadow-xl"/>
                                <p className="font-bold flex justify-center text-sm md:text-m">ALL</p>
                            </div>
                            <a href="#fiction">
                                <div className="flex flex-col justify-center mt-4 cursor-pointer" link="/explore/fiction">
                                    <img src={fictionBooks} alt="all books"  className="h-20 md:h-26 transition-all ease-in-out duration-200 hover:scale-120  hover:drop-shadow-yellow-900 hover:drop-shadow-xl"/>
                                    <p className="font-bold flex justify-center  text-sm md:text-m">Fiction</p>
                                </div>
                            </a>
                            <a href="#fantasy">
                                <div className="flex flex-col justify-center mt-4 cursor-pointer">
                                    <img src={fantasy} alt="all books"  className="h-20 md:h-26 transition-all ease-in-out duration-200 hover:scale-120  hover:drop-shadow-blue-950 hover:drop-shadow-xl"/>
                                    <p className="font-bold flex justify-center  text-sm md:text-m">Fantasy</p>
                                </div>
                            </a>
                            <a href="#romance">
                                <div className="flex flex-col justify-center mt-4 cursor-pointer">
                                    <img src={romanceBooks} alt="all books"  className="h-20 md:h-26 transition-all ease-in-out duration-200 hover:scale-120  hover:drop-shadow-pink-950 hover:drop-shadow-xl"/>
                                    <p className="font-bold flex justify-center  text-sm md:text-m">Romance</p>
                                </div>
                            </a>
                            <a href="#mystery">
                                <div className="flex flex-col justify-center mt-4 cursor-pointer">
                                    <img src={mysteryBooks} alt="all books"  className="h-20 md:h-26 transition-all ease-in-out duration-200 hover:scale-120  hover:drop-shadow-emerald-950 hover:drop-shadow-xl"/>
                                    <p className="font-bold flex justify-center  text-sm md:text-m">Mystery</p>
                                </div>
                            </a>
                            <a href="#thriller">
                                <div className="flex flex-col justify-center mt-4 cursor-pointer">
                                    <img src={thrillerBooks} alt="all books"  className="h-20 md:h-26 transition-all ease-in-out duration-200 hover:scale-120  hover:drop-shadow-fuchsia-950 hover:drop-shadow-xl"/>
                                    <p className="font-bold flex justify-center  text-sm md:text-m">Thriller</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                    <div className=" lg:space-y-12">
                        {categories.map(category => (
                            <section key={category.id} id={category.id}>
                                <div className="flex flex-row justify-between mb-2">
                                    <h2 className="text-2xl font-bold ">
                                        {category.label}
                                    </h2>
                                    <ScrollButton scrollref={scrollref} id={category.id} />
                                </div>

                                <div
                                    ref={(el) => (scrollref.current[category.id] = el)}
                                    className="flex flex-row gap-5 md:gap-10 overflow-x-auto no-scrollbar pb-4 mb-10"
                                    >
                                    {loading
                                        ? Array.from({ length: 10 }).map((_, i) => (
                                            <BookCardSkeleton key={`skeleton-${category.id}-${i}`} />
                                        ))
                                        : booksByCategory[category.id]?.map((book) => (
                                            <HomeBookCard key={book.id} book={book} />
                                        ))}
                                </div>

                            </section>
                        ))}
                    </div>
                </div>

            </motion.div>

        </>
    )
}