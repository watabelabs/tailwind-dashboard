const PayrollTable = () => {
  return (
    <table className="min-w-full table-fixed">
      <thead>
        <tr>
          <th
            colSpan={2}
            className="px-5 py-5 border-b-4 border-r-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Employee Details
          </th>
          <th
            colSpan={2}
            className="px-5 py-5 border-b-4 border-r-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Earnings
          </th>
          <th className="px-5 py-5 border-b-4 border-r-2 border-gray-300 bg-green-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Additions
          </th>
          <th className="px-5 py-5 border-b-4 border-r-2  border-gray-300 bg-red-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Deductions
          </th>
          <th className="px-5 py-5 border-b-4 border-gray-300 bg-red-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Totals
          </th>
        </tr>
        <tr>
          <th className="px-5 py-2 border-b border-r border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-700">
            ID
          </th>
          <th className="px-5 py-2 border-b border-r border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-700">
            Name
          </th>
          <th className="px-5 py-2 border-b border-r border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-700">
            Basic Salary
          </th>
          <th className="px-5 py-2 border-b border-r border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-700">
            Health Insurance
          </th>
          <th className="px-5 py-2 border-b border-r border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-700">
            Total Salary
          </th>
          <th className="px-5 py-2 border-b border-r border-gray-300 bg-green-50 text-left text-xs font-semibold text-gray-700">
            Total Additions
          </th>
          <th className="px-5 py-2 border-b border-gray-300 bg-red-50 text-left text-xs font-semibold text-gray-700">
            Total Deductions
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-900">
        <tr>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            303940
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            benjamin thompson
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $10,500.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $600.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $11,100.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-green-50 text-sm">
            $1,600.00
          </td>
          <td className="px-5 py-5 border-b border-gray-300 bg-red-50 text-sm">
            $1,400.00
          </td>
        </tr>
        <tr>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            493039
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            Emily Williams
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $9,500.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $800.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $10,300.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-green-50 text-sm">
            $1,150.00
          </td>
          <td className="px-5 py-5 border-b border-gray-300 bg-red-50 text-sm">
            $1,520.00
          </td>
        </tr>
        <tr>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            934030
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            Michael Davis
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $11,400.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $800.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $12,200.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-green-50 text-sm">
            $1,240.00
          </td>
          <td className="px-5 py-5 border-b border-gray-300 bg-red-50 text-sm">
            $1,720.00
          </td>
        </tr>
        <tr>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            034039
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            Sarah Johnson
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $10,600.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $510.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $11,200.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-green-50 text-sm">
            $2,300.00
          </td>
          <td className="px-5 py-5 border-b border-gray-300 bg-red-50 text-sm">
            $1,250.00
          </td>
        </tr>
        <tr>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            303940
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            Matthew Brown
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $10,530.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $580.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $11,100.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-green-50 text-sm">
            $2,700.00
          </td>
          <td className="px-5 py-5 border-b border-gray-300 bg-red-50 text-sm">
            $1,520.00
          </td>
        </tr>
        <tr>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            303904
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            Joseph Rodriguez
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $8,800.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $640.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-white text-sm">
            $81,400.00
          </td>
          <td className="px-5 py-5 border-b border-r border-gray-300 bg-green-50 text-sm">
            $1,520.00
          </td>
          <td className="px-5 py-5 border-b border-gray-300 bg-red-50 text-sm">
            $2,250.00
          </td>
        </tr>
        <tr className="border-t border-b border-gray-300">
          <td className="px-5 py-2">
            <span className="text-xs text-gray-600">Total employees</span>{" "}
            <br />
            <span className="text-sm font-bold text-gray-900">45</span>
          </td>
          <td className="px-5 py-2">
            <span className="text-xs text-gray-600">Total Amount</span> <br />
            <span className="text-sm font-bold text-gray-900">
              $4,304,940.00
            </span>
          </td>
          <td className="px-5 py-2 border-l border-gray-300">$941,100.00</td>
          <td className="px-5 py-2 border-l border-gray-300">$22,000.00</td>
          <td className="px-5 py-2 border-l border-gray-300">$122,500.00</td>
          <td className="px-5 py-2 border-l border-gray-300">$58,500.00</td>
          <td className="px-5 py-2 border-l border-gray-300">$64,640.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PayrollTable;
