const assert = require("assert").strict;
const greet = require("./greet");

assert.strictEqual(greet(), "Hello guest");
assert.strictEqual(greet("Guys"), "Hello Guy");
