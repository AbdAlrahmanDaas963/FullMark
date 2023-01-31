import { useTranslation } from "react-i18next";

import Header from "./components/header/Header";
import Subscribe from "./components/subscribe/Subscribe";
import Welcome from "./components/welcome/Welcome";
import Asks from "./components/asks/Asks";
import CoursesCarousel from "./components/coursesCarousel/CoursesCarousel";

const lngs = [
  { code: "en", native: "English" },
  { code: "ar", native: "Arabic" },
];

function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir;

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="App">
      <Header />
      {/* <h1>{t("welcome")}</h1>
      {lngs.map((lng, i) => {
        const { code, native } = lng;
        return (
          <button key={i} onClick={() => handleTrans(code)}>
            {native}
          </button>
        );
      })} */}
      <Welcome />
      <CoursesCarousel />
      <Subscribe />
      <Asks />
    </div>
  );
}

export default App;
