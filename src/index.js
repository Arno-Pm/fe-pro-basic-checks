/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) =>  string.split(' ').map((NewItem) => (NewItem.slice(0, 1).toUpperCase() + NewItem.slice(1))).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export const fenceString = (string) {
    return string.split('').map((NewItem, index) => {
      if (index % 2 === 0) {
        return NewItem.toLowerCase();
      } else {
        return NewItem.toUpperCase();
      }
    }).join('')
  };

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(action, string){
    switch(action){
        case 'uppercase':
            return string.toUpperCase();
        case 'lowercase':
            return string.toLowerCase();
        case 'fence':
            return string.split('').map((NewItem, index) => {
                if (index % 2 === 0) {
                    return NewItem.toLowerCase();
                  } else {
                    return NewItem.toUpperCase();
                  }
                }).join('');
        case 'capitalize': return string.split(' ').map((NewItem) => (NewItem.slice(0, 1).toUpperCase() + NewItem.slice(1))).join(' ')
            default: return string;    
            }
    }

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action) {
      case 'uppercase': 
            return string.toUpperCase();
      case 'lowercase':
            return string.toLowerCase();
      case 'fence':
            return string.split('').map((NewItem, index) => {
        if (index % 2 === 0) {
          return NewItem.toLowerCase();
        } else {
          return NewItem.toUpperCase();
        }
      }).join('');
      case 'capitalize': return string.split(' ').map((NewItem) => (NewItem.slice(0, 1).toUpperCase() + NewItem.slice(1))).join(' ');
      default: return string;
    }
  };;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let name of string) {
      console.log(name);
    }
  };

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor =  (string) => {
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
  };;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let i = 0;
    while (i < string.length) {
      console.log(string[i]);
      i++;
    }
  };

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    string.split('').forEach((NewItem) => console.log(NewItem));
  };; 
