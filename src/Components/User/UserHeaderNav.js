import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setmobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="conta" end activeClassName={styles.active}>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="estatisticas" activeClassName={styles.active}>
        <Estatisticas /> {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="postar" activeClassName={styles.active}>
        <AdicionarFoto /> {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair>{mobile && "Sair"}</Sair>
      </button>
    </nav>
  );
};

export default UserHeaderNav;