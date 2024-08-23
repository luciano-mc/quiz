import QuestionCard from '@/components/QuestionCard/QuestionCard.tsx';
import Loader from '@/components/Loader/Loader.tsx';
import { useState } from 'react';
import { fetchQuizQuestions } from '@/api/API.tsx';
// Types
import { AnswerObject, Difficulty, QuestionState } from '@/types/types.ts';
// Styles
import { GlobalStyle, Wrapper } from '@/App.styles.ts';

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10;
  
  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>QUIZ</h1>
        {loading && <Loader /> }
        {!loading && !gameOver && (
          <>
            <p className="score">Score: {score}</p>
            <QuestionCard 
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
            {userAnswers.length === number + 1 && 
              number !== TOTAL_QUESTIONS - 1 && 
              <button className="next" onClick={nextQuestion}>
                Next Question
              </button>
            }
          </>
        )}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS && !loading ? (
          <button className="start" onClick={startTrivia}>{gameOver ? 'START' : 'RESTART'}</button>
        ) : null }
      </Wrapper>
    </>
  )
}

export default App;
