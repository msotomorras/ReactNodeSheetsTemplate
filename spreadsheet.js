var GoogleSpreadsheet = require('google-spreadsheet');

var doc = new GoogleSpreadsheet('1IMxP32roYfMTeZ4qSbwxNk7bOkooaUzl6zvlEleNDpM');

function getRows() {
    doc.getRows(1, async (err, rows) => {
        console.log(rows)
        const rowsData = await rows;
    })
}

getRows()
