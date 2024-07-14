import React from "react";
// import { SidebarContainer } from "../css/StyledComponents";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <h2>KernelMentor</h2>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Task</li>
          <li>Mentors</li>
          <li>Message</li>
          <li>Settings</li>
        </ul>
      </nav>
    </SidebarContainer>
  );
}

export default Sidebar;
