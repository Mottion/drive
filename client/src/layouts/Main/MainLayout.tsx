import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// styled-components 
import { Container } from "./styles";
import Accordion from "../../components/accordion/Accordion";
import LinkOptionComponent from "../../components/linkOptionComponent/LinkOptionComponent";
import { useServer } from "../../contexts/ServerContext";
import { FolderEntityProps } from "../../@types/FolderEntityProps";

const MainLayout: React.FC = () => {
  const [folders, setFolders] = useState<FolderEntityProps[]>([]);
  
  const server = useServer();


  const fileIcon = <i className="fa-solid fa-file"></i>;
  const userIcon = <i className="fa-solid fa-user-plus"></i>;
  const usersIcon = <i className="fa-sharp fa-solid fa-users"></i>;
  const shieldIcon = <i className="fa-solid fa-shield"></i>;

  useEffect(() => {
    getUserFolders()
  },[]) 

  async function getUserFolders(){
    const folders = await server.getUserFolders();
    if(folders){
      setFolders(folders);
    }
  } 

  function renderFolders(foldersArray: FolderEntityProps[]){
    const elements = foldersArray.map((folder, index) => (
      <Accordion
        key={index}
        folderId={folder.id.toString()}
        folderName={folder.folderName} 
        childrenFolders={renderFolders(folder.childFolders)} 
        childrenFiles={[]}
      />
    ))
    return elements;
  }

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
          {renderFolders(folders)}
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