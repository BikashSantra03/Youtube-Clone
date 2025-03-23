import { useSearchParams } from "react-router";
import ComentsContainer from "./ComentsContainer";

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  return (
    <div className="px-5 w-full">
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <ComentsContainer/>
    </div>
  );
};

export default WatchPage;
