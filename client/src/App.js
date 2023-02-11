import logo from "./logo.svg"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import Profile from "./pages/profile/Profile"
import Ngo from "./pages/Home/Ngo"
import Phalin from "./pages/Home/Plalin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/Phalin" exact element={<Phalin />} />
        <Route path="/Ngo" exact element={<Ngo />} />
        {/* <Route path="/profile" exact element={<Profile />} /> */}
        {/* <Route path="/" exact element={<HomePage />} />
        <Route path="auth/signin" element={<SignIn />} />
        <Route path="auth/forgot-password" exact element={<ForgotPassword />} />
        {/* <Route path="/Test" exact element={<Test />} /> */}
        {/* <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/vehicles" exact element={<Vehicles />} />
          <Route path="/stickers" exact element={<Stickers />} />
          <Route path="/profile" exact element={<Profile />} />
          
        </Route> */}
        {/* //TODO: Handle not found routes */}
        {/* <Route path="*" element={`<div>404 Not found<div/>`} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
