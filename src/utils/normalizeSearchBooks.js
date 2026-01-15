export const normalizeSearchBooks = (item)=>{
    const info = item.volumeInfo || {} ;
    return{
        id:item.id,
        title:info.title || "Untitled",
        authors:info.authors || ["Unkown Author"],
        thumbnail:info.imageLinks?.thumbnail || "https://via.placeholder.com/128x190?text=No+Cover",
        rating: info.averageRating || null,
    }
        
}