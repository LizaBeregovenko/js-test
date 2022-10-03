// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

function findLongestWord(string) {
  // Change code below this line
const words = string.split(" ")
let longesWord = words[0]
for (let word of words) {
  if (word.length>longesWord.length) {
    longesWord = word;
  }
}
  return longesWord
  // Change code above this line
}