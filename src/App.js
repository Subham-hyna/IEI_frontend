import React from 'react'
import './App.css'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Profile from './components/Profile/Profile';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import Event from './components/Event/Event';
import EventDetails from './components/Event/EventDetails/EventDetails';
import Auth from './components/Authenticate/Auth';
import PasswordForgot from './components/Authenticate/PasswordForgot/PasswordForgot';
import ResetPassword from './components/Authenticate/ResetPassword/ResetPassword';
import Mail from './components/Mail/Mail';
import Contact from './components/Contact/Contact';
import DevTeam from './components/DevTeam/DevTeam';
import ScrollToTop from './components/utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/me" element={<Profile />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/gallery/:keyword" element={<Gallery />} />
        <Route exact path="/events" element={<Event />} />
        <Route exact path="/events/:keyword" element={<Event />} />
        <Route exact path="/event/:id" element={<EventDetails />} />
        <Route exact path="/login" element={<Auth />} />
        <Route exact path="/password/forgot" element={<PasswordForgot />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/admin/mail" element={<Mail />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/devteam" element={<DevTeam />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App