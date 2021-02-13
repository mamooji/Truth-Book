import Head from "next/head";
// import Link from "next/link ";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
const layout = (props) => {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Truths App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="pb-16 ">{props.children}</main>
      <Footer />
    </div>
  );
};

export default layout;
