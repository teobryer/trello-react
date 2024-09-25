const filterAndSortUsers = require("./filterAndSortUsers");

describe("filterAndSortUsers", () => {
  it("Filtre minimum 25 ans", () => {
    const users = [
      { name: "Charlie", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];

    const filteredAndSortedUsers = filterAndSortUsers(users, 25);

    expect(filteredAndSortedUsers).toEqual([
      { name: "Alice", age: 30 },
      { name: "Charlie", age: 25 },
    ]);
  });

  it("Doit retourner une liste vide, aucun n'a 40 ans", () => {
    const users = [
      { name: "Charlie", age: 25 },
      { name: "Alice", age: 30 },
      { name: "Bob", age: 20 },
    ];

    const filteredAndSortedUsers = filterAndSortUsers(users, 40);

    expect(filteredAndSortedUsers).toEqual([]);
  });

  it("Doit renvoyer une liste vide, car aucun utilisateurs", () => {
    const users = [];

    const filteredAndSortedUsers = filterAndSortUsers(users, 25);

    expect(filteredAndSortedUsers).toEqual([]);
  });
});
