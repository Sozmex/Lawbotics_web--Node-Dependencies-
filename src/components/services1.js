import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="#services1">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="PEOPLE" />
              <h2 className="font-display md:text-display-l text-display-md pt-5">
                
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Bill White"
              description="Bill received his Bachelor of Arts degree in Political Science and History from the University of Victoria in 2018 and his Juris Doctor from Queen’s University in 2022. While at Queen’s, as a participant in the Adam F. Fanaki Competition Law Moot, he won runner-up appellant awards for best individual oralist, best team, and best factum. He has also earned a Certificate in International Business Law from Bader College and received the program’s Global Law Scholarship.
              In his spare time, Bill enjoys reading and writing science fiction. His debut novel, “The Relatives,” reached best-seller status on Amazon during its first week of publication."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Milan Singh-Cheema"
              description="Ceo"
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Zach Osgarby"
              description="Does Stuff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
