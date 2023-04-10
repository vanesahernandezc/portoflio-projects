import React, { useState } from "react";
import * as S from "./Navbar.styles";

export const Navbar: React.FC = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState<boolean>(false);
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
      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p>About me</p>
        <p>Projects</p>
        <S.Button>Contact me</S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  );
};
