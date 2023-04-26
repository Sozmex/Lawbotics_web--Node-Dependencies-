// index.js
import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Metrics from "../components/metrics";
import Services from "../components/services";
import Services1 from "../components/services1";
import Awards from "../components/awards";
import About from "../components/about";
import Works from "../components/works";
import SectionBreak from "../components/SectionBreak"; // Import the SectionBreak component

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Awards />
    <About />
    <Metrics />
    <SectionBreak />
    <Services />
    <SectionBreak />
    <Works />
    <SectionBreak />
    <Services1 />
    <SectionBreak />
  </Layout>
);

export default IndexPage;
