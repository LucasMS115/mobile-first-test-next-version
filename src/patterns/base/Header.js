import styled from "styled-components";
import smile from "../../../public/images/icons/icon.png";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={smile} alt="Smile"/>
      <h1>Some Title</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 5px 0 10px 0;

  img {
      width: 3rem;
      height: 3rem;
      margin: 0 5px;
  }

`;
