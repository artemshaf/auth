import { useNavigate } from "react-router-dom";
import { questionCardsMock, quickStartCards } from "../../../mock";
import { Button } from "../../UI";
import { IQuestionCardsProps } from "./QuestionCards.props";
import "./QuestionCards.scss";

const QuestionCards = ({
  questCards = questionCardsMock,
  quickCards = quickStartCards,
  className,
  ...props
}: IQuestionCardsProps) => {
  const navigate = useNavigate();

  return (
    <>
      <ul className="question-cards__list">
        {questCards.map((card) => (
          <li className="question-cards__list-item">
            <div className="question-cards__list-item__title-block">
              {card.icon && (
                <div className="question-cards__list-item__title-block__img__block">
                  <img
                    src={card.icon}
                    className="question-cards__list-item__title-block__img"
                  />
                </div>
              )}
              <h2 className="question-cards__list-item__title-block__title">
                {card.title}
              </h2>
            </div>
            <p className="question-cards__list-item__description">
              {card.description}
            </p>
            {card.to && (
              <Button
                className="question-cards__list-item__btn"
                appearence="white"
                onClick={() => navigate(card.to!)}
              >
                Learn more
              </Button>
            )}
          </li>
        ))}
      </ul>
      <h1>Quick start guides</h1>
      <ul className="quick-cards__list">
        {quickCards.map((card) => (
          <li className="quick-cards__list-item">
            <div className="quick-cards__list-item__title-block">
              {card.icon && (
                <div className="quick-cards__list__title-block__img">
                  <img src={card.icon} className="quick-cards__list" />
                </div>
              )}
              <h2 className="quick-cards__list-item__title-block__title">
                {card.title}
              </h2>
            </div>
            <p className="quick-cards__list-item__description">
              {card.description}
            </p>
            {card.to && (
              <Button
                className="quick-cards__list-item__btn"
                appearence="white"
                onClick={() => navigate(card.to!)}
              >
                Learn more
              </Button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuestionCards;
