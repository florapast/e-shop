import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({
  title = "Welcome To E-Shop",
  description = "Get the best for less",
  keywords = "You want them, we have them",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

export default Meta;
