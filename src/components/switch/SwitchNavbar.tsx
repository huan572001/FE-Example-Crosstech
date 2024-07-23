import { useState } from "react";
import { Button } from "antd";
import clsx from "clsx";

export const SwitchNavbar = () => {
  const [action, setAction] = useState<boolean>(true);

  return (
    <>
      <div className="flex w-full max-w-4xl mx-auto mt-4 overflow-hidden bg-secondaryColor rounded-2xl">
        <Button
          onClick={() => setAction(true)}
          className={clsx(
            "flex-1 border-none text-sm hover:!bg-customColor hover:!text-white pb-1 h-6 my-1 ml-1 rounded-2xl",
            action ? "text-white bg-customColor" : "text-dark bg-[transparent]",
          )}
        >
          Mainnet
        </Button>
        <Button
          onClick={() => setAction(false)}
          className={clsx(
            "border-none hover:!text-white flex-1 hover:!bg-customColor text-sm pb-1 h-6 my-1 mx-1 rounded-2xl",
            action
              ? "text-dark bg-[transparent]"
              : "text-white !bg-customColor",
          )}
        >
          Testnet
        </Button>
      </div>
    </>
  );
};
