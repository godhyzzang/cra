import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import { TestButton, RadSquareCard } from "./css/styled.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestButton radius={15}>빨간버튼</TestButton> {/* 동적 border-radius */}
      </header>
      <RadSquareCard
        width={100}
        height={150}
        radius={15}
        text="둥근 카드 테스트"
      />
    </div>
  );
}

export default App;
