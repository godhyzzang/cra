import React from "react";
import MentorsList from "./components/Mentors/MentorsList";
import "./css/App.css"; // 스타일을 적용하기 위한 기본 CSS 파일 (필요에 따라 설정)
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <MentorsList />
    </div>
  );
}

export default App;
