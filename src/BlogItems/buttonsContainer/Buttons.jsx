import React from "react";
import "./buttons.css";
import { FcPrevious, FcNext } from "react-icons/fc";
import { prevPage, nextPage } from "../../features/stories/storiesSlice";
import { useSelector, useDispatch } from "react-redux";

function Buttons() {
  const dispatch = useDispatch();
  const { page, totalPages, isLoading } = useSelector((story) => story.stories);

  //   const handlePage = (newPage) => {
  //     if (newPage >= 1 && newPage <= totalPages) {
  //       dispatch(updatePage(newPage));
  //       dispatch(getStories({ query, page: newPage }));
  //     }
  //   };

  if (totalPages === 0) {
    return null;
  }

  return (
    <div className="buttons">
      <button
        disabled={isLoading}
        onClick={() => dispatch(prevPage())}
        className="nextBtn"
      >
        <FcPrevious />
      </button>
      <p>
        {page} of {totalPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => dispatch(nextPage())}
        className="prevBtn"
      >
        <FcNext />
      </button>
    </div>
  );
}

export default Buttons;
