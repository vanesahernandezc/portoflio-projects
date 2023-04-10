import React from "react";
import * as S from "./Container.styles";

const Container = ({ children }: any) => {
  return <S.ContainerContent>{children}</S.ContainerContent>;
};

export default Container;
