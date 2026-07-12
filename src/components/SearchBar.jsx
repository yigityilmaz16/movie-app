
function SearchBar({searchTerm, setSearchTerm, searchFilm}) {

    return(
        <>
        <input type="text" placeholder="Aramanız" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}></input>
        <button onClick={()=> searchFilm(searchTerm)}>Ara</button>
        </>
    )

}

export default SearchBar;