import React, { useState } from "react";
import { invoiceListData } from "../../data/E-commerceData";
import { Button } from "../../components/ui/Buttons";
import {
  DownloadSimple,
  FastForward,
  FlowArrow,
  Infinity,
  PencilSimpleLine,
  Question,
  Rewind,
  Trash,
} from "@phosphor-icons/react";

const Card = ({ children }) => {
  return (
    <div
      className={`w-full h-full bg-card border-1 border-[#8957FF]/50 shadow-md py-2 text-primary-text rounded-lg px-0`}
    >
      {children}
    </div>
  );
};

const InvoiceList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const totalPages = Math.ceil(invoiceListData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentStocks = invoiceListData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="w-full flex flex-col gap-6 px-2 md:px-1 py-2 mt-2">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primary-text px-2">Customers</h2>

        <div className="flex items-center gap-4">
          <Button variant="purple">Add Order</Button>
        </div>
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-4 text-primary-text px-4">
          All Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-purple rounded-lg text-white">
              <tr className="text-xs md:text-sm">
                <th className="py-3 px-4 text-left">INVOICE</th>
                <th className="py-3 px-4 text-left">TOTAL</th>
                <th className="py-3 px-4 text-left">STATUS</th>
                <th className="py-3 px-4 text-left">CUSTOMER</th>
                <th className="py-3 px-4 text-left">ISSUED ON</th>
                <th className="py-3 px-4 text-left">PAID ON</th>
                <th className="py-3 px-4 text-left">PAYMENT TYPE</th>
                <th className="py-3 px-4 text-left">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {invoiceListData.map((invoice) => (
                <tr
                  key={invoice.orderId}
                  className="text-sm  border-b-1 border-[#8957FF]/50 border-dashed"
                >
                  <td className="py-3 px-4">
                    <span className="flex gap-4 items-center text-base-content">
                      <span className="font-extrabold py-3 px-4 text-primary-purple">
                        # {invoice.invoiceId}
                      </span>
                    </span>
                  </td>

                  <td className="py-3 px-4 font-bold">
                    <span
                      className={`py-1 px-1 rounded-full
                      ${
                        invoice.status === "Due"
                          ? "text-primary-yellow "
                          : invoice.status === "Paid"
                          ? "text-primary-green "
                          : invoice.status === "Overdue"
                          ? "text-primary-red "
                          : "text-gray-700 "
                      }
                      `}
                    >
                      $ {invoice.invoiceId}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-bold">
                    <span
                      className={`py-1 px-1 rounded-full
                      ${
                        invoice.status === "Due"
                          ? "text-primary-yellow bg-[#FFD700]/30"
                          : invoice.status === "Paid"
                          ? "text-primary-green bg-[#1EAB92]/30"
                          : invoice.status === "Overdue"
                          ? "text-primary-red bg-[#FB8181]/30"
                          : "text-gray-700 bg-gray-200"
                      }
                      `}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {invoice.customerName}
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    {invoice.issuedOn}
                  </td>
                  <td className="py-3 px-4 text-gray-500">{invoice.paidOn}</td>
                  <td className="py-3 px-4 text-gray-500">
                    <span className="flex gap-1 items-center">
                      {invoice.paymentType === "One-time" ? (
                        <FlowArrow size={20} />
                      ) : invoice.paymentType === "Subscription" ? (
                        <Infinity size={20} />
                      ) : (
                        <Question size={20} />
                      )}
                      {invoice.paymentType}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">
                    <div className="flex gap-2">
                      <PencilSimpleLine
                        size={18}
                        className="cursor-pointer text-gray-500"
                      />
                      <DownloadSimple
                        size={18}
                        className="cursor-pointer text-gray-500"
                      />
                      <Trash
                        size={18}
                        className="cursor-pointer text-primary-red"
                      />
                    </div>
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

export default InvoiceList;
