import aboutData from "@data/App/about.json";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";

const About = ({ noFirstContent, noWave, rtl }) => {
  const data = aboutData;

  return (
    <section
      className={`about ${noWave ? "" : "section-padding"} style-4`}
      data-scroll-index="2"
    >
      {!noFirstContent && <FirstContent features={data.features} rtl={rtl} />}
      <SecondContent accordions={data.accordions} rtl={rtl} />
      {!noWave && (
        <>
          <img
            src="/assets/img/about/about_s4_wave.png"
            alt=""
            className="top-wave"
          />
          <img
            src="/assets/img/about/about_s4_wave.png"
            alt=""
            className="bottom-wave"
          />
        </>
      )}
    </section>
  );
};

export default About;
