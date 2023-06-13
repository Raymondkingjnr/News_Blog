import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Blog } from "./pages";
import { Nav, Footer } from "./componnets";
import { useEffect } from "react";
import {
  getStories,
  updateQuryparameter,
  updatePage,
} from "./features/stories/storiesSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { isLoading, StoriesItems } = useSelector((story) => story.stories);

  const dispatch = useDispatch();

  useEffect(() => {}, [StoriesItems]);

  useEffect(() => {
    dispatch(updateQuryparameter("bitcoin"));
  });

  useEffect(() => {
    dispatch(updatePage(2));
  });

  useEffect(() => {
    dispatch(getStories());
  }, []);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
