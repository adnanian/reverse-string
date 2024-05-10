const reverseString = require('../reverse_string');
/*
test("can handle an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("can handle a single character", () => {
  expect(reverseString("a")).toBe("a");
}); 

test("can handle two characters", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("can handle three characters", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("can handle many characters", () => {
  expect(reverseString("sham-meow")).toBe("sham-meow".split("").reverse().join(""));
});
*/

// Adnan Tests

test("Adnan Test #1", () => {
  expect(reverseString("abcdefg")).toBe("gfedcba");
})

test("Adnan Test #2", () => {
  expect(reverseString("Adnan")).toBe("nandA");
})

test("Adnan Test #3", () => {
  expect(reverseString("Hi, I\'m John")).toBe("Hi, I\'m John".split("").reverse().join(""));
})
