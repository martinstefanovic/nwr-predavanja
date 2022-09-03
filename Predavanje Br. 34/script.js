const createTable = (options) => {
  const tableHolder = document.getElementById(options.holder);
  const table = document.createElement('table');
  table.setAttribute('border', 1);
  const header = document.createElement('tr');
  const tableRowArray = [];
  // * Add table header
  options.cols.forEach((col) => {
    let columnHeader = document.createElement('th');
    columnHeader.innerText = col.title;
    header.appendChild(columnHeader);
  });
  // * Add table rows
  options.rows.forEach((row) => {
    let tableRow = document.createElement('tr');
    options.cols.forEach((col) => {
      let tableCell = document.createElement('td');
      tableCell.innerText = row[col.field];
      tableRow.appendChild(tableCell);
    });
    tableRowArray.push(tableRow);
  });
  // * Append header and rows to table
  table.appendChild(header);
  tableHolder.appendChild(table);
  tableRowArray.forEach((row) => {
    table.appendChild(row);
  });
};

createTable({
  holder: 'my-table',
  cols: [
    {
      field: 'name',
      title: 'Ime',
    },
    {
      field: 'title',
      title: 'Pozicija',
    },
    {
      field: 'age',
      title: 'Godine',
    },
  ],
  rows: [
    {
      name: 'John Doe',
      title: 'Front-end Developer',
      age: 24,
    },
    {
      name: 'Tom Cook',
      title: 'Designer',
      age: 30,
    },
    {
      name: 'Martin Stefanovic',
      title: 'Fe developer',
      age: 24,
    },
  ],
});
