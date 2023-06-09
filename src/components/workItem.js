import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const WorkItem = ({ image, title, description }) => {
  return (
    <div className="flex basis-1/2 flex-col">
      <GatsbyImage image={image} alt={title} />
      <div className="flex flex-col self-stretch pt-6">
        <h3 className="font-display text-display-md pb-4">
          <Link
            to="/blog2"
            className="hover:text-primary-600 transition duration-300"
          >
            {title}
          </Link>
        </h3>
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkItem;
