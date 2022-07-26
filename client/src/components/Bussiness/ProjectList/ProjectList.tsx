import cn from "classnames";
import { IProjectListProps } from "./ProjectList.props";
import ProjectRow from "./ProjectRow/ProjectRow";
import "./ProjectList.scss";
import { tableMock } from "../../../mock";
import TableCell from "./TableCell/TableCell";
import { Checkbox } from "../../UI";
import Icon from "../../UI/Icon/Icon";
import { v4 } from "uuid";

const ProjectList = ({
  table = tableMock,
  className,
  ...props
}: IProjectListProps) => {
  return (
    <ul className={cn("project-list__list")} {...props}>
      <li key={"project-list__top"} className={cn("project-row")}>
        <TableCell className={cn("project-row__checkbox")}>
          <Checkbox />
        </TableCell>
        <TableCell className={cn("project-row__name")}>
          <span>Project name &nbsp;&nbsp;&nbsp;</span>
          <Icon icon="arrowDown" className="rotate-180 cursor-pointer" />
        </TableCell>
        <TableCell className={cn("project-row__status")}>
          Project Status
        </TableCell>
        <TableCell className={cn("project-row__brand")}>Brand</TableCell>
        <TableCell className={cn("project-row__peoples")}>
          Contributors
        </TableCell>
        <TableCell className={cn("project-row__type")}>Project type</TableCell>
        <TableCell className={cn("project-row__date")}>
          <span className="ml-2">Due date</span>
          <Icon icon="arrowDown" className="cursor-pointer" />
        </TableCell>
        <TableCell className={cn("project-row__icon ")}>Actions</TableCell>
      </li>
      {table.map((row) => (
        <ProjectRow
          key={v4()}
          className={cn("project-list__list-item")}
          row={row}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
