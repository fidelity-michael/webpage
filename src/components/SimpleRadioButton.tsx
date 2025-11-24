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
    <div className="flex flex-col justify-start gap-4 items-start">
      <span className="text-2xl ml-1">Languages</span>
      {options.map((opt: LanguageOption) => (
        <label key={opt.language} className="cursor-pointer w-full">
          <div className="w-38 flex items-center ps-4 px-4 rounded-xl border border-gray-700 bg-neutral-primary-soft rounded-base">
            <input
              type="radio"
              name="language"
              value={opt.language}
              checked={selected === opt.language}
              onChange={() => onChange(opt.language)}
              className=""
            />
            <span className="ml-3 text-2xl">{opt.flag}</span>
            <span
              className="w-full py-4 select-none ms-2 text-sm font-medium text-heading"
            >
              {opt.language}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
