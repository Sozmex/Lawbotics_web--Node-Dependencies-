import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";
import Button from "./button";
import Button1 from "./button";

const Works = () => {
  const data = useStaticQuery(graphql`
    {
      allWorksJson {
        nodes {
          id
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 592
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  return (
    <div id="#works">
<<<<<<< HEAD
      <div className="container mx-auto pt-2">
        <div className="flex flex-col gap-12 lg:py-26 py-10">
=======
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-27 py-11">
>>>>>>> 0cfa9441b6f74118297a4d18f7b5ebfb5ed7ddeb
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="INSIGHTS" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                  New at <span className="italic">Lawbotics Insights</span> 
                </h3>
              </div>
              {data.allWorksJson.nodes.slice(0, 1).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
              <div className="xl:flex hidden items-start">
                <Button1 label="Read More" link="Blog2" size="lg" />
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {data.allWorksJson.nodes.slice(1, 3).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
          </div>
          <div className="xl:hidden flex items-start">
            <Button label="READ MORE ➔" link="Blog" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
