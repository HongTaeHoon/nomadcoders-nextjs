import MovieSimilar from "../../../../../components/movie-similar";

interface IParams {
  params: { id: string };
}

export default function Similar({ params: { id } }: IParams) {
  return <MovieSimilar id={id} />;
}
