import React from "react";
import { AccordionProps } from "../../@types/AccordionProps";
import { Container, LinkFolder } from "./styles";

const Accordion: React.FC<AccordionProps> = ({folderName, folderId, childrenFolders, childrenFiles}) => {
  const folderHash = folderName.replace(" ", "") + Math.round(Math.random() * 1E9);
  const folderHash2 = folderName.replace(" ", "") + Math.round(Math.random() * 1E9);
  return (
    <Container className="accordion-item">
      <LinkFolder to={"/folder/:" + folderId} className="accordion-header" id={`panelsStayOpen-${folderHash}`}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${folderHash2}`} aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
          <i className="fa-solid fa-folder"></i> {folderName}
        </button>
      </LinkFolder>
      <div id={`panelsStayOpen-${folderHash2}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-${folderHash}`}>
        <div className="accordion-body">
          {childrenFolders}
          {childrenFiles}
        </div>
      </div>
    </Container>
  );
}

export default Accordion;