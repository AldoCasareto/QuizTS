import React from 'react';
import { AnswerObj } from '../App';

type QuizProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObj | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuizProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  totalQuestions,
  questionNr,
}) => {
  return (
    <div>
      <p>
        Question: {questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <p>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              {answer}
            </button>
          </div>
        ))}
      </p>
    </div>
  );
};

export default QuestionCard;
