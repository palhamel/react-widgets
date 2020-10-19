import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("greta thunberg");
  // console.log(term);
  const [results, setResults] = useState([]);
  // console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    // do a earch only when there is a 'term':
    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = results.map((resultData) => {
    console.log(resultData.title);
    return (
      <div key={resultData.pageid} className="item">
        <div className="right floated content">
          <a 
            href={`https://en.wikipedia.org?curid=${resultData.pageid}`} 
            target="_blank"
            rel="noopener noreferrer"
            className='ui button orange'
          >
            Info 
          </a>
        </div>
        <div className="content">
          <div className="header">{resultData.title}</div>
          <span dangerouslySetInnerHTML={{ __html: resultData.snippet}}></span>
          {/* {resultData.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
