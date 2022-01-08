import React from "react";
import FeedbackItem from "./FeedbackItem";
// import { PropTypes } from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet</p>;
  }
  console.log(feedback);
  return (
    <>
      <div className="feedback-list">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item}
          handleDelete={handleDelete}/>
          // handleDelete={(id)=> console.log(id)}/>
        ))}
      </div>
    </>  
  );
}
// FeedbackList.propTypes = {
// feedback: PropTypes.arrayof(
// PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// })
// )
// }

export default FeedbackList;
