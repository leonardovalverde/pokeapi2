export interface TableHeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  isSortable: boolean;
}

export interface TableHeadEnhancedProps {
  tableHeadCells: TableHeadCell[];
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: "asc" | "desc";
  orderBy: string;
  rowCount: number;
}
