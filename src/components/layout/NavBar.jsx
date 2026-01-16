import exploreIcon from '../../assets/explore.png';
import homeIcon from '../../assets/home.png';
import searchIcon from '../../assets/search.png';

export default function NavBar(){
    return (
        <div className=' fixed bottom-0 flex  w-full justify-center bg-white flex-row md:fixed md:top-0 md:left-0  md:flex md:flex-col md:h-186  md:w-16 md:justify-center gap-10 items-center md:p-2 md:border-gray-200 md:border-r shadow-r z-1'>
            <div className=' h-14 w-14 rounded-full flex justify-center items-center transition-all duration-100 ease-in-out hover:bg-gray-200'><img className='h-10 w-10' src={homeIcon} alt="home" /></div>
            <div className=' h-14 w-14 rounded-full flex justify-center items-center transition-all duration-100 ease-in-out hover:bg-gray-200'><a href="#search-bar"><img className='h-8 w-8' src={searchIcon} alt="search" /></a></div>
            <div className='h-14 w-14 rounded-full flex justify-center items-center transition-all duration-100 ease-in-out hover:bg-gray-200'><a href="/explore"><img className='h-10 w-10' src={exploreIcon} alt="explore" /></a></div>
        </div>
    )
}