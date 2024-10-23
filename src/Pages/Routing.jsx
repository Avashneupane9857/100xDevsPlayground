import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import HomePage from "./HomePage";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/contestpage" element={<ContestPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
