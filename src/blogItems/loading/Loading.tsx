import React from 'react';
import { CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./Loading.css"

interface Props {
  height?: number;
}

const Loading = ({ height }: Props) => {
  const loaderStyle: CSSProperties = height ? { height: `${height}vh` } : {};

  return (
    <section className="loader section" style={loaderStyle}>
      <div className="sweet-loading">
        <PulseLoader color="var(--accent-color)" className="sweet__loading-loader" />
      </div>
    </section>
  );
};

export default Loading;