import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HomeAPI } from "@/services/ex";
export interface IModalState {
  taskUser: {
    twitterUsername: string;
    telegramId: string;
    twitterId: string;
    discordId: string;
    joinChannelTelegram: boolean;
    joinVibxDiscord: boolean;
    joinTwitter: boolean;
  };
  loadingTaskUser: boolean;
}

const initialState: IModalState = {
  taskUser: {
    twitterUsername: "",
    telegramId: "",
    twitterId: "",
    discordId: "",
    joinChannelTelegram: false,
    joinVibxDiscord: false,
    joinTwitter: false,
  },
  loadingTaskUser: false,
};

export const getTaskUser = createAsyncThunk(
  "getTaskUser",
  async ({ address }: { address: string }, thunkAPI) => {
    const { home } = thunkAPI.getState() as RootState;
    try {
      const result = await Promise.all([
        HomeAPI.getUserTS(address),
        HomeAPI.getUserVerifySocial(address),
      ]);

      if (result[0]?.msg || result[1]?.msg) {
        return { ...result[0]?.msg, ...result[1]?.msg };
      } else {
        return home.taskUser;
      }
    } catch (error) {
      return home.taskUser;
    }
  },
);

export const modalSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskUser.pending, (state) => {
        state.loadingTaskUser = true;
      })
      .addCase(getTaskUser.fulfilled, (state, actions) => {
        state.loadingTaskUser = false;
        state.taskUser = actions.payload;
      })
      .addCase(getTaskUser.rejected, (state) => {
        state.loadingTaskUser = false;
      });
  },
});

export default modalSlice.reducer;
