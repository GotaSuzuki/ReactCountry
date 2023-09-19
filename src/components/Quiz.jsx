import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { countryState } from '../states/countryState';
import './Quiz.css';

const Quiz = () => {
  const random2 = Math.floor(Math.random() * 250);
  const countries = useRecoilValue(countryState);
  const [currentImageIndex, setCurrentImageIndex] = useState(random2);
  const [inputText, setInputText] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [correctAnswerNumber, setCorrectAnswerNumber] = useState(0);
  const [questionCountryNum, setQuestionCountryNum] = useState([])
  const [answerQuestionNumber, setAnswerQuestionNumber] = useState([]);

  const inputTextChange = (e) => setInputText(e.target.value);

  useEffect(() => {
    // Fetch the initial value for answerQuestionNumber asynchronously here
    const fetchInitialAnswer = async () => {
      const random = Math.floor(Math.random() * 250);
      await setCurrentImageIndex(random);
      setAnswerQuestionNumber(random);
    };

    fetchInitialAnswer();
  }, []);

  const handleChangeImage = () => {
    const random = Math.floor(Math.random() * 250);
    setCurrentImageIndex(random);
    setAnswerQuestionNumber(random);
    console.log(answerQuestionNumber);
    setQuestionNumber(questionNumber + 1);
    setQuestionCountryNum([...questionCountryNum, random]);
    console.log(questionCountryNum);
  };


  const handleAnswer = () => {
    const correctAnswer = countries[currentImageIndex].cca3;

    if (inputText === correctAnswer) {
      console.log("正解！");
      setCorrectAnswerNumber(correctAnswerNumber + 1);
    } else {
      console.log("不正解...");
    }

    setInputText('');
    handleChangeImage();
    console.log(questionNumber);
    console.log(correctAnswerNumber);
  };

  return (
    <>
      {questionNumber <= 5 ? (
        <div className="quiz-container">
          <div className="quiz-title">
            <h2>クイズ</h2>
            <h3>国旗の国名コードを答えて</h3>
            <h2>{`第${questionNumber}問`}</h2>
          </div>
          <div className="question">
            <img src={countries[currentImageIndex].flags.png} alt="" />
          </div>
          <div className="correctAnswerNumber-container">
            <h2>{`正解数：${correctAnswerNumber}`}</h2>
          </div>
          <div className="input-container">
            <input type="text" value={inputText} onChange={inputTextChange} autoFocus={true} placeholder="JPN" />
            <button onClick={handleAnswer}>答える</button>
          </div>
        </div>
      ) : (
        <div className="wuiz-container">
          <div className="quiz-title">
            <h2>クイズ</h2>
            <h3>{`あなたの正解数は${correctAnswerNumber}/${questionNumber - 1}でした`}</h3>
          </div>
          {/* {countries.map((country) => (
            <h4>{`${country[answerQuestionNumber].name.common}`}</h4>
          ))} */}
          <h4>{`${countries[answerQuestionNumber].name.common}&${answerQuestionNumber}`}</h4>
          <div className="button-container">
            <Link to="/" className="custom-button">ホームに戻る</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;

