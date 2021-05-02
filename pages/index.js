import styled from "styled-components";
import db from "../db.json";

const BackGroundImage = styled.div``;
const InputUser = styled.input``;
const InputSenha = styled.input``;
const DivLoginUser = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DivLoginSenha = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DivPrincipal = styled.div`
  background-color: ${db.theme.colors.divLoginFundo};
  opacity: 0.9;
  width: 270px;
  height: 340px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export default function Home() {
  return (
    <BackGroundImage>
      <DivPrincipal>
        <DivLoginUser>
        <p style={{width: 270}}>Usuario:
          <InputUser></InputUser>
          </p>
        </DivLoginUser>
        <DivLoginSenha>
          Senha:
          <InputSenha></InputSenha>
        </DivLoginSenha>
      </DivPrincipal>
    </BackGroundImage>
  );
}
