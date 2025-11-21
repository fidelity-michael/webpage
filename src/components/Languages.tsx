import { useState } from "react";
import RadioButton from "./SimpleRadioButton";

const USA_FLAG = "🇺🇸";
const GREEK_FLAG = "🇬🇷";

const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

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
      />
    </div>
  );
};

export default Languages;
