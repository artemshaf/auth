import cn from "classnames";
import Badge from "../../../Plain/Badge/Badge";
import { Checkbox } from "../../../UI";
import Icon from "../../../UI/Icon/Icon";
import TableCell from "../TableCell/TableCell";
import { IProjectRowProps } from "./ProjectRow.props";
import "./ProjectRow.scss";

const ProjectRow = ({ row, className, ...props }: IProjectRowProps) => {
  const { brand, date, name, peoples, status, type } = row;

  const handleAppearence = (status: string) => {
    switch (status) {
      case "cancel":
        return "red-500";
      case "review":
        return "yellow-500";
      case "progress":
        return "blue-500";
      case "approved":
        return "green-500";
      case "build":
        return "green-100";
      case "reconstruction":
        return "red-100";
      case "commercial":
        return "yellow-100";
      case "residential":
        return "blue-100";
    }
  };

  return (
    <li className={cn("project-row", className)} {...props}>
      <TableCell className={cn("project-row__checkbox")}>
        <Checkbox />
      </TableCell>
      <TableCell className={cn("project-row__name")}>
        <Icon icon="folderShared" />
        &nbsp;&nbsp;{name}
      </TableCell>
      <TableCell className={cn("project-row__status")}>
        <Badge appearence={handleAppearence(status)!}>{status}</Badge>
      </TableCell>
      <TableCell className={cn("project-row__brand")}>{brand}</TableCell>
      <TableCell className={cn("project-row__peoples")}>{peoples}</TableCell>
      <TableCell className={cn("project-row__type")}>
        <Badge appearence={handleAppearence(type)!}>{type}</Badge>
      </TableCell>
      <TableCell className={cn("project-row__date")}>
        <Icon icon="calendarToday" />
        &nbsp;&nbsp;
        {date}
      </TableCell>
      <TableCell className={cn("project-row__actions")}>
        <Icon icon="more" className="cursor-pointer" />
      </TableCell>
    </li>
  );
};

export default ProjectRow;
