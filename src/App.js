import "./styles/styles.css";
import React from "react";
import { Header } from "./components/Header.js";
import { Form } from "./components/Form.js";
import { SelectBox } from "./components/Select.js";
import { History } from "./components/History.js";

export default function App() {
  const [results, setResults] = React.useState("");

  const [text, setText] = React.useState({
    from: "",
    to: "",
    data: "",
    platform: "api"
  });

  const [from, setFrom] = React.useState("en_EN");
  const [to, setTo] = React.useState("ru_RU");
  const [reverse, setReverse] = React.useState(false);
  const [textRes, setTextRes] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    if (reverse) {
      setText((state) => {
        return {
          ...state,
          from: to,
          to: from,
          data: textRes
        };
      });
    } else if (!reverse) {
      setText((state) => {
        return {
          ...state,
          from: from,
          to: to,
          data: textRes
        };
      });
    }
  }, [reverse]);

  React.useEffect(() => {
    if (from === to) {
      setReverse(!reverse);
    } else
      setText((state) => {
        return {
          ...state,
          from: from,
          to: to
        };
      });
  }, [from, to]);

  React.useEffect(() => {
    if (!text.data && !results?.result) {
      return;
    } else {
      const fetchData = () => {
        fetch("https://api-b2b.backenster.com/b1/api/v3/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer a_tYxoQz2ioXe6bfmUVzxO9H2AyGtGbOkbqtSZx6AvhgHkMCp4k08VTjxbqM9Xc2CFBgbbECPrkCMB4eSq"
          },
          body: JSON.stringify(text)
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.err !== null) setResults("");
            else {
              setResults(data);
              setTextRes(data.result);
            }
          });
      };
      fetchData();
      setHistory((state) => {
        const duplicates = state.filter((el) => el.data === text.data);
        const isDuplicate = duplicates.length > 0;

        if (isDuplicate) {
          return state;
        } else {
          return [...state, { data: text.data, lang: from }];
        }
      });
    }
  }, [text]);

  const handleText = (e) => {
    if (!e.target.value) {
      setResults((state) => {
        return {
          ...state,
          result: ""
        };
      });
    }
    setText((state) => {
      return {
        ...state,
        data: e.target.value
      };
    });
  };

  const handleChange = (e) => {
    if (e) {
      e.preventDefault();
    }
    setReverse(!reverse);
    setFrom(to);
    setTo(from);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setText((state) => {
      return {
        ...state,
        data: ""
      };
    });
    setResults((state) => {
      return {
        ...state,
        result: ""
      };
    });
  };

  const handleHistoryButton = (e) => {
    setText((state) => {
      return {
        ...state,
        data: e.target.value
      };
    });

    history.map((el) => {
      if (el.lang !== from) {
        setTo(from);
        setFrom(el.lang);
      } else return;
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="translatorBox">
        <div className="translator">
          <SelectBox
            setFrom={setFrom}
            setTo={setTo}
            from={from}
            to={to}
            handleChange={handleChange}
          />
          <Form
            text={text}
            handleText={handleText}
            handleChange={handleChange}
            results={results}
            loader={loader}
            handleDelete={handleDelete}
          />
          <History
            history={history}
            handleHistoryButton={handleHistoryButton}
          />
        </div>
      </div>
    </div>
  );
}
