function camelize(str) {
  return str
    .split('-') // строка 'my-long-word' разбиваетс€ на массив ['my', 'long', 'word']
    .map(
      // ѕереводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соедин€ет ['my', 'Long', 'Word'] в 'myLongWord'
}
