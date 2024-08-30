import { useState } from 'react';
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';

import { DataTable } from './DataTable';
import { DataTablePagination } from './DataTablePagination';
import { InputSearch } from '../ui/InputSearch';

interface PaginateTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

export const PaginateTable = <T,>({ data = [], columns }: PaginateTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<T>({ 
    data: data ?? [], 
    columns,
    state: { globalFilter, sorting },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting
  });

  return (
    <div className="mt-9">
      <div>
        <InputSearch 
          placeholder="Buscar..." 
          onChange={(value) => 
          setGlobalFilter(String(value))} className="h-8 sm:w-full max-w-md"
        />
      </div>
      <div className="rounded-md border mt-5">
        <DataTable table={table} />
      </div>
      <div className="mt-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
};
