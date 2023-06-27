import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Blog } from "./pages";
import { Nav, Footer } from "./componnets";
import { useEffect } from "react";
import {
  getStories,
  setQuery,
  updatePage,
  HeadLines,
} from "./features/stories/storiesSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { page, query, pageSize } = useSelector((story) => story.stories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuery());
  }, []);

  useEffect(() => {
    dispatch(updatePage(page));
  }, []);

  useEffect(() => {
    dispatch(getStories({ query, page, pageSize }));
    dispatch(HeadLines());
  }, [query, page, pageSize]);

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
