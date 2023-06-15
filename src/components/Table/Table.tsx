import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useMemo } from "react";
import EnhancedTableHead from "./components/EnhancedTableHead/EnhancedTableHead";
import { EnhancedTableProps, Order } from "./types";
import EnhancedTableToolbar from "./components/EnhancedTableToolbar/EnhancedTableToolbar";
import { getComparator, stableSort } from "./functions";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { theme } from "@/GlobalStyles";
import Button from "@mui/material/Button";

export default function EnhancedTable({
  tableHeadCells,
  rows,
  tableTitle,
  count,
  rowsPerPage = 10,
  page = 1,
  onNextPage,
  onPreviousPage,
  defaultSorting,
}: EnhancedTableProps) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<any>(defaultSorting);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = useMemo(() => {
    if (rows.length > 0) {
      return stableSort(rows, getComparator(order, orderBy)).slice(0, 10);
    }
    return rows;
  }, [order, orderBy, rows]);

  const pageCounter = useMemo(() => {
    return rowsPerPage * page;
  }, [page, rowsPerPage]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar title={tableTitle} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              rowCount={rows.length}
              tableHeadCells={tableHeadCells}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedRows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name + index.toString()}
                  >
                    {Object.entries(row).map(([key, value], index) => {
                      return (
                        <TableCell
                          component="th"
                          scope="row"
                          padding="normal"
                          key={index}
                          sx={{
                            width: `calc(100% / ${tableHeadCells.length})`,
                          }}
                        >
                          {key.toLowerCase().indexOf("picture") !== -1 &&
                          value ? (
                            <Image
                              src={value.toString()}
                              alt="Nome do pokemon"
                              width={48}
                              height={48}
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          padding={theme.spacing(2)}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            "@media (max-width: 620px)": {
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          {onPreviousPage && onNextPage && count && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "@media (max-width: 620px)": {
                  marginBottom: theme.spacing(2),
                },
              }}
            >
              <Button
                sx={{ lineHeight: 0 }}
                disabled={page === 0}
                onClick={() => onPreviousPage()}
              >
                Anterior
              </Button>
              <Typography>{page}</Typography>
              <Button
                sx={{ lineHeight: 0 }}
                onClick={() => onNextPage()}
                disabled={pageCounter + 10 >= count}
              >
                Próximo
              </Button>
            </Box>
          )}
          {count && (
            <Typography
              sx={{
                marginLeft: theme.spacing(2),
                "@media (max-width: 620px)": {
                  marginLeft: 0,
                },
              }}
            >
              Mostrando {pageCounter}-{pageCounter + 10} de {count}
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
