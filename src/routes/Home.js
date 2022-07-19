import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9`)
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <div>
            {loading ? <h1>Loading</h1>: null}

            {
                movies.map((item, index) => (
                    <Movie
                        id={item.id}
                        medium_cover_image={item.medium_cover_image}
                        title={item.title}
                        summary={item.summary}
                        genres={item.genres}
                    />
                ))
            }
        </div>
    );
}

export default Home;