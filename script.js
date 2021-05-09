/** Mixed Messages Project by Simone Waring May 2021*/ 

const msgMixer = {
    // property maps between words and reading
    _wordPool: {
        descArr: ['new', 'old', 'blue', 'cold', 'green', 'orange', 'gold', 'purple', 'spicy', 'warm', 'hot'],
        subjArr: ['dishes', 'vegetables', 'cocktails', 'teas', 'flowers', 'friends', 'places', 'outfits', 'jewelry'],
        actArr: ['yoga', 'meditation', 'ballet', 'singing', 'street art', 'rugby', 'belly dancing']
    },

    // method to create random words from the wordpool
    getRandomWordFromWordPool(readingNum) {
        // var stores array from _wordPool obj
        const words = this._wordPool[readingNum];
        // random choice of word
        const randIndex = Math.floor(Math.random() * words.length);
        return words[randIndex];
      },
     // fn generates a massage with the random words
      generateRandomReading: function() {
        const embraceD = this.getRandomWordFromWordPool('descArr');
        const embraceS = this.getRandomWordFromWordPool('subjArr');
        let avoidD = this.getRandomWordFromWordPool('descArr');
        let avoidS = this.getRandomWordFromWordPool('subjArr');
        const tryAct = this.getRandomWordFromWordPool('actArr');

        while(embraceD === avoidD) {
            avoidD = this.getRandomWordFromWordPool('descArr');
        };
        while(embraceS === avoidS) {
            avoidS = this.getRandomWordFromWordPool('subjArr');
        };

        return `Brace Yourself, for the Cards say: \n \tThis month you should \n \tembrace ${embraceD} ${embraceS}, \n \tavoid ${avoidD} ${avoidS} and \n \ttry ${tryAct}.`;
      }
    
};

let message = msgMixer.generateRandomReading();
console.log(message);