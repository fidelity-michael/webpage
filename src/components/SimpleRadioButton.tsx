import { useState } from "react";
import type { Icon } from "react-feather";
import { motion } from "framer-motion";

interface LanguageOption {
  language: string;
  flag: React.ReactNode; // Icon component passed in
}

interface LanguageRadioProps {
  options: LanguageOption[];
  selected: string;
  onChange: (lang: string) => void;
}

const RadioButton: React.FC<LanguageRadioProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="flex gap-4 items-center">
      {options.map((opt: LanguageOption) => (
        <label
          key={opt.language}
          className="flex items-center gap-2 cursor-pointer p-2"
        >
          <input
            type="radio"
            name="language"
            value={opt.language}
            checked={selected === opt.language}
            onChange={() => onChange(opt.language)}
            className="hidden"
          />

          <motion.div
            animate={{ scale: selected === opt.language ? 1.1 : 1 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">{opt.flag}</span>
            <span className="text-base">{opt.language}</span>
          </motion.div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
