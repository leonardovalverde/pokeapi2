import { TableHeadCell } from "./components/EnhancedTableHead/types";

export interface EnhancedTableProps {
  tableHeadCells: TableHeadCell[];
  tableTitle: string;
  rows: {
    [x: string]: string | number;
  }[];
  count?: number;
  rowsPerPage?: number;
  page?: number;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  defaultSorting?: string;
}

export type Order = "asc" | "desc";
