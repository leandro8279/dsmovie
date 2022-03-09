import "./styles.css";
import Arrow from "assets/img/arrow.svg";
export function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <img src={Arrow} alt="Arrow" />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <img src={Arrow} className="dsmovie-flip-horizontal" alt="Arrow" />
        </button>
      </div>
    </div>
  );
}
