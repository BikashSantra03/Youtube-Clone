import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";
import LiveVideos from "./components/LiveVideos";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="results" element={<SearchResultPage />} />
            <Route path="live" element={<LiveVideos />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
