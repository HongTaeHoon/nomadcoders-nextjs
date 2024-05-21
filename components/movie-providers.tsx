import { API_URL } from "../app/constants";

async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  return (
    <div>
      {/* {providers.map((a) => {
        return <div>{a.link}</div>;
      })} */}
      hi
    </div>
  );
}
