const fs = require('fs');

fs.readFile('/path/to/file', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});
