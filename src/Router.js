import About from "components/About/about";
import Board from "components/Board/board";
import ContactForm from "components/Contact/contactForm";
import ContactFormWithRef from "components/Contact/contactFormWithRef";
import Home from "components/Home/home";
import Login from "components/Login/login";
import NotFound from "components/NotFound/notFound";
import UserAbout from "components/UserProfile/userAbout";
import UserProfile from "components/UserProfile/userProfile";
import UserSettings from "components/UserProfile/userSettings";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/board" element={<Board />} />
      <Route path="/todo" element={<Board />} />
      <Route path="/doing" element={<Board />} />
      <Route path="/done" element={<Board />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/contactRef" element={<ContactFormWithRef />} />
      <Route path="/profile" />
      <Route
        path="/user/:id"
        element={
          isLoggedIn ? <UserProfile /> : <Navigate to="/login" replace />
        }
      >
        <Route path="about" element={<UserAbout />} />
        <Route path="settings" element={<UserSettings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
