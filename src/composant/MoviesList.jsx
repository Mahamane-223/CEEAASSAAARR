import styles from './MovieList.module.css'

function Movieslist({ name, year, genre, synopsis }) {
  return (
    <div className={styles.dohi}>
      <h2>{name}</h2>
      <h3> Apparition : {year}</h3>
      <h3>Catégorie : {genre}</h3>
      <p>Informations : {synopsis}</p>
    </div>
  );
}

export default Movieslist;