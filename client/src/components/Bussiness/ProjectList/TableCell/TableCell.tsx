import cn from "classnames";
import { ITableCellProps } from "./TableCell.props";
import "./TableCell.scss";

const TableCell = ({ className, children, ...props }: ITableCellProps) => {
  return (
    <div className={cn("custom-table-cell", className)} {...props}>
      {children}
    </div>
  );
};

export default TableCell;
