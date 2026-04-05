import styles from './UserProfile.module.css'

function UserProfile({ firstName, lastName, country, birthDate }) {
  return (
    <div className={styles.card}>
      <p>Nom : {firstName} {lastName}</p>
      <p>Animé : {country}</p>
      <p>Date de naissance : {birthDate}</p>
    </div>
  );
}

export default UserProfile;