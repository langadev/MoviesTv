import Image from "next/image"
import Link from "next/link"
import { FiThumbsUp } from "react-icons/fi"

function Card({result}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:p-1 transition-shadow duration-200">
        <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        ></Image>

       
        <div className="flex flex-col justify-center gap-y-1">
            <p className="line-clamp-2 text-md">
                {result.overview}
            </p>
            <h2 className="font-bold">
                {result.title || result.name}
            </h2>
            <p className="flex items-center">
                {
                    result.release_date ||result.first_air_date}
                    <FiThumbsUp className="h5 mr-1 ml-3"/>
                {result.vote_count}
            </p>
        </div>
        </Link>
    </div>
  )
}

export default Card