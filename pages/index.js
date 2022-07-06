import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zain Ul-Abdeen | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      {/* Qualifications */}
      {/* Work Experience */}
      <Work />
      <Contact />
    </div>
  );
}
