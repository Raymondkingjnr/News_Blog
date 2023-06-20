import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  StoriesItems: [],
  topNews: [],
  isLoading: true,
  query: "",
  page: 0,
  totalResults: 0,
};

export const getStories = createAsyncThunk(
  "stories/ getstories",
  async (name, thunkAPI) => {
    const { getState } = thunkAPI;
    const { query, page } = getState().stories;

    try {
      const resp = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&page=${page}&apiKey=aa15640c4b6149b4a67fc925aee56b21`
      );
      const { articles, totalResults } = resp.data;
      const totalPages = Math.ceil(totalResults / 20);

      return { articles, totalPages };
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const HeadLines = createAsyncThunk(
  "topnews/ Headlines",
  async (name, thunkAPI) => {
    const { getState } = thunkAPI;

    console.log(getState);

    try {
      const resp = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa15640c4b6149b4a67fc925aee56b21"
      );
      const { articles } = resp.data;

      return { articles };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    updateQuryparameter: (state, action) => {
      state.query = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getStories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.StoriesItems = action.payload;
        state.totalResults = action.payload.totalPages;
      })
      .addCase(getStories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(HeadLines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(HeadLines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topNews = action.payload;
      })
      .addCase(HeadLines.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateQuryparameter, updatePage } = storiesSlice.actions;

export default storiesSlice.reducer;
