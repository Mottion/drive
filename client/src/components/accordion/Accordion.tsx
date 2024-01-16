import React from "react";
import { AccordionProps } from "../../@types/AccordionProps";
import { Container } from "./styles";



const Accordion: React.FC<AccordionProps> = ({folderName, childrenFolders, childrenFiles}) => {
  const folderId = folderName + Math.round(Math.random() * 1E9);
  const folderId2 = folderName + Math.round(Math.random() * 1E9);
  return (
    <Container className="accordion-item">
      <h2 className="accordion-header" id={`panelsStayOpen-${folderId}`}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${folderId2}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <i className="fa-solid fa-folder"></i> {folderName}
        </button>
      </h2>
      <div id={`panelsStayOpen-${folderId2}`} className="accordion-collapse collapse show" aria-labelledby={`panelsStayOpen-${folderId}`}>
        <div className="accordion-body">
          {childrenFolders}
          {childrenFiles}
        </div>
      </div>
    </Container>
  );
}

export default Accordion;