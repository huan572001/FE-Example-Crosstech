import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setOpenModal: (
      state,
      action: PayloadAction<{
        isOpenModal: boolean;
      }>,
    ) => {
      console.log(action.payload.isOpenModal);

      state.isOpenModal = action.payload.isOpenModal;
    },
    setCloseModal: (state) => {
      state.isOpenModal = false;
    },
  },
});

export const { setOpenModal, setCloseModal } = modalSlice.actions;

export default modalSlice.reducer;
