"use client";
import "../films/films.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Api() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setResults(data.slice(0, 6));
      });
  }, []);

  function handleSearch() {
    const found = data
      .slice(0, 6)
      .filter((show) =>
        show.name.toLowerCase().includes(search.toLowerCase())
      );

    setResults(found);
  }

  return (
    <div className="family">
      <h1>
        Discover <span>Movies</span>
      </h1>
      <p>
        Search for you favourite movies and explore details , ratings , and more
      </p>
      <input
        type="text"
        placeholder="🔍   Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch} id="button">Search</button>
      <div className="photo">
        {results.length > 0 ? (
          results.map((show) => (
            <div
              key={show.id}
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=" + show.name,
                  "_blank"
                )
              }
            >
              <img
                alt={show.name}
                src={show.image?.medium}
              />
              <h2>{show.name}</h2>
            </div>
          ))
        ) : (
          <h2>Movie not found</h2>
        )}
      </div>

      {data.slice(0, 1).map((show) => (
        <div key={show.id} className="image">
          <img
            src={show.image?.medium}
            id="img"
            alt={show.name}
          />

          <h2 id="h2">{show.name}</h2>

          <h3>UNDER THE DOME</h3>

          <p id="pr">
            2026 . Action / Sci-Fi / Thriller . 2h 28m
          </p>

          <object className="obj">
            <i>⭐️8.8</i>
            <u>/10</u>
          </object>

          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            vero dolores incidunt rem porro ducimus reprehenderit qui nam
            minus magnam error, vel temporibus modi? Blanditiis dolor fugit
            dignissimos dicta repudiandae quas reiciendis est accusamus,
            cupiditate.!
          </h4>

          <Link
            href="https://www.imdb.com/title/tt1553656/"
            target="_blank"
          >
            <button id="watch">▶️ whatch</button>
          </Link>

          <button id="star">no whatch</button>
        </div>
      ))}

      <div className="down">
        <div id="circle"></div>
        <h2 id="movie">Loading movies...</h2>
        <p id="moment">please wait a moment</p>
      </div>

      <div className="direct">
        <h5>🔎❌</h5>
        <h6>error Network</h6>
      </div>
      </div>
  );
}