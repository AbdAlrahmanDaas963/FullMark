import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const languages = [
  {
    code: "en",
    name: "English",
    countary_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    countary_code: "sa",
    dir: "rtl",
  },
];
function LangChanger() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <ButtonGroup
      size="small"
      variant="outlined"
      aria-label="outlined button group"
    >
      {languages.map(({ name, code, countary_code }) => (
        <Button
          key={countary_code}
          onClick={() => i18next.changeLanguage(code)}
          disabled={code === currentLanguageCode}
        >
          {code}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default LangChanger;
