import { API_URL } from "../../../(home)/page";
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import style from "../../../../styles/movie.module.css";
import MovieCredit from "../../../../components/movie-credit";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return { title: movie.title };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      {/* <Suspense fallback={<h1>loading movie credit</h1>}>
        <MovieCredit id={id} />
      </Suspense> */}
    </div>
  );
}
