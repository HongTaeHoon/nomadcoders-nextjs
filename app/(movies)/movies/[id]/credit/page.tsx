import MovieCredit from "../../../../../components/movie-credit";

interface IParams {
  params: { id: string };
}

export default function Credit({ params: { id } }: IParams) {
  return <MovieCredit id={id} />;
}
