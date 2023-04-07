import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import styled from "styled-components";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Header />
      <StyledContainer>
        <StyledButton placeholder="로그인" onClick={ () => navigate("/signin")} />
        <StyledButton placeholder="회원가입" onClick={ () => navigate("/signup") } />
      </StyledContainer>
    </PageLayout>
  )
}

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
`

const StyledButton = styled.button`
  margin: auto;
  width: 30px;
  height: 30px;
`