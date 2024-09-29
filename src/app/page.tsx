import Results from "./components/Results";

const api_key = process.env.api_key;

async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  
  const response = await fetch(`https://api.themoviedb.org/3${ 
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week' 
  }?api_key=${api_key}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results}/>
    </div>
  );
}

export default Home;
