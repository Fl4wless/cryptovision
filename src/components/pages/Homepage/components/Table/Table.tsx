import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TableSC } from './Table.styled';
import { IAssetData } from '@/types/assets.types';

interface TableProps {
  data: IAssetData[];
}

const columns: ColumnDef<IAssetData>[] = [
  {
    accessorKey: 'rank',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'symbol',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'name',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'marketCapUsd',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'priceUsd',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'volumeUsd24Hr',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'changePercent24Hr',
    cell: (info) => info.getValue(),
  },
  {
    id: 'Actions',
    cell: (info) => <p>actions</p>,
  },
];
const Table: React.FC<TableProps> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableSC>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </TableSC>
  );
};

export default Table;
