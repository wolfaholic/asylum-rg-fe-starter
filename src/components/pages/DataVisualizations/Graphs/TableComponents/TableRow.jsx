import React from 'react';
import TableInnerSquare from './TableInnerSquare';
import SubTable from './SubTable';

function TableRow(props) {
  const { columns, row, tableWidth, rowHeight } = props;
  // row should be an object with keys for each column here;
  // columns should be an array
  return (
    <div
      className="table-row"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: tableWidth,
        overflow: 'hidden',
      }}
    >
      {columns.map((property, index) => {
        if (row) {
          if (typeof row[property] === 'object') {
            return (
              <SubTable
                dataObject={row[property]}
                rowHeight={rowHeight} // so for the SubTablesTable the row should be an object of objects
                key={index}
              />
            );
          } else {
            return (
              <div key={index} style={{ overflow: 'hidden', flex: '1' }}>
                <TableInnerSquare
                  innerData={row[property]}
                  rowHeight={rowHeight}
                />
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default TableRow;
