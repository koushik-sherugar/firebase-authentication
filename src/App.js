import "./App.css";
import Signup from "./components/SignUp";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Container
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "650px" }}>
          <Signup />
        </div>
      </Container>
    </>
  );
}

export default App;
