import MovieProviders from "../../../../../components/movie-providers";

interface IParams {
  params: { id: string };
}

export default function Providers({ params: { id } }: IParams) {
  return <MovieProviders id={id} />;
}
