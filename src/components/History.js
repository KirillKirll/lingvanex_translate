import "../styles/styles.css";
import React from "react";

export const History = ({
  history,
  handleHistoryButton,
  handleShowHistory
}) => {
  return (
    <div className="historyBox">
      <div className="history">
        <div className="historyLabel">Recently viewed:</div>
      </div>
      <div className="history-data-box">
        <div className="historyData">
          {history.map((el, id) => {
            return (
              <div key={id} className="history-buttons-box">
                <button
                  onClick={handleHistoryButton}
                  className="historyButton"
                  value={el.data}
                >
                  {el.data}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
