import { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [selectedSection, setSelectedSection] = useState("Home");

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar setSelectedSection={setSelectedSection} />
        <Body selectedSection={selectedSection} />
      </div>
      <Footer />
    </div>
  );
}

export default App;


