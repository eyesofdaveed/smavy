import React from "react";
import Modal from "./Modal/index";

const TeamItem = ({ img, name, position, description, pdf, link }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef(null);
  const linkRef = React.useRef(null);

  React.useEffect(() => {
    buttonRef.current.classList.add("animate");
    linkRef.current?.classList.add("animate");
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} pdf={pdf} setIsOpen={setIsOpen} />
      <div className="team-member">
        <div className="team-member-info">
          <h1 className="team-member-name">{name}</h1>
          <div className="team-member-position">{position}</div>
          <div className="team-member-description">{description}</div>
          <div className="team-member-socials">
            {link && (
              <a ref={linkRef} href={link} className="team-member-icon">
                <img src="/assets/img/icons/linkedin.png" alt="link" />
              </a>
            )}
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(true)}
              className="team-member-btn"
            >
              Подробнее
            </button>
          </div>
        </div>
        <div className="team-member-img-wrapper">
          <img src={img} alt="photo" className="team-member-img" />
        </div>
      </div>
    </>
  );
};

export default TeamItem;
