import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewMovie from "./pages/ViewMovie";
import ProcessPayment from "./pages/ProcessPayment";
import AddShow from  "./pages/AddShow";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/payment" element={<ProcessPayment />} />
          <Route exact path="/show/new" element={<AddShow />} />
        {/* <Route exact path="/loginU" element={<UserLogin />} />  */}
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewmovie/:id" element={<ViewMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
