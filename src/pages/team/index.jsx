import MainLayout from "@layouts/Main";
import React, { useRef, useEffect, useState } from "react";
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav/OnePageNav";
import navbarScrollEffect from "@common/navbarScrollEffect";
import team from "@data/App/team.json";
import TeamItem from "@components/App/TeamItem";

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

export default Team;
