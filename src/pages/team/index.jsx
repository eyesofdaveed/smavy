import MainLayout from "@layouts/Main";
import React, { useRef, useEffect, useState } from "react";
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav/OnePageNav";
import navbarScrollEffect from "@common/navbarScrollEffect";
import team from "@data/App/team.json";
import Modal from "@components/App/Modal";

const Team = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav style="4" />
      <Navbar navbarRef={navbarRef} />
      <main style={{ marginTop: "-12px" }}>
        <div className="team">
          {team.map((person) => (
            <TeamItem 
              key={person.name}
              name={person.name}
              position={person.position}
              description={person.description}
              img={person.img} />
          ))}
        </div>
      </main>
    </MainLayout>
  );
};

const TeamItem = ({img, name, position, description,pdf}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} pdf={pdf} setIsOpen={setIsOpen}/>
      <div className="team-member">
        <div className="team-member-info">
          <h1 className="team-member-name">{name}</h1>
          <div className="team-member-position">{position}</div>
          <div className="team-member-description">{description}</div>
          <div className="team-member-socials">
            <a href="#" className="team-member-icon">
              <img src="/assets/img/icons/Linkedin.png" alt="" />
            </a>
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

export default Team;
