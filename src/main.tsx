import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, SkipLink } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <SkipLink href="#home">Pular para o conteúdo</SkipLink>
      <NavBar />
      <Home />
      <Footer />
    </GlobalStyle>
  </React.StrictMode>
);
