import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  StoriesItems: [],
  topNews: [],
  isLoading: true,
  query: "bitcoin",
  page: 1,
  topic: "",
  pageSize: 9,
  totalPages: 0,
  error: "",
};

// `https://newsapi.org/v2/everything?q=${query}&language=en&page=${page}&pageSize=${pageSize}&apiKey=aa15640c4b6149b4a67fc925aee56b21`

export const getStories = createAsyncThunk(
  "stories/ getstories",
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;
    const { page, query, pageSize, topic } = getState().stories;

    try {
      const resp = await axios.get(
        `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&page=${page}&page_size=${pageSize}&topic=${topic}`,
        {
          headers: {
            "x-api-key": "YUJhCDVDDU894ZD2HnbViCVOsLdUm5MoRdo1SOJV5M8",
          },
        }
      );
      const { articles, total_pages } = resp.data;
      const totalPages = Math.ceil(total_pages / pageSize);

      return { articles, totalPages };
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const HeadLines = createAsyncThunk(
  "topnews/ Headlines",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.newscatcherapi.com/v2/search?q=topnews&lang=en`,
        {
          headers: {
            "x-api-key": "YUJhCDVDDU894ZD2HnbViCVOsLdUm5MoRdo1SOJV5M8",
          },
        }
      );
      const { articles } = resp.data;

      return { articles };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const storiesSlice = createSlice({
  name: "stories/topnews",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },

    updatePage: (state, action) => {
      state.page = action.payload;
    },
    nextPage: (state) => {
      state.page = state.page + 1;
      if (state.page > state.totalPages - 1) {
        state.page = 1;
        return state.page;
      }
    },
    prevPage: (state) => {
      state.page = state.page - 1;
      if (state.page < 1) {
        state.page = state.totalPages - 1;

        return state.page;
      }
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
        state.totalPages = action.payload.totalPages;
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

export const { setQuery, updatePage, prevPage, nextPage } =
  storiesSlice.actions;

export default storiesSlice.reducer;
