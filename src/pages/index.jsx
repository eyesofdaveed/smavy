import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav/OnePageNav";
import Header from "@components/App/Header";
import Clients from "@components/App/Clients";
import Features from "@components/App/Features";
import About from "@components/App/About";
import Screenshots from "@components/App/Screenshots";
import Testimonials from "@components/App/Testimonials";
import Pricing from "@components/App/Pricing";
import FAQ from "@components/App/FAQ";
import Community from "@components/Contact/Community";
import Footer from "@components/App/Footer";
import Form from "@components/Contact/Form";

const HomeAppLandingOnePage = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);


  return (
    <>
      <Head>
        <title>Smavy - Курсы программирования в новом формате</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <Header />
        <main style={{ marginTop: "-12px" }}>
          <Clients />
          <Features />
          <About />
          <Screenshots />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Community />
          <Form />
        </main>
        <Footer />
      </MainLayout>
    </>
  );
};

export default HomeAppLandingOnePage;
