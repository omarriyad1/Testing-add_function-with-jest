const say = require("./say");

test("Say Jest msg", () => {
  expect(say()).toBe("Hello Jest");
});
