import React from "react";
import DestinationCreateDialog from "./components/destination-create-dialog";
import DestinationTableWrapper from "./components/destination-table-wrapper";

const DestinationPage = async () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-primary-600 text-white rounded-t-2xl -mb-4">
        <h1 className="text-xl font-bold text-white">Destinasi</h1>
        <DestinationCreateDialog />
      </div>
      <DestinationTableWrapper />
    </>
  );
};

export default DestinationPage;
