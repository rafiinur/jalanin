import React from "react";
import { userColumns } from "./columns";
import { DataTable } from "@/components/data-table";
import type { User } from "@/types/user";

const users: User[] = [];

const UsersTable = () => {
  return <DataTable columns={userColumns} data={users} filterKey="full_name" />;
};

export default UsersTable;
