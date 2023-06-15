import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import { TableHeadEnhancedProps } from "./types";
import { visuallyHidden } from "@mui/utils";

const EnhancedTableHead = ({
  tableHeadCells,
  order,
  orderBy,
  onRequestSort,
}: TableHeadEnhancedProps): JSX.Element => {
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {tableHeadCells.map((tableHeadCell) => (
          <TableCell
            key={tableHeadCell.id}
            align={tableHeadCell.numeric ? "right" : "left"}
            padding="normal"
            sortDirection={orderBy === tableHeadCell.id ? order : false}
          >
            {tableHeadCell.isSortable ? (
              <TableSortLabel
                active={orderBy === tableHeadCell.id}
                direction={orderBy === tableHeadCell.id ? order : "asc"}
                onClick={createSortHandler(tableHeadCell.id)}
              >
                {tableHeadCell.label}
                {orderBy === tableHeadCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "Ordenando de forma decrescente"
                      : "Ordenando de forma ascendente"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <>{tableHeadCell.label}</>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
