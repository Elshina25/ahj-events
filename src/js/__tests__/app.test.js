import "../app.js";

test("one goblin appears at one time", () => {
  const cells = Array.from(document.querySelectorAll(".cell"));
  const filterCells = cells.filter((el) =>
    el.classList.contains("cell-with-goblin")
  );
  const findCell = cells.find((el) =>
    el.classList.contains("cell-with-goblin")
  );
  expect(findCell).toEqual(filterCells[0]);
});
