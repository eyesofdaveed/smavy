import { useEffect, useRef } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
import Script from "next/script";
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
      <Script id="facebook-pixel">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '134078346421134');
fbq('track', 'PageView');
`}
      </Script>
      <Head>
        <title>Smavy - Курсы программирования в новом формате</title>
        <meta
          name="facebook-domain-verification"
          content="f4tnwnb6fxv87swnh6yftfhlvrsgxv"
        />
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
