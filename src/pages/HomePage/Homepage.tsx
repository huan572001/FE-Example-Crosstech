import { AppButton } from "@/components/button/AppButton";
import { useAppDispatch } from "@/hooks/store";
import { setOpenModal } from "@/redux/slice/modalSlice";
import { ListAccount } from "./component";

export const Homepage = () => {
  const dispatch = useAppDispatch();
  const onOpenModal = () => {
    console.log("hii");

    dispatch(setOpenModal({ isOpenModal: true }));
  };
  return (
    <div className="mt-28">
      <AppButton
        // loading={true}
        onClick={() => onOpenModal()}
        className="cursor-pointer"
      >
        redux
      </AppButton>
      <ListAccount />
    </div>
  );
};
