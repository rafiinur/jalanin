import React from "react";

import TravelPackageTableWrapper from "./components/travel-package-table-wrapper";
import TravelPackageCreateDialog from "./components/travel-package-create-dialog";

const TravelPackagePage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-primary-600 text-white rounded-t-2xl -mb-4">
        <h1 className="text-xl font-bold text-white">Paket Travel</h1>
        <TravelPackageCreateDialog />
      </div>
      <TravelPackageTableWrapper />
    </>
  );
};

export default TravelPackagePage;
