import  '../films/films.css'
import Link from "next/link"
export default async function Api() {
  const response = await fetch(
    "https://api.tvmaze.com/shows"
  );

  const data = await response.json();
  return (
    <div className="family">
        <h1>Discover <span>Movies</span></h1>
        <p>Search for you favourite movies and explore details , ratings , and more</p>
        <input type = "text" placeholder="🔍   Search for a movie..."></input><button>Search</button>
         <div className="photo">
            {data.slice(0, 6).map((show) => (
              <div key={show.id}>
                <img
                  alt={show.name}
                  src={show.image?.medium}
                />
                <h2>{show.name}</h2>
        </div>
      ))}
        </div>
            {data.slice(0, 1).map((show) => (
              <div key={show.id} className="image">
                <img
                  src={show.image?.medium}
                  id="img"
                />
                <h2 id="h2">{show.name}</h2>
                <h3>UNDER THE DOME</h3>
                <p id="pr">2026  .  Action / Sci-Fi / Thriller  .  2h 28m</p>
                <object className="obj"><i>⭐8.8</i><u>/10</u></object>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero dolores incidunt rem porro ducimus reprehenderit qui nam minus magnam error, vel temporibus modi? Blanditiis dolor fugit dignissimos dicta repudiandae quas reiciendis est accusamus, cupiditate.!</h4>
                <Link href="https://www.imdb.com/title/tt1553656/">
                   <button id="watch">▶  whatch</button>
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