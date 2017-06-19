// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by menu-generator.js.
import { name as packageName } from "meteor/menu-generator";

// Write your tests here!
// Here is an example.
Tinytest.add('menu-generator - example', function (test) {
  test.equal(packageName, "menu-generator");
});
