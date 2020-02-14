import React, {useState} from "react";

const DataTable = ({ headers = [], data = [], headerColor = "#000", rowColor = "#FFF"}) => {

    const [tableHeaders, setTableHeaders] = useState(headers);
    const [tableData, setTableData] = useState(data);
    const [tableHeaderColor, setTableHeaderColor] = useState(headerColor);
    const [tableRowColor, setTableRowColor] = useState(rowColor);

    return (
      <div className="data-table-container">
          <div className="data-table-header-row">
              {
                  headers.map((item, index) => {
                      return (
                          <div className="data-table-cell" key={index}>item</div>
                      );
                  })
              }
          </div>
          {
              data.map((item, index) => {
                  return (
                    <div className="data-table-row" key={index}>
                    {
                        item.forEach(element => {
                            return (<div className="data-table-cell">{element}</div>);
                        })
                    }
                    </div>
                  );
              })
          }
      </div>
    );
};

export default DataTable;