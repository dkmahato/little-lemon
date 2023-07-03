import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import Order from "./components/Order";
import Login from "./components/Login";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <Alert />
      </BrowserRouter>
          
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
