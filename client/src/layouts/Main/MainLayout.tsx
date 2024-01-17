import React from "react";
import { Outlet } from "react-router-dom";

// styled-components 
import { Container } from "./styles";
import Accordion from "../../components/accordion/Accordion";
import LinkOptionComponent from "../../components/linkOptionComponent/LinkOptionComponent";

const MainLayout: React.FC = () => {

  const fileIcon = <i className="fa-solid fa-file"></i>;
  const userIcon = <i className="fa-solid fa-user-plus"></i>;
  const usersIcon = <i className="fa-sharp fa-solid fa-users"></i>;
  const shieldIcon = <i className="fa-solid fa-shield"></i>;

  return (
    <Container>
      <header>
        <h2>DRIVE</h2>
        <div className="imageWrapper">
          <img src="/user.jpg" alt="userImage" />
        </div>
      </header>
      <div className="workspace">
        <nav>
          <Accordion folderName="Dashboard" 
            childrenFolders={[
              // <Accordion key="1" folderName="Dashboard2" childrenFolders={[]} childrenFiles={[]}/>
            ]}
            childrenFiles={[
              // <LinkOptionComponent key="2" fileName="DashBoardName" icon={fileIcon} link={"/dashboard"} />
            ]}
          />
        </nav>
        <div className="screen">
          <Outlet />
        </div>
        <div className="usersList">
          <LinkOptionComponent fileName="New User" icon={userIcon} link={"/newUser"}/>
          <LinkOptionComponent fileName="Manage Users" icon={usersIcon} link={"/manageUsers"}/>
          <LinkOptionComponent fileName="Manage Permissions" icon={shieldIcon} link={"/managePermissions"}/>
        </div>
      </div>
    </Container>
  )
}

export default MainLayout;