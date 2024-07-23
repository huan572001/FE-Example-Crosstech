import {  createSlice } from "@reduxjs/toolkit";
export interface IModalState {
  isOpenModal: boolean;
}

const initialState: IModalState = {
  isOpenModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.isOpenModalWallet = true;
    },
    setCloseModal: (state) => {
      state.isOpenModalWallet = false;
    },
  },
});

export const {
  setOpenModal,
  setCloseModal,
} = modalSlice.actions;

export default modalSlice.reducer;
