import { Container } from "../../components/Layout/Container/Container";
import QuestionCards from "../../components/Plain/QuestionCards/QuestionCards";
import { Input } from "../../components/UI";
import { IDocumentationProps } from "./Documentation.props";
import "./Documentation.scss";

const Documentation = ({ className, ...props }: IDocumentationProps) => {
  return (
    <section>
      <Container>
        <h1 className="documentation__title">
          What do you need help with today?
        </h1>
        <Input
          className="documentation__input"
          placeholder="Enter your question here"
        />
        <QuestionCards />
      </Container>
    </section>
  );
};

export default Documentation;
