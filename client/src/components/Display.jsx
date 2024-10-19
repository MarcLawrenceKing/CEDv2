import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const Display = ({ apiEndpoint, columns }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data);
        setFilterData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const handleFilter = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const newData = filterData.filter((row) =>
      Object.values(row).some(
        (value) =>
          value && // Ensure value exists
          typeof value === "string" && // Filter only string values
          value.toLowerCase().includes(searchValue) // Match search
      )
    );
    setData(newData);
  };

  return (
    <div className="w-11/12 border-8 border-pup-blue-light opacity-95 bg-pup-blue-light h-auto rounded-lg">
      <div className="flex justify-end ">
        <input
          className="p-4 w-2/5 mb-2 border-2 border-pup-blue rounded-2xl"
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
        />
      </div>
      <DataTable
        customStyles={{
          rows: {
            style: {
              fontSize: "100%",
              "&:hover": {
                backgroundColor: "#f3f4f6", // Tailwind gray-200
              },
            },
          },
          headCells: {
            style: {
              backgroundColor: "#f9fafb", // Tailwind gray-100
              fontSize: "135%",
              fontWeight: "bold",
            },
          },
        }}
        columns={columns}
        data={data}
        pagination
        selectableRows
        paginationComponentOptions={{
          noRowsPerPage: true, // This hides the rows per page dropdown
        }}
      />
    </div>
  );
};

export default Display;
