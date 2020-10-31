import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Convert = ({ language, text}) => {
  const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

  useEffect(() => {
    axios.post(apiUrl, {}, {
      params: {
        q: text,
        target: language.value,
        key: process.env.REACT_APP_GOOGLE_API_KEY
      }
    })
  }, [language, text])


  return (
    <div>
      
    </div>
  )
}

export default Convert
