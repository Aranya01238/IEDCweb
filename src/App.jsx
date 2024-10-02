import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000); // Show loading for 3s
  }, []);

  return (
    <div className="app">
      {!isLoaded ? <Loading /> : (
        <>
          <Header />
          <main>
            <Hero />
            <Vision />
            {/* Add other sections like Mission, Research, etc. here */}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
