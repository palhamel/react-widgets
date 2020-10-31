import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const apiUrl = "https://translation.googleapis.com/language/translate/v2";
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    // helper function:
    const makeTranslation = async () => {
      const { data } = await axios.post(
        apiUrl,
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    makeTranslation();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
