import { useEffect, useState } from "react";
import "./Question.css";

const Question = () => {
  const [current, setCurrent] = useState(0);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  const getClassName = (index) => {
    if (index == data[current].selected) return "active";
    else return "";
  };

  const calculateScore = () => {
    let score = 0;
    for (let question of data) {
      if (question.selected == question.correct) score += 1;
    }
    return score;
  };

  return (
    <>
      {isLoading ? (
        <h3>Loading ...</h3>
      ) : (
        <div>
          <h1>Score: {calculateScore()}</h1>
          <hr />
          <span>{data[current].question}</span>
          <hr />
          {data[current].answers.map((item, index) => (
            <button
              className={getClassName(index)}
              onClick={() => {
                data[current].selected = index;
                setCounter(counter + 1);
                if (current < data.length - 1) {
                  setCurrent(current + 1);
                }
              }}
            >
              {item}
            </button>
          ))}
          <hr />
          {data.map((item, index) => (
            <button
              onClick={() => {
                setCurrent(index);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Question;
