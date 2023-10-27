import { MovieResults } from './components';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
    const genre = searchParams.genre || 'fetchTrending';

    const genreFilter = () =>
        genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week';

    const res = await fetch(
        `https://api.themoviedb.org/3/${genreFilter()}?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    console.log(data);

    return (
        <main>
            <div>{data && <MovieResults movies={data.results} />}</div>
        </main>
    );
}
