const baseurl = "https://www.googleapis.com/books/v1"

export const fetchBooksByCategory = async(query)=>{
    const res= await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`
    );
    return res.json();
}

export const fetchBookById = async(id) =>{
    const res = await fetch(
        `${baseurl}/volumes/${id}`
    )
    return res.json();
}

export const searchBooksByTittle = async (query) =>{
    if(!query) return null;

    const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
            query
        )}&maxResults=20`
    );
    return res.json();
}
