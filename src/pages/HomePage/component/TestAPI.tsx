import { AppButton } from "@/components/button/AppButton";
import { HomeAPI } from "@/services/ex";
import { IUserST } from "@/services/types";
import { useEffect, useState } from "react";

export const TestAPI = () => {
  const [user, setUser] = useState<IUserST>();
  const [userVerify, setUserVerify] = useState<any>();
  const getUserByAddress = async (address: string) => {
    try {
      const rq = await HomeAPI.getUserTS(address);

      if (rq?.success) {
        setUser(rq?.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getUserVerify = async (address: string) => {
    try {
      const rq = await HomeAPI.getUserVerifySocial(address);
      console.log(rq);

      if (rq?.success) {
        setUserVerify(rq?.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loginSocial = async (address: string, typeSocial: string) => {
    try {
      const rq = await HomeAPI.loginSocial({ address, typeSocial });
      if (rq.success) {
        getUserByAddress("huan155201");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifySocial = async (address: string, typeSocial: string) => {
    try {
      const rq = await HomeAPI.verifySocial({ address, typeSocial });
      if (rq.success) {
        getUserVerify("huan155201");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserByAddress("huan155201");
    getUserVerify("huan155201");
  }, []);

  return (
    <div className="text-black">
      <p>
        ========================================getUser==========================
      </p>
      <div>
        <div>Address:{user?.address}</div>
        <div>tele:{user?.telegramId}</div>
        <div>twiter:{user?.twitterId}</div>
        <div>discord:{user?.discordId}</div>
      </div>

      <p>
        ========================================loginSocial==========================
      </p>
      <AppButton
        onClick={() => {
          loginSocial("huan155201", "telegram");
        }}
      >
        login tele
      </AppButton>
      <AppButton
        onClick={() => {
          loginSocial("huan155201", "discord");
        }}
      >
        login discord
      </AppButton>
      <AppButton
        onClick={() => {
          loginSocial("huan155201", "twitter");
        }}
      >
        login twiter
      </AppButton>
      <p>
        ========================================VerifySocial=================
      </p>
      <AppButton
        disabled={user?.twitterId ? false : true}
        onClick={() => {
          verifySocial("huan155201", "twitter");
        }}
      >
        verify twiter
      </AppButton>
      <AppButton
        disabled={user?.telegramId ? false : true}
        onClick={() => {
          verifySocial("huan155201", "telegram");
        }}
      >
        verify tele
      </AppButton>
      <AppButton
        disabled={user?.discordId ? false : true}
        onClick={() => {
          verifySocial("huan155201", "discord");
        }}
      >
        verify discord
      </AppButton>
      <p>
        ========================================Social task=================
      </p>
      <div>
        <div>tele:{userVerify?.joinChannelTelegram ? "true" : "false"}</div>
        <div>twiter:{userVerify?.joinTwitter ? "true" : "false"}</div>
        <div>discord:{userVerify?.joinVibxDiscord ? "true" : "false"}</div>
      </div>
    </div>
  );
};
