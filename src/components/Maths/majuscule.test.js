// majuscule.test.js
const majuscule = require("./majuscule");

test("convertit une chaîne en majuscules", () => {
  expect(majuscule("bonjour")).toBe("BONJOUR");
});

test("convertit une chaîne vide en chaîne vide", () => {
  expect(majuscule("")).toBe("");
});

test("convertit une chaîne avec des majuscules et minuscules", () => {
  expect(majuscule("mElAnGe De MaJuScUlEs Et MiNuScUlEs")).toBe(
    "MELANGE DE MAJUSCULES ET MINUSCULES"
  );
});

test("ne modifie pas les chiffres et symboles", () => {
  expect(majuscule("123abc@!")).toBe("123ABC@!");
});
