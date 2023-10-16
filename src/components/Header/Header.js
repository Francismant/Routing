import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div className="flex-fill">
        <img src={logo} alt="logo du blog" />
      </div>
      <ul>
      {/* // mettre "end" derrière NavLink si problème sur le changement de couleur sur 2 liens */}
        <NavLink to="/" className={`mr10`}>  
          <span>Accueil</span>
        </NavLink>
        <NavLink to="/profile/13?job=developer" className={`mr10`}>
          <span>Profil</span>
        </NavLink>
      </ul>
    </header>
  );
}
