import styles from './UserProfile.module.css'
function UserProfile({firstName,lastname,birthdate}) {
  return(
  <div className={styles.card}>
    <p>je m'appelle {firstName}{lastname}</p>
    <p>voici ma date d'anniversaire {birthdate}</p>
  </div>
  );
}
export default UserProfile;