// myModule.js
module.exports = {
    greeting: "Hello, World!",
    sayHello: function() {
        console.log(this.greeting);
    }
};

// app.js
const myModule = require('./myModule');
myModule.sayHello(); // Output: Hello, World!
