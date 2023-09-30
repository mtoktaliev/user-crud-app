import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
