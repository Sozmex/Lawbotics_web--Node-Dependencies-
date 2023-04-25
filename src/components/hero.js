import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CtaButton from "../images/cta-button.svg";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "cityscape1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div className="relative">
      <GatsbyImage
        image={getImage(data.heroimage)}
        alt="Interior Design"
        style={{ filter: "brightness(50%)" }}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col xl:px-32 items-center text-center gap-6">
            <h1 className="font-display md:text-display-2xl text-display-lg">
              Lawbotics: <span className="italic"> AI Firmware</span> *this should just be the logo
            </h1>
            <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
              AI Pioneers for Legal Excellence: Enhancing Law Firms with Tomorrow's Innovations!{" "}
            </p>
          </div>
        </div>
        <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
