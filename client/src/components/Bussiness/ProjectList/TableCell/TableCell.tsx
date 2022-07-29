import cn from "classnames";
import { ITableCellProps } from "./TableCell.props";
import "./TableCell.scss";

const TableCell = ({ className, children, ...props }: ITableCellProps) => {
  return (
    <td className={cn("custom-table-cell", className)} {...props}>
      {children}
    </td>
  );
};

export default TableCell;
