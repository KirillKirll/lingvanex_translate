import "../styles/styles.css";
import React from "react";
import { LANGUAGE } from "../utils/index.js";
import { ChangeButton } from "./ChangeButton.js";

export const SelectBox = ({ setFrom, setTo, from, to, handleChange }) => {
  const handleSelect = (id, value) => {
    if (id === "from") {
      setFrom(Object.keys(LANGUAGE).find((key) => LANGUAGE[key] === value));
    }
    if (id === "to") {
      setTo(Object.keys(LANGUAGE).find((key) => LANGUAGE[key] === value));
    }
  };

  return (
    <div className="selectBox">
      <div className="from">
        <Select
          id="from"
          language={LANGUAGE}
          handleSelect={handleSelect}
          activeLang={from}
          from={from}
          to={to}
          handleChange={handleChange}
        />
      </div>
      <ChangeButton handleChange={handleChange} />
      <div className="to">
        <Select
          id="to"
          language={LANGUAGE}
          handleSelect={handleSelect}
          activeLang={to}
          from={from}
          to={to}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

const Select = ({
  handleSelect,
  language,
  id,
  activeLang,
  handleChange,
  to,
  from
}) => {
  return (
    <div className="select">
      <select
        className="selectList"
        id={id}
        value={language[activeLang]}
        onChange={(e) => {
          if (e.target.value === language[to]) {
            handleChange();
          }
          if (e.target.value === language[from]) {
            handleChange();
          }
          handleSelect(id, e.target.value);
        }}
      >
        {Object.values(language).map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};