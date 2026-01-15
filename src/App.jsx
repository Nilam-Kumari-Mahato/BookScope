import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import BookDetail from "./pages/BookDetail.jsx"
import Searchresults from "./pages/Searchresult.jsx"

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id/:slug" element= {<BookDetail />} />
      <Route path="/search" element={<Searchresults />} />
    </Routes>
  )
}