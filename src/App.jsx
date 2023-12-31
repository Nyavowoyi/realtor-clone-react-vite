import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { SignUp } from "./pages/SignUp"
import { ForgotPassword } from "./pages/ForgotPassword"
import { Offers } from "./pages/Offers"
import { SignIn } from "./pages/SignIn"
import Header from "./components/Header"

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </>
  )
}