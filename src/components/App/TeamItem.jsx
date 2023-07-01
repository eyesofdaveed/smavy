import React from 'react'
import Modal from './Modal/index';

const TeamItem = ({img, name, position, description, pdf, link}) => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <>
        <Modal isOpen={isOpen} pdf={pdf} setIsOpen={setIsOpen}/>
        <div className="team-member">
          <div className="team-member-info">
            <h1 className="team-member-name">{name}</h1>
            <div className="team-member-position">{position}</div>
            <div className="team-member-description">{description}</div>
            <div className="team-member-socials">
              {
                link && 
                <a href={link} className="team-member-icon">
                  <img src="/assets/img/icons/Linkedin.png" alt="" />
                </a>
              }
              <img 
                onClick={() => setIsOpen(true)} 
                className="team-member-icon" 
                src="/assets/img/icons/file.png" alt="cv" />
            </div>
          </div>
          <div className="team-member-img-wrapper" >
            <img src={img} alt="photo" className="team-member-img"/>
          </div>
        </div>
      </>
    );
  };

export default TeamItem