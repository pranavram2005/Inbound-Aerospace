import "./styles.css";
import Stars from "../Scripts/stars";
import LogoAnimate from "../Scripts/logoAnimation";
import AnimateText from "../Scripts/textAnimation";
import Footer from "./Footer";
import Impact from "./Impact";
import MissionProfile from "./missionprofile";
import ReadSection from "./ReadSection";
const Home = () => {
  return (
    <>
      <div className="space">
        <Stars />
        <LogoAnimate />
        <AnimateText />
      </div>
      <ReadSection />
      <Impact />
      <MissionProfile />
      <Footer />
    </>
  );
};
export default Home;
