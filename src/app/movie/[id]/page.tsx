import Image from 'next/image';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.api_key}`
  );
  const movie = await res.json();

  return (
    <div className='w-full bg-gray-900 text-white'>
      <div className='p-6 md:pt-12 flex flex-col md:flex-row items-center max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-10'>
        <div className='w-full md:w-1/2'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={600}
            height={400}
            className='rounded-lg shadow-lg object-cover'
            alt={movie.title || movie.name}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className='w-full md:w-1/2 flex flex-col space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold'>{movie.title || movie.name}</h2>
          <p className='text-base md:text-lg leading-relaxed'>{movie.overview}</p>
          <div className='flex flex-col space-y-2'>
            <p className='text-sm md:text-base'>
              <span className='font-semibold'>Date Released:</span>{' '}
              {movie.release_date || movie.first_air_date}
            </p>
            <p className='text-sm md:text-base'>
              <span className='font-semibold'>Rating:</span> {movie.vote_average} / 10 ({movie.vote_count} votes)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
