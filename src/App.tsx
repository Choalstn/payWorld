import "./App.css";

import styled from "styled-components";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import store from "./Store";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
