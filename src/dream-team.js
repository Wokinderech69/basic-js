const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError("Not implemented");
  // проверка: members массив или нет;
  if (!Array.isArray(members)) {
    return false;
  }
  // фильтруем массив, для включения в массив имена с типом string;
  const sortingName = members.filter((member) => typeof member === "string");
  if (sortingName === 0) {
    return false; // возвращает, если не найдено имен с типом стринг;
  }
  // у отфильтрованных имен, извлекаем первые буквы для для переобразования в верхний регистр;
  const uppercaseLetters = sortingName.map((member) =>
    member.trim()[0].toUpperCase()
  );
  return uppercaseLetters.sort().join(""); // сортируем полученный массив, объеденяя их в одну строку;
}

module.exports = {
  createDreamTeam,
};
