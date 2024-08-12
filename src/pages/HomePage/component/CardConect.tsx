import { AppButton } from "@/components/button/AppButton";
import { useAppSelector } from "@/hooks/store";
import { Card } from "antd";

export const CardConect = () => {
  const { loadingTaskUser, taskUser } = useAppSelector((state) => state.home);

  return (
    <Card>
      <AppButton loading={loadingTaskUser}>
        {taskUser?.twitterId?.length > 0
          ? taskUser.twitterUsername
          : "Connect your X account"}
      </AppButton>
    </Card>
  );
};
