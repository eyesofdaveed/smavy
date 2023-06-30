import React from 'react'
import Modal from './Modal/index';

const CourseItem = ({ pdf, title, text, image}) => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <>
        <Modal pdf={pdf} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="courses-item">
          <div className="courses-item-info">
            <h1 className="courses-item-title">{title}</h1>
            <div className="courses-item-body">{text}</div>
            <button className="pdf-btn" onClick={() => setIsOpen(true)}>
              Силлабус
            </button>
          </div>
          <div className="courses-item-img">
            <img src={image} alt="" />
          </div>
        </div>
      </>
    );
  };

export default CourseItem