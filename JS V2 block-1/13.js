// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

// Оголошена функція isAdult(age)
// У виразі перевірки використовується оператор >=
// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false
// Виклик isAdult(37) повертає true

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}
