import "./App.css";

import styled from "styled-components";

import Landing from "./Pages/Landing";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Landing />
    </Container>
  );
}

export default App;
