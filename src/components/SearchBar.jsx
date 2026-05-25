import "./SearchBar.css"

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <div className="search-box">
        <span className="search-icon"></span>
        <input 
          type="text" 
          placeholder="What are you craving for today?" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar