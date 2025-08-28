import "./Home.css";

import Landing from "../Components/Landing/Landing";
import HomepageCards from "./HomepageCards";

interface Props {
  theme: string;
}

function Home({ theme }: Props) {
  return (
    <>
      <Landing></Landing>
      <HomepageCards theme={theme}></HomepageCards>

      <div id="placeholder">Hello, World!</div>
    </>
  );
}

export default Home;
