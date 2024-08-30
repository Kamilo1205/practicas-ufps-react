import { useState } from 'react';
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';

import { Badge } from '@/components/ui/Badge';
import { InputSearch } from '@/components/ui/InputSearch';
import { DataTable } from '@/components/data-table/DataTable';
import { DataTablePagination } from '@/components/data-table/DataTablePagination';

import { Estudiante } from '../types/estudiantesType';
import { useEstudiantesBySemestreActual } from '../hooks/useEstudiante';
import { Link } from 'react-router-dom';

const columns: ColumnDef<Estudiante>[] = [
  {
    header: 'Nombre',
    accessorFn: (row) => row.persona.primerNombre + ' ' + row.persona.segundoNombre 
  },
  {
    header: 'Apellidos',
    accessorFn: (row) => row.persona.primerApellido + ' ' + row.persona.segundoApellido
  },
  {
    header: 'Email',
    accessorKey: 'persona.usuario.email',
  },
  {
    header: 'Código',
    accessorKey: 'codigo',
    cell: ({ row  }) => (
      <div className="flex items-center">
        { row.original.codigo }
      </div>
    )
  },
  {
    header: 'Grupo Matriculado',
    size: 160,
    accessorKey: 'grupoMatriculado',
    cell: ({ row  }) => (
      <div className="flex items-center">
        <Badge className="bg-emerald-500 rounded-md">{ row.original.grupoMatriculado }</Badge>
      </div>
    )
  }
]

export const EstudiantesPage = () => {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [sorting, setSorting] = useState<SortingState>([]);
  
  const { data } = useEstudiantesBySemestreActual();

  const table = useReactTable({ 
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
    <div className="pt-16 px-16 pb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-900 font-extrabold text-4xl">Estudiantes</h1>
      </div>
      
      <div className="mt-7">
        <div>
          <InputSearch 
            placeholder="Buscar..." 
            onChange={(value) => setGlobalFilter(String(value))} 
            className="h-8 sm:w-full max-w-md"
          />
        </div>
        <div className="rounded-md border mt-5">
          <DataTable table={table} />
        </div>
        <div className="mt-4">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  );
};
