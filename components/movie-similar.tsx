import { API_URL } from "../app/(home)/page";
import style from "../styles/movie-similar.module.css";
async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similar = await getSimilar(id);
  console.log(similar);
  return (
    <div className={style.container}>
      {similar.map((similar) => (
        <div key={similar.id}>
          <img src={similar.poster_path} alt={similar.original_title} />
          <p className={style.title}>{similar.title}</p>
        </div>
      ))}
    </div>
  );
}
