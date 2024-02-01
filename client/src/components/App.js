import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Trails from "../pages/Trails";
import TrailDetail from "../pages/TrailDetail";
import { UserContext } from "../contexts/UserContext";
import { TrailsProvider } from "../contexts/TrailsContext";
import UserProfile from "../pages/UserProfile";
import ReviewEdit from "../pages/ReviewEdit";
import ReviewCreate from "../pages/ReviewCreate";
import TrailCreate from "../pages/TrailCreate";
import "../styles/App.css";

function App() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Login />;
  }

  return (
    <TrailsProvider>
      <header className="header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/user/:uid/reviews/:id/edit" element={<ReviewEdit />} />
          <Route path="/user/:id/reviews" element={<UserProfile />} />
          <Route path="/trails/:id/reviews" element={<ReviewCreate />} />
          <Route path="/trails/:id" element={<TrailDetail />} />
          <Route path="/trails" element={<TrailCreate />} />
          <Route path="/" element={<Trails />} />
        </Routes>
      </main>
    </TrailsProvider>
  );
}

export default App;
