# Word Search Kata in Vue.js [![Netlify Status](https://api.netlify.com/api/v1/badges/9af91479-d0ce-4b8c-873d-04bc6513a6d7/deploy-status)](https://app.netlify.com/sites/vue-js-word-search/deploys)
![screen-shot](/public/word-search-screen.png)

## Approach:
* Write python script (/helpers/txtToJson.py) to convert the wordlist.txt to a json file for easy loading into vue => `words: require('words-list.json')`
* use Vuex to store state of application and hold wordsList, letter grid, and found words
* use one component for the grid and one for the word list
* emit custom event `dataChanged` when grid size changes; receive event in parent App.vue and handle word search logic
* data bind to vuex store.state.words on the WordList component using `v-for` to show all words as buttons


### Build according to the following requirements: 
* Create a grid of random letters.
  * The grid will always be a square
  * The grid can be any size. A size of at least 15x15 is recommended
  * The grid size can be hardcoded or provided by the user
* Display the grid to the user in all uppercase letters
* Search the Grid for all valid words that were generated.
  * A word list has been provided, however, any word list or dictionary can be provided.
* Display the results to the user as the number of words found, a list of found words, and by marking them in the original grid in a visual manner.
  * For a CLI application change the case of the letters of the found words to lowercase

### And rules
1. Words can be found:
  * any diagonal
  * up or down
  * forward or backword
2. Words should be complete along a linear path and not wrap between edges of the board
3. Words may have overlapping letters
    It is possible that no valid words will be generated
4. A word list has been provided, however, any word list may be used
5. The grid should be random and not take the word list into account
6. Solving the problem is more important than the performance.

## Project setup
#### dependencies include: bootstrap, bootstrap-vue, & vuex
```
cd vue-word-search
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
