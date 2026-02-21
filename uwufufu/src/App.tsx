import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";
import { CreateGame } from "./pages/CreateGame";

export function App() {
    return (
        <div>
      <nav>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/CriarJogo" element={<CreateGame />} />
        <Route path="" element={<h1>Página Não Encontrada (404)</h1>} />
      </Routes>
        </nav>
    </div>
    )
}

