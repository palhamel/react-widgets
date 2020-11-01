import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://translation.googleapis.com/language/translate/v2";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    // helper function:
    const makeTranslation = async () => {
      const { data } = await axios.post(
        apiUrl,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    makeTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
