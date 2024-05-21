import { API_URL } from "../app/constants";
import style from "../styles/movie-credit.module.css";

async function getCredit(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const credit = await getCredit(id);

  return (
    <div className={style.container}>
      {credit.map((credit) => (
        <div key={credit.id}>
          <img src={credit.profile_path} alt={credit.name} />
          <div>{credit.name}</div>
        </div>
      ))}
    </div>
  );
}
