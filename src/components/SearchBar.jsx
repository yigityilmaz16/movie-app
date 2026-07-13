
function SearchBar({searchTerm, setSearchTerm, searchFilm}) {
    function handleSubmit(e){
        e.preventDefault();
        searchFilm(searchTerm);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Aramanız" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}></input>
        <button type="submit">Ara</button>
        </form>
        </>
    )

}

export default SearchBar;