import { useEffect, useState } from "react";

function MovieNewForm(){
    const [newMovie, setNewMovie] = useState({
        title: "", 
        url: "",
        released: "", 
        director: "", 
        genre: "", 
        rated: "", 
        is_favorite: false, 
        imdb_Ratings: 0
    });
    
}

export default MovieNewForm;