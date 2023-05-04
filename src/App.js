import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signInUp/SignIn";
import SignUp from "./components/signInUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<SignUp />} />
        </Routes>
        {user && <Main />}
        <ToastContainer />
        <Footer/>

      </Router>

      
    </>
  );
};

export default App;
