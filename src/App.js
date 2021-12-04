import React, { useState } from "react";
import DisplayCountries from "./components/DisplayCountries";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Fintech Countries</span>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </nav>
      <DisplayCountries searchQuery={searchQuery} />
    </>
  );
};

export default App;
