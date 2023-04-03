import Head from "next/head";
import PreLoader from "@components/PreLoader";
import ScrollToTop from "@components/ScrollToTop";

const MainLayout = ({ children, scrollTopText }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/lib/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/css/lib/all.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/animate.css" />
        <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <PreLoader />
      {children}
      <ScrollToTop topText={scrollTopText} />
    </>
  );
};

export default MainLayout;
