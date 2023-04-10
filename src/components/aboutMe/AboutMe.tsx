import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import logoUdemy from "../../svg/udemy.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/vanesahernandezc",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "#",
      logo: logoLinkedin,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Vanesa Hernández</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
            This is my portfolio to show my projects I have done.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img
            src="/img/profile.png"
            alt="Vanesa Hernández - Frontend Developer"
          />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
