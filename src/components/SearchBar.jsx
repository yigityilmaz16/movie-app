
function SearchBar({searchTerm, setSearchTerm, searchFilm}) {
    function handleSubmit(e){
        e.preventDefault();
        searchFilm(searchTerm);
    }

    return(
        <>
        <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Aramanız" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}></input>
        <button className="search-button" type="submit">Ara</button>
        </form>
        </>
    )

}

export default SearchBar;
