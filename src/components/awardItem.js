import React from "react";
import PropTypes from "prop-types";

const AwardItem = ({ logo, title, year }) => {
  const [number, rest] = title.split("|");

  return (
    <div className="flex flex-row gap-5 items-center grow pt-1 pb-1">
      <div className="flex items-center">
        {/* <img src={logo} width={50} height={50} alt={title} /> */}
      </div>
<<<<<<< HEAD
      <div className="relative flex justify-center items-center h-full">
        <p className="text-number-huge font-normal text-neutral-300 mr-2">{number}|</p>
        <div className="pl-2">
          <p className="text-body-xs font-normal text-neutral-300 ml-2">{rest}</p>
          <p className="text-body-xs font-normal text-neutral-300 ml-2">{year}</p>
=======
      <div className="relative">
        <p className="text-number-huge font-normal text-neutral-300 absolute mr-6 pt-1.5">{number}|</p>
        <div className="pl-10">
          <p className="text-body-xs font-normal text-neutral-300">{rest}</p>
          <p className="text-body-xs font-normal text-neutral-300 pb-2">{year}</p>
>>>>>>> 0cfa9441b6f74118297a4d18f7b5ebfb5ed7ddeb
        </div>
      </div>
    </div>
  );
};

AwardItem.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AwardItem;
