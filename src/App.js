import Header from "./components/header/Header";
// import Subscribe from "./components/subscribe/Subscribe";
import Welcome from "./components/welcome/Welcome";
// import Asks from "./components/asks/Asks";
import CoursesCarousel from "./components/coursesCarousel/CoursesCarousel";
import LandingBar from "./components/landingBar/LandingBar";
import TopCategory from "./components/TopCat/TopCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <LandingBar />
      <TopCategory />
      <CoursesCarousel />
      {/* <Subscribe />
      <Asks /> */}
    </div>
  );
}

export default App;
