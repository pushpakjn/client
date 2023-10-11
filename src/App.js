import React from "react";
import { Route, Routes } from "react-router-dom";
import Event from "./components/Event";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      {/* <Heading />
      <Calendar />
      <ConnectWithGoogleButton /> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/event" element={<Event />} />
    </Routes>
    </div>
  );
}

export default App;
