import { HomeAPI } from "@/services/ex";
import { IUser } from "@/services/types";
import { useEffect, useState } from "react";

export const ListAccount = () => {
  const [data, setData] = useState<IUser[]>([]);
  const getAllData = async () => {
    try {
      const rq = await HomeAPI.getAllUser();
      setData(rq);
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const rq = await HomeAPI.getUser("1");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
    getData();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      {data?.map((e, index) => {
        return (
          <div className="text-black" key={index}>
            {e.address.city}
          </div>
        );
      })}
    </div>
  );
};
