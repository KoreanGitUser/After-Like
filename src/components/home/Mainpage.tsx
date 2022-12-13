import MainPageTemplate from "@utils/common/app/MainPageTemplate";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import PATH from "@utils/routes/PATH";
import useClient from "@store/useClient";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";

function MainPage() {
  const client = useClient();
  const { URL, HOME } = PATH;
  const [data, setData] = useState<any>(null);

  useLayoutEffect(() => {
    axios
      .post(`${URL}${HOME}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((user) => {
        console.log("받아오는 데이터: ", user);
        setData(user);
      });
    console.log("보내는 데이터 :", { email: client.getUserEmail() });
  }, []);
  return (
    <div className="flex flex-wrap w-full h-full gap-6 font-eland select-none">
      {!data && <LoadingSpinner />}
      {data &&
        data.map(
          ({
            birth,
            character,
            ideal,
            nick,
            profile,
            region,
            style,
            image,
          }: any) => (
            <MainPageTemplate
              age={birth ? birth : ""}
              appearance={style ? style : ""}
              img={image[0] === "default" ? "default.png" : image[0]}
              introSelf={profile === "None" ? "" : profile}
              personality={character ? character : ""}
              region={region ? region : ""}
              username={nick ? nick : ""}
              wanted={ideal === "None" ? "" : ideal}
            />
          )
        )}
    </div>
  );
}

export default MainPage;
