import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectContent, getStories } from "../features/stories/storiesSlice";
import { useDispatch, useSelector } from "react-redux";

function ContentPage() {
  const dispatch = useDispatch();
  const { selectedContent, StoriesItems, isLoading } = useSelector(
    (store) => store.stories
  );
  const { id } = useParams();

  useEffect(() => {
    if (StoriesItems.length === 0) {
      dispatch(getStories());
    } else {
      dispatch(selectContent(id));
    }
  }, [id, getStories.length, dispatch]);

  if (isLoading || !selectedContent) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Page details</h3>
      {selectedContent.title}
    </div>
  );
}

export default ContentPage;
