import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import SignupForm from "./pages/auth/SignupForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignupForm />}>
          ecommerce
        </Route>
      </Routes>
    </div>
  );
}

export default App;
