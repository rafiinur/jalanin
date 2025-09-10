"use client";

import React from "react";
import GroupCreateDialog from "./components/group-create-dialog";
import GroupTableWrapper from "./components/group-table-wrapper";

const GroupPage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-primary-600 text-white rounded-t-2xl -mb-4">
        <h1 className="text-xl font-bold text-white">Group</h1>
        <GroupCreateDialog />
      </div>
      <GroupTableWrapper />
    </>
  );
};

export default GroupPage;