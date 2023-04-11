import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

  return (
    <StyledHeader>
      <svg
        style={{ marginLeft: 8 }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="#000000"
        data-svg-content="true"
      ></svg>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  heigth: 56px;
  cursor: pointer;
  border: solid;
`