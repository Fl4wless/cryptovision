import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TableSC } from './Table.styled';
import { IAssetData } from '@/types/assets.types';
import numeral from 'numeral';
import { ReactComponent as GoldenCrown } from '@assets/svg/golden-crown.svg';
import { useTranslation } from 'next-i18next';

interface TableProps {
  data: IAssetData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const { t } = useTranslation('homepage');

  const columns: ColumnDef<IAssetData>[] = React.useMemo(
    () => [
      {
        accessorKey: 'rank',
        header: () => <p>{t('table.columns.rank')}</p>,
        cell: (info) => {
          if (parseInt(info.getValue()) === 1) {
            return (
              <div className="icon-wrapper">
                <GoldenCrown />
              </div>
            );
          }
          return info.getValue();
        },
      },
      {
        accessorKey: 'symbol',
        header: () => <p>{t('table.columns.symbol')}</p>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'name',
        header: () => <p>{t('table.columns.name')}</p>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'marketCapUsd',
        header: () => <p>{t('table.columns.market_cap')}</p>,
        cell: (info) => <p>{numeral(info.getValue()).format('$0,0')}</p>,
      },
      {
        accessorKey: 'priceUsd',
        header: () => <p>{t('table.columns.price')}</p>,
        cell: (info) => <p>{numeral(info.getValue()).format('$0,0')}</p>,
      },
      {
        accessorKey: 'volumeUsd24Hr',
        header: () => <p>{t('table.columns.24_hr_volume')}</p>,
        cell: (info) => <p>{numeral(info.getValue()).format('$0,0')}</p>,
      },
      {
        accessorKey: 'changePercent24Hr',
        header: () => <p>{t('table.columns.24_hr_change')}</p>,
        cell: (info) => <p>{numeral(info.getValue()).format('%0.0')}</p>,
      },
      {
        id: 'Actions',
        header: () => null,
        cell: (info) => <p>actions</p>,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, data],
  );
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
