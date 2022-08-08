import React from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Data from "./data";

function App() {
  const information = Data.map((item) => {
    return <Post item={item} />;
  });
  return (
    <div className="container">
      <Header />
      <div className="middle-container">{information}</div>
    </div>
  );
}

export default App;
