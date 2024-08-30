import { FC } from 'react';
import { flexRender, Table as TanStackTable } from '@tanstack/react-table';
import { HiMiniArrowDown, HiMiniArrowsUpDown, HiMiniArrowUp } from 'react-icons/hi2';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table';

interface DataTableProps<TData> {
  table: TanStackTable<TData>;
}

export const DataTable: FC<DataTableProps<any>> = ({ table }) => {
  return (
    <>
      <Table className="text-nowrap">
        <TableHeader>
          {
            table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {
                  headerGroup.headers.map(header => (
                    <TableHead key={header.id} colSpan={header.colSpan} rowSpan={header.rowSpan} style={{ width: `${header.getSize()}px` }}>
                      <div
                        {
                          ...(header.column.getCanSort()
                          ? { className: 'cursor-pointer select-none flex gap-x-2 items-center group', onClick: header.column.getToggleSortingHandler() }
                          : {})
                        }
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <HiMiniArrowUp className="text-base text-gray-400/80"/>,
                          desc: <HiMiniArrowDown className="text-base text-gray-400/80"/>,
                        }[header.column.getIsSorted() as string] ?? <HiMiniArrowsUpDown className="hidden group-hover:block text-base text-gray-400/80"/>}
                      </div>    
                    </TableHead>
                  ))
                }
              </TableRow>
            ))
          }
        </TableHeader>
        <TableBody>
          {
            table.getRowModel().rows.length > 0 ?
              ( 
                table.getRowModel().rows.map(row => (
                  <TableRow key={row.id}>
                    {
                      row.getVisibleCells().map(cell => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}    
                        </TableCell>
                      ))
                    }
                  </TableRow>
                ))
              )
              :
              (
                <TableRow>
                  <TableCell colSpan={table.getHeaderGroups()[0]?.headers.length || 1} className="text-center">
                    No se encuentran datos registrados.    
                  </TableCell>
                </TableRow>
              )
          }
        </TableBody>
      </Table>
    </>
  );
};
