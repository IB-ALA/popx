import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import CreateAccountPage from "./pages/create account";
import Home from "./pages/home";
import LoginPage from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
