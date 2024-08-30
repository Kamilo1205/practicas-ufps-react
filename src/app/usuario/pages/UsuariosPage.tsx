import { useState } from 'react';
import { ColumnDef, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi2';

import { Badge } from '@/components/ui/Badge';
import { InputSearch } from '@/components/ui/InputSearch';
import { DataTable } from '@/components/data-table/DataTable';
import { DataTablePagination } from '@/components/data-table/DataTablePagination';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';

import { useUsuarios } from '../hooks/useEstudiantes';
import { Usuario } from '../types/usuarioTypes';

export const columns: ColumnDef<Usuario>[] = [
  {
    header: "Email",
    accessorKey: "email",
    size: 400,
    cell: ({ row }) => (
      <div className="flex items-center gap-8 justify-between">
        { row.original.email }
        <Badge className="rounded-md gap-1" variant="secondary">
          {
            row.original.isEmailConfirmed 
              ? (
                <>
                  <HiOutlineCheckCircle className="text-lg text-green-500" />
                  Confirmado
                </>
              ) : 
              (
                <>
                  <HiOutlineXCircle className="text-lg text-red-500" />
                  No confirmado
                </>
              )
          }
        </Badge>
      </div>
    ),
  },
  {
    header: "Roles",
    accessorKey: "roles",
    minSize: 280,
    enableSorting: false,
    cell: ({ row }) => {
      const roles = row.original.roles;
      const [firstRole, ...remainingRoles] = roles;
      const remainingRolesCount = remainingRoles.length;

      return (
        <div className="flex items-center gap-1">
          {
            firstRole && (
              <Badge variant="outline" className="rounded-md capitalize">
                { firstRole.nombre }
              </Badge>
            )
          }
          {
            remainingRolesCount > 0 && (
              <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                    <Badge variant="outline" className="rounded-md capitalize">
                        +{remainingRolesCount} más
                    </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                    <ol>
                        {remainingRoles.map((rol, index) => (
                        <li
                            className="first-letter:capitalize text-xs text-gray-900"
                            key={rol.id}
                        >
                            {rol.nombre}
                            {index < remainingRoles.length - 1 && <span>,</span>}
                        </li>
                        ))}
                    </ol>
                    </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          }
        </div>
      );
    },
  },
  {
    header: "Registrado",
    accessorKey: "estaRegistrado",
    cell: ({ row }) => (
      <div className="flex items-center">
        {
          <Badge className="rounded-md gap-1" variant="secondary">
            {
              row.original.estaRegistrado 
                ? (
                  <>
                      <HiOutlineCheckCircle className="text-lg" />
                      Registrado
                  </>
                ) : (
                  <>
                    <HiOutlineXCircle className="text-lg" />
                    No Registrado
                  </>
                )
            }
          </Badge>
        }
      </div>
    ),
  },
  {
    header: "Estado",
    accessorKey: "estaActivo",
    cell: ({ row }) => (
      <div className="flex items-center">
        { 
          row.original.estaActivo 
            ? ( <Badge className="bg-emerald-500 rounded-md">Activo</Badge>) 
            : ( <Badge className="bg-red-500 rounded-md">Inactivo</Badge>)
        }
      </div>
    ),
  },
];

export const UsuariosPage = () => {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [sorting, setSorting] = useState<SortingState>([]);
  
  const { data } = useUsuarios();

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
        <h1 className="text-gray-900 font-extrabold text-4xl">Usuarios</h1>
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
