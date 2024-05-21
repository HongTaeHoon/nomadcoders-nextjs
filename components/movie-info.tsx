import Link from "next/link";
import { API_URL } from "../app/(home)/page";
import style from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img src={movie.poster_path} alt={movie.title} className={style.poster} />
      <div>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p className={style.info}>{movie.overview}</p>
        <ul>
          <li className={style.list}>
            <a href={movie.homepage} target="_blank">
              Homepage &rarr;
            </a>
          </li>
          <li className={style.list}>
            <Link href={`/movies/${id}/credit`}>Credit &rarr;</Link>
          </li>
          <li className={style.list}>
            <Link href={`/movies/${id}/providers`}>Providers &rarr;</Link>
          </li>
          <li className={style.list}>
            <Link href={`/movies/${id}/similar`}>Similar &rarr;</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
