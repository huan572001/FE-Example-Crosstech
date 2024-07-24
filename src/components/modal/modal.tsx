import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setCloseModal } from "@/redux/slice/modalSlice";
import { Modal } from "antd";

export const ModalTest = () => {
  const dispatch = useAppDispatch();
  const { isOpenModal } = useAppSelector((state) => state.modal);

  return (
    <>
      <Modal
        open={isOpenModal}
        onCancel={() => {
          dispatch(setCloseModal());
        }}
        onClose={() => {
          dispatch(setCloseModal());
        }}
      >
        ahii hi
      </Modal>
    </>
  );
};
