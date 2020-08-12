import React from 'react';
import localStyles from './scoutingDataTable.module.css';
import {useTable} from "react-table/src/hooks/useTable";

/**
 * Produces a table used to display provided scouting data
 * @param scoutingData - An array of objects representing the scouting data, must be laid out as defined by the
 *                       tableLayout
 * @param tableLayout - An array of objects where each object defines the column information
 * @see https://react-table-omega.vercel.app/docs/quick-start#getting-your-data
 * @see https://react-table-omega.vercel.app/docs/quick-start#define-columns
 * @returns {JSX.Element}
 * @constructor
 */
const ScoutingDataTable = ({ scoutingData, tableLayout }) => {
    const data = React.useMemo(() => scoutingData, [scoutingData]);
    const columns = React.useMemo(() => tableLayout, [tableLayout]);
    const tableInstance = useTable({ columns, data});

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <div className={localStyles.container}>
            <table className={classNames("table table-striped")} {...getTableProps()}>
                <thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
                </thead>
            </table>
            <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
                rows.map(row => {
                    // Prepare the row for display
                    prepareRow(row)
                    return (
                        // Apply the row props
                        <tr {...row.getRowProps()}>
                            {// Loop over the rows cells
                                row.cells.map(cell => {
                                    // Apply the cell props
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {// Render the cell contents
                                                cell.render('Cell')}
                                        </td>
                                    )
                                })}
                        </tr>
                    )
                })}
            </tbody>
        </div>
    )
}

export default ScoutingDataTable;