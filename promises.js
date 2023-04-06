const fs = require('fs').promises;

fs.readFile('/path/to/file')
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => {
        console.error(err);
    });
