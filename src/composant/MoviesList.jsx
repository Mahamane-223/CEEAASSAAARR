import styles from'./MovieList.module.css'
function MoviesList({ filmname, datedesortie, genre, syno }) {
  return (
    <div className={styles.dohi}>
      <h2>Nom : {filmname}</h2>
      <h3>Date de sortie : {datedesortie}</h3>
      <h3>Genre : {genre}</h3>
      <p>Synopsis : {syno}</p>
    </div>
  );
}

export default MoviesList;