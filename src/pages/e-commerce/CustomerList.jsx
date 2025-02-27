import React, { useState } from "react";
import { customerListData } from "../../data/E-commerceData";
import { Button, Select } from "../../components/ui/Buttons";
import { FastForward, Rewind } from "@phosphor-icons/react";

const Card = ({ children }) => {
  return (
    <div
      className={`w-full h-full bg-card border-1 border-[#8957FF]/50 shadow-md py-2 text-primary-text rounded-lg px-0`}
    >
      {children}
    </div>
  );
};

const CustomerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const totalPages = Math.ceil(customerListData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentStocks = customerListData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="w-full flex flex-col gap-6 px-2 md:px-1 py-2 mt-2">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primary-text px-2">
          All Customers
        </h2>

        <div className="flex items-center gap-4">
          <Button variant="purple">Add Customer</Button>
        </div>
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-4 text-primary-text px-4">
          All Customers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-purple rounded-lg text-white">
              <tr className="text-xs md:text-sm">
                <th className="py-3 px-4 text-left">NAME</th>
                <th className="py-3 px-4 text-left">EMAIL</th>
                <th className="py-3 px-4 text-left">LOCATION</th>
                <th className="py-3 px-4 text-left">ORDERS</th>
                <th className="py-3 px-4 text-left">LAST ORDER</th>
                <th className="py-3 px-4 text-left">TOTAL SPENT</th>
                <th className="py-3 px-4 text-left">REFUNDS</th>
              </tr>
            </thead>

            <tbody>
              {customerListData.map((customer) => (
                <tr
                  key={customer.name}
                  className="text-sm  border-b-1 border-[#8957FF]/50 border-dashed"
                >
                  <td className="py-3 px-4">
                    <span className="flex gap-4 items-center text-base-content">
                      <img src={customer.image} alt="" className="h-8" />
                      <span className="font-extrabold text-primary-text">
                        {customer.name}
                      </span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{customer.email}</td>
                  <td className="py-3 px-4 text-gray-500">
                    {customer.location}
                  </td>
                  <td className="py-3 px-4 text-gray-500">{customer.order}</td>
                  <td className="py-3 px-4 text-primary-purple font-bold">
                    # {customer.lastOrderId}
                  </td>
                  <td className="py-3 px-4 text-primary-green font-bold">
                    $ {customer.totalSpent}
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {customer.refunds}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center space-x-4 mt-2">
          <Button
            variant="pur_border"
            className={` text-xs font-medium ${
              currentPage === 1
                ? "bg-primary-purple text-white cursor-not-allowed"
                : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <Rewind size={18} weight="bold" />
          </Button>
          <span className="text-primary-text text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            variant="pur_border"
            className={` text-xs font-medium ${
              currentPage === totalPages
                ? "bg-primary-purple cursor-not-allowed text-white"
                : ""
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <FastForward size={18} weight="bold" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerList;
