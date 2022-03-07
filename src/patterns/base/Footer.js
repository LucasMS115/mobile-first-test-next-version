import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <p>Some footer stuff - 2022</p>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.footer`
  position: absolute;
  height: 25px;
  border-top: 1px solid var(--color-secondary);
  bottom: 0px;
  left: 0;
  width: 100%;
`;