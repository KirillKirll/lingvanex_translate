import { DebounceInput } from "react-debounce-input";
import "../styles/styles.css";
import React from "react";
import { Loader } from "./Loader.js";

export const Form = ({ text, handleText, results, loader, handleDelete }) => {
  return (
    <form className="form">
      <div className="fromBox">
        <DebounceInput
          className="translate-from"
          element="textarea"
          placeholder="Введите текст..."
          name="data"
          value={text.data}
          minLength={1}
          debounceTimeout={1000}
          onChange={handleText}
        />
        <RemoveButton handleDelete={handleDelete} text={text} />
      </div>
      <div className="position">
        {loader ? <Loader className="textLoader" /> : null}
        <textarea
          className="translate-to"
          readOnly
          value={results?.result || ""}
        />
      </div>
    </form>
  );
};

const RemoveButton = ({ text, handleDelete }) => {
  return (
    <button
      className={`removeButton ${text.data ? "isActiseRemoveButton" : null}`}
      onClick={handleDelete}
      disabled={!text.data}
    ></button>
  )
};