import { useState } from "react";
import './searchBar.scss';

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleLocationChange = (e) => {
    setQuery((prev) => ({ ...prev, location: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="City location"
          value={query.location}
          onChange={handleLocationChange}
        />
        <button>
            <img src="/search.png" alt=""/>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
