import { useState } from "react";
import RadioButton from "./SimpleRadioButton";

const USA_FLAG = "🇺🇸";
const GREEK_FLAG = "🇬🇷";

interface LanguagesProps {
  setLang: (str: string) => void;
}

const Languages: React.FC<LanguagesProps> = ({ setLang }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const options = [
    { language: "English", flag: USA_FLAG },
    { language: "Greek", flag: GREEK_FLAG },
  ];

  return (
    <div className="p-4">
      <RadioButton
        options={options}
        selected={selectedLanguage}
        onChange={(lang) => setSelectedLanguage(lang)}
        setLang={setLang}
      />
    </div>
  );
};

export default Languages;
