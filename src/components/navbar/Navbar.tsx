import React, { useState } from "react";
import * as S from "./Navbar.styles";

const Navbar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState<any>(false);

  return (
    <S.ContainerNavbar>
      <S.ContainerLogo>
        <S.ImageLogo src="/img/logo.png" alt="Logo" />
        <div>
          <h1>Vanesa Hernández</h1>
          <h2>Frontend Developer</h2>
        </div>
      </S.ContainerLogo>

      <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.BurguerMenu />
        <S.BurguerMenu />
        <S.BurguerMenu />
      </S.ContainerBurguer>
    </S.ContainerNavbar>
  );
};

export default Navbar;
