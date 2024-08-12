import { AppButton } from "@/components/button/AppButton";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { getTaskUser } from "@/redux/slice/homeSlice";
import { HomeAPI } from "@/services/ex";
import { STATUS_CARD } from "@/services/types";
import { Card } from "antd";
import clsx from "clsx";
interface PropsCard {
  status: string;
  onClickButton?: () => void;
  loading: boolean;
}
export const Slider = () => {
  const { loadingTaskUser, taskUser } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  const loginSocial = async (address: string, typeSocial: string) => {
    try {
      const rq = await HomeAPI.loginSocial({ address, typeSocial });
      if (rq.success) {
        dispatch(getTaskUser({ address: "huan123" }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifySocial = async (address: string, typeSocial: string) => {
    try {
      const rq = await HomeAPI.verifySocial({ address, typeSocial });
      if (rq.success) {
        dispatch(getTaskUser({ address: "huan123" }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onTwitter = () => {
    verifySocial("huan123", "twitter");
  };
  const onTelegram = async () => {
    if (taskUser.telegramId.length === 0) {
      await loginSocial("huan123", "telegram");
      verifySocial("huan123", "telegram");
    } else {
      verifySocial("huan123", "telegram");
    }
  };

  const onDiscord = async () => {
    if (taskUser.discordId.length === 0) {
      await loginSocial("huan123", "discord");
      verifySocial("huan123", "discord");
    } else {
      verifySocial("huan123", "discord");
    }
  };

  const data = [
    {
      status:
        taskUser?.twitterId?.length > 0
          ? taskUser?.joinTwitter
            ? STATUS_CARD.VERIFY
            : STATUS_CARD.FOLLOW
          : STATUS_CARD.DISABLE,
      onClickButton: onTwitter,
    },
    {
      status:
        taskUser?.telegramId?.length > 0
          ? taskUser?.joinChannelTelegram
            ? STATUS_CARD.VERIFY
            : STATUS_CARD.FOLLOW
          : STATUS_CARD.DISABLE,
      onClickButton: onTelegram,
    },
    {
      status:
        taskUser?.discordId?.length > 0
          ? taskUser?.joinVibxDiscord
            ? STATUS_CARD.VERIFY
            : STATUS_CARD.FOLLOW
          : STATUS_CARD.DISABLE,
      onClickButton: onDiscord,
    },
  ];
  return (
    <div className="flex">
      {data?.map((e, index) => {
        return (
          <CardSlider
            key={index}
            status={e.status}
            loading={loadingTaskUser}
            onClickButton={e.onClickButton}
          />
        );
      })}
    </div>
  );
};

const CardSlider = ({ status, loading, onClickButton }: PropsCard) => {
  return (
    <Card
      className={clsx(
        status === STATUS_CARD.VERIFY ? "!bg-customColor" : "",
        "w-full",
      )}
    >
      {status === STATUS_CARD.VERIFY ? (
        <div>V</div>
      ) : (
        <AppButton
          disabled={status === STATUS_CARD.DISABLE}
          onClick={onClickButton}
          loading={loading}
        >
          Flower
        </AppButton>
      )}
    </Card>
  );
};
