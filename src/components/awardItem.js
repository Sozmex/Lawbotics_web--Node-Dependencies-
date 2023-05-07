import React from "react";
import PropTypes from "prop-types";

const AwardItem = ({ logo, title, year }) => {
  const [number, rest] = title.split("|");

  return (
    <div className="flex flex-row gap-5 items-center grow pt-2 pb-1">
      <div className="flex items-center">
        {/* <img src={logo} width={50} height={50} alt={title} /> */}
      </div>
      <div className="relative">
        <p className="text-number-huge font-normal text-neutral-300 absolute mr-6 pt-1.5">{number}|</p>
        <div className="pl-10">
          <p className="text-body-xs font-normal text-neutral-300">{rest}</p>
          <p className="text-body-xs font-normal text-neutral-300 pb-2">{year}</p>
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
