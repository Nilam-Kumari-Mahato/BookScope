

export default function Ratingstars( {rating} ){

    if (!rating) {
        return null;
    }

    const fullstars = Math.floor(rating);
    const hashalfstar = rating % 1 >=0.5 ;
    const emptystars = 5 - fullstars - (hashalfstar ? 1 :0);

    return(
        <div className="flex flex-row gap-1 items-center">

            {/* Full Stars */}
            {[...Array(fullstars)].map((_, i) =>(
                <span key={`full-${i}`} className="text-yellow-400 text-sm md:text-xl">★</span>
            ))}

            {/* Half star */}
            {hashalfstar  && <span key={`half`} className="text-gray-400 text-sm md:text-lg">☆</span>}

            {/* Empty Stars */}
            {[...Array(emptystars)].map((_, i ) =>(
            <span key={`empty-${i}`} className="text-gray-400 text-sm md:text-lg">☆</span>
            ))}

            {/* Numeric rating */}
            <span className="text-sm md:text-lg text-gray-600 font-bold" >
                ({rating})
            </span>

        </div>
    )

}