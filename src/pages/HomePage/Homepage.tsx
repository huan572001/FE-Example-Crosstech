import { useEffect } from "react";
import { CardConect } from "./component/CardConect";
import { useAppDispatch } from "@/hooks/store";
import { getTaskUser } from "@/redux/slice/homeSlice";
import { Slider } from "./component/Slider";

export const Homepage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTaskUser({ address: "huan123" }));
  }, []);
  return (
    <div className="mt-28">
      <CardConect />
      <Slider />
      {/* <ListAccount /> */}
      {/* <TestAPI /> */}
    </div>
  );
};
