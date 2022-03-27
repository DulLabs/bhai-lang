import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>didilang - A toy programming language based on an inside joke</title>
        <meta property="og:title" content="didilang - A toy programming language based on an inside joke" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://didilang.js.org" key="url" />
        <meta property="og:description" content="didilang is dynamically typed toy programming language, based on an inside joke, written in Typescript. Created by Aniket Singh and Rishabh Tripathi." key="description" />
        <meta name="description" content="didilang is dynamically typed toy programming language, based on an inside joke, written in Typescript. Created by Aniket Singh and Rishabh Tripathi." />
        <meta property="og:site_name" content="didilang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

