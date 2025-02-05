'use client'

import { ColumnDef } from "@tanstack/react-table"
import { User } from "../_interfaces/user"
import { DataTable } from "@/components/ui/datatable";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
          cell: ({row}) => <div> {row.getValue("id")}</div>
    },
    {
      accessorKey: "name",
      header: ({column}) => {
        return <Button variant="ghost"onClick={ () => column.toggleSorting(column.getIsSorted() === "asc" )}>
              name <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        }, cell: ({row}) => <div> {row.getValue("name")} </div>
    },
    {
      accessorKey: "email",
      header: ({column}) => {
        return <Button variant="ghost"onClick={ () => column.toggleSorting(column.getIsSorted() === "asc" )}>
              name <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        }, cell: ({row}) => <div> {row.getValue("email")} </div>
    },
      {
        accessorKey: "company.name",
        id: "companyName",
        header: "Company",
          cell: ({row}) => {
            return <div> {row.getValue("companyName")}</div>;
          },
      },
];

interface Props{
  users: User[];
}

export default function UsersDataTable({users}: Props){
  return <DataTable columns={columns} data={users} pageSize={2} />
}