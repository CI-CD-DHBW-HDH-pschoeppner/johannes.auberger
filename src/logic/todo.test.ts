import { generateID, validateTodo, formatTodo, generateColor } from "./todo";

describe("generateID", () => {
  it("check if value not equal in both iterations", () => {
    expect(generateID()).not.toEqual(generateID());
  });
  it("check if value is string", () => {
    expect(typeof generateID()).toEqual("string");
  });
});

describe("validateTodo", () => {
  it("check if value is not longer than 255 characters", () => {
    expect(
      validateTodo({ id: "1", value: "a".repeat(256), done: false }, [])
    ).toEqual(false);
  });
  it("check if value is not empty", () => {
    expect(validateTodo({ id: "1", value: "", done: false }, [])).toEqual(
      false
    );
  });
  it("check if value is not empty", () => {
    expect(validateTodo({ id: "1", value: " ", done: false }, [])).toEqual(
      false
    );
  });
  it("check if todo is not contained in the todos array (case insensitive)", () => {
    expect(
      validateTodo({ id: "1", value: "a", done: false }, [
        { id: "2", value: "A", done: false },
      ])
    ).toEqual(false);
  });
});

describe("formatTodo", () => {
  it("check if first letter is capitalized", () => {
    expect(formatTodo({ id: "1", value: "a", done: false }).value).toEqual("A");
  });
  it("check if first letter is capitalized", () => {
    expect(formatTodo({ id: "1", value: "Abb", done: false }).value).toEqual(
      "Abb"
    );
  });
});

describe("generateColor", () => {
  it("check if value is string", () => {
    expect(typeof generateColor()).toEqual("string");
  });
  it("check if value is rgb", () => {
    expect(generateColor().startsWith("rgb")).toEqual(true);
  });
  it("check if value is not equal in both iterations", () => {
    expect(generateColor()).not.toEqual(generateColor());
  });
  it("check if colors are between 50 and 150", () => {
    const color = generateColor();
    const r = parseInt(color.split("(")[1].split(",")[0]);
    const g = parseInt(color.split("(")[1].split(",")[1]);
    const b = parseInt(color.split("(")[1].split(",")[2].split(")")[0]);
    expect(r).toBeGreaterThanOrEqual(50);
    expect(r).toBeLessThanOrEqual(150);
    expect(g).toBeGreaterThanOrEqual(50);
    expect(g).toBeLessThanOrEqual(150);
    expect(b).toBeGreaterThanOrEqual(50);
    expect(b).toBeLessThanOrEqual(150);
  });
});
