import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Explore from "./Pages/Explore";
import { Leaderboard } from "./Pages/Leaderboard";
import { Resources } from "./Pages/Resources";
import { Creator } from "./Pages/Creator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="*" element={<div> ERROR: 404 </div>}></Route>
          <Route path="/Explore" element={<Explore></Explore>}></Route>
          <Route path="/Stats" element={<Leaderboard></Leaderboard>}></Route>
          <Route path="/Resources" element={<Resources></Resources>}></Route>
          <Route path="/Create" element={<Creator></Creator>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
