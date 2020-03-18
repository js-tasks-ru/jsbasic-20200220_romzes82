    function getMinMax(str) {
      let result = {
        min: 0,
        max: 0
      }

      let new_str = ``;
      // заменим все запятые на пробелы 
      for (let i = 0; i < str.length; i++) {
        if (str[i] == `,`) {
          new_str = new_str + ` `;        
        } else {
          new_str = new_str + str[i];
        }
      }

      let SplitStr = new_str.split(` `);
      let SortSplitStr = SplitStr
     //   .map(
     //     // обрезаем запятую в конце чисел
     //     // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
     //     (word, index) => word[word.length - 1] == "," ? word.slice(0, word.length - 1) : word
     //   )
        .filter(item => Number(item));

      result.min = Math.min(...SortSplitStr);
      result.max = Math.max(...SortSplitStr);
      return result;
    }
