import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={285}
    height={500}
    viewBox="0 0 285 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="126" r="125" />
    <rect x="28" y="314" rx="0" ry="0" width="11" height="0" />
    <rect x="16" y="312" rx="0" ry="0" width="4" height="2" />
    <rect x="2" y="266" rx="10" ry="10" width="247" height="19" />
    <rect x="-3" y="308" rx="10" ry="10" width="255" height="88" />
    <rect x="3" y="417" rx="10" ry="10" width="95" height="22" />
    <rect x="110" y="407" rx="20" ry="20" width="143" height="43" />
  </ContentLoader>
);

export default Sceleton;
