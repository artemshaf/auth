import { v4 } from "uuid";
import Calendar from "../../components/Bussiness/Calendar/Calendar";
import FilterPanel from "../../components/Bussiness/FIlterPanel/FilterPanel";
import ProjectList from "../../components/Bussiness/ProjectList/ProjectList";
import { Container } from "../../components/Layout/Container/Container";
import { Button } from "../../components/UI";
import Icon from "../../components/UI/Icon/Icon";
import CalendarPage from "./CalendarPage/CalendarPage";
import { IProjectPageProps } from "./Projects.props";
import "./Projects.scss";

const Projects = ({ className, ...props }: IProjectPageProps) => {
  const projectActionsItems = [
    {
      element: (
        <Button className="p-3" appearence="primary">
          New project &nbsp;
          <Icon icon="add" />
        </Button>
      ),
    },
    {
      element: (
        <Button className="p-3">
          <Icon icon="notifications" />
        </Button>
      ),
    },
    {
      element: (
        <Button className="p-3">
          <Icon icon="search" />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Container>
        {/* <div className="projects__top-panel">
          <h1 className="projects__top-panel__title">Current projects</h1>
          <div className="projects__top-panel__actions">
            <Button className="flex" appearence="primary">
              New project &nbsp; <Icon icon="add" />
            </Button>
            <Button className="flex p-2">
              <Icon icon="add" />
            </Button>
            <Button className="flex p-2">
              <Icon icon="search" />
            </Button>
          </div>
        </div> */}
      </Container>
      {/* <FilterPanel /> */}
      <ProjectList />
      <CalendarPage />
    </>
  );
};

export default Projects;
