import { Route, Routes } from "react-router-dom";
import { NavBar } from "./router/NavBar";
import { CharacterDetail } from "./screens/CharacterDetail";
import { Favourite } from "./screens/Favourite";
import { Home } from "./screens/Home";
import { NoPageFound } from "./screens/NoPageFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characterdetail" element={<CharacterDetail />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default App;
