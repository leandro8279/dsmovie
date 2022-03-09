import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination";
import "./styles.css";
export function Listing() {
  return (
    <>
      <Pagination />
      <MovieCard />
    </>
  );
}
