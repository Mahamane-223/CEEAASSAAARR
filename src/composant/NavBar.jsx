import { NavLink } from "react-router";
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>ANIME // WIKI</span>
      <div className={styles.links}>
        <NavLink to="/naruto"   className={({ isActive }) => isActive ? styles.active : ''}>Naruto</NavLink>
        <NavLink to="/dbz"      className={({ isActive }) => isActive ? styles.active : ''}>DBZ</NavLink>
        <NavLink to="/onepiece" className={({ isActive }) => isActive ? styles.active : ''}>One Piece</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;