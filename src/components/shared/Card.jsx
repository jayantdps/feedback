import React from "react";
import { PropTypes } from "prop-types";

function Card({ children, reverse }) {
  // return (
  //     // below is the conditional class example
  //     <div className={`card ${reverse && 'reverse'}`}>
  //         {children}
  //     </div>
  //     </div>
  // )
  return (
    // below is example of conditional style.
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}
Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
