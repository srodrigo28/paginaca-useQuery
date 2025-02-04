'use client'

import { ColumnDef } from "@tanstack/react-table"
import { User } from "../_interfaces/user"
import { DataTable } from "@/components/ui/datatable";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
          cell: ({row}) => {
            return <div> {row.getValue("id")}</div>;  
          },
    },
    {
      accessorKey: "name",
      header: "Name",
        cell: ({row}) => {
          return <div>{row.getValue("name")}</div>;
        },
    },
    {
      accessorKey: "email",
      header: "E-mail",
        cell: ({row}) => {
          return <div> {row.getValue("email")}</div>;  
        },
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
  return <DataTable columns={columns} data={users} />
}