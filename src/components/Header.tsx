import { useCallback } from "react";
import styled from "styled-components";

export default function Header() {
  const handleBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <StyledHeader>
      <svg
        style={{ marginLeft: 8 }}
        onClick={handleBack}
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