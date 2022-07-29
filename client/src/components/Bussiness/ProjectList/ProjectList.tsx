import cn from "classnames";
import { IProjectListProps } from "./ProjectList.props";
import ProjectRow from "./ProjectRow/ProjectRow";
import "./ProjectList.scss";
import { tableMock } from "../../../mock";
import { Checkbox } from "../../UI";
import Icon from "../../UI/Icon/Icon";
import { v4 } from "uuid";
import { useState } from "react";
import { IProjectRow } from "./ProjectRow/ProjectRow.props";

const ProjectList = ({
  table = tableMock,
  className,
  ...props
}: IProjectListProps) => {
  const [rowId, setRowId] = useState<number>(1);
  const [rows, setRows] = useState<IProjectRow[]>(table);

  const dragStartHandler = (
    e: React.DragEvent<HTMLTableRowElement>,
    row: IProjectRow
  ) => {
    console.log("dragStartHandler");
    setRowId(row.id);
  };
  const dragEndHandler = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    console.log("dragEndHandler");
  };
  const dragOverHandler = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
  };
  const dropHandler = (
    e: React.DragEvent<HTMLTableRowElement>,
    row: IProjectRow
  ) => {
    changePlaceRow(row.id);
  };

  const changePlaceRow = (id: number) => {
    setRows(
      rows.map((item): IProjectRow => {
        if (item.id === id) {
          return { ...item, id: rowId };
        }
        if (item.id === rowId) {
          return { ...item, id };
        }
        return item;
      })
    );
    console.log(rows);
  };

  const sortRows = (a: IProjectRow, b: IProjectRow) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="table-responsive">
      <table className={cn("project-list__list")} {...props}>
        <thead key={"project-list__top"}>
          <tr>
            <th className={cn("project-row__checkbox")}>
              <Checkbox />
            </th>
            <th className={cn("project-row__name")}>
              <span>Project name &nbsp;&nbsp;&nbsp;</span>
              <Icon icon="arrowDown" className="cursor-pointer" />
            </th>
            <th className={cn("project-row__status")}>Project Status</th>
            <th className={cn("project-row__brand")}>Brand</th>
            <th className={cn("project-row__peoples")}>Contributors</th>
            <th className={cn("project-row__type")}>Project type</th>
            <th className={cn("project-row__date")}>
              <span className="ml-2">Due date</span>
              &nbsp;&nbsp;&nbsp;
              <Icon icon="arrowDown" className="cursor-pointer" />
            </th>
            <th className={cn("project-row__icon ")}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.sort(sortRows).map((row) => (
            <ProjectRow
              draggable
              onDragStart={(e) => dragStartHandler(e, row)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, row)}
              key={v4()}
              className={cn("project-list__list-item")}
              row={row}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
