import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Particles from "react-tsparticles";

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
      <style>
        {`
          .hero-image {
<<<<<<< HEAD
            height: 29rem;
=======
            height: 28rem;
>>>>>>> 0cfa9441b6f74118297a4d18f7b5ebfb5ed7ddeb
          }
        `}
      </style>
      <Particles
        className="w-full absolute top-0 left-0"
        options={{
          background: { transparent: true },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, opacity: 0.5 },
            move: { enable: true, speed: 1, random: true },
            number: { value: 100, density: { enable: true, area: 800 } },
            opacity: { value: 0.5, random: true },
            shape: { type: "circle" },
            size: { value: 3, random: true, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
          },
          detectRetina: true,
        }}
      />
      <div className="w-full overflow-hidden relative">
        <GatsbyImage
          image={getImage(data.heroimage)}
          alt="Interior Design"
          className="w-full object-cover object-center ring-5 ring-black hero-image"
          style={{ filter: "brightness(30%) blur(3px)" }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col xl:px-32 items-center text-center gap-6">
            <h1 className="font-display md:text-display-2xl text-display-lg text-white">
              Lawbotics: <span className="italic"> AI Firmware</span>
            </h1>
            <p className="col-span-8 md:text-body-xl text-body-lg font-light text-white max-w-[800px]">
              Optimize Firm Workflow with the Latest in AI Innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
