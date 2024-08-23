import { QuestionCardProps } from "@/types/types.ts";
import { CardWrapper, ButtonWrapper } from './QuestionCard.styles';

function QuestionCard(props: QuestionCardProps) {
  const { question, answers, callback, userAnswer, questionNr, totalQuestions } = props;

  return (
    <CardWrapper>
      <p className="number">Question: {questionNr} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="buttons_container">
        {answers.map(answer => (
          <ButtonWrapper 
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}/>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </CardWrapper>
  );
}

export default QuestionCard;