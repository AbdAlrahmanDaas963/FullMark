import Header from "./components/header/Header";
// import Subscribe from "./components/subscribe/Subscribe";
import Welcome from "./components/welcome/Welcome";
// import Asks from "./components/asks/Asks";
import CoursesCarousel from "./components/coursesCarousel/CoursesCarousel";
import LandingBar from "./components/landingBar/LandingBar";
import TopCategory from "./components/TopCat/TopCategory";
import Footer from "./components/footer/Footer";
import CommentSection from "./components/Comments/CommentSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <LandingBar />
      <TopCategory />
      <CommentSection />
      {/* <CoursesCarousel /> */}
      <Footer />
      {/* <Subscribe />
      <Asks /> */}
    </div>
  );
}

export default App;
