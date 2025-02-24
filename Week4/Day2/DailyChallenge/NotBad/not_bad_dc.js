// I've tried all the sentences bellow

// let sentence = 'I have a bad sense of humor, he has not'
// let sentence = 'The movie is not that bad, I like it'
// let sentence = 'This dinner is not that bad ! You cook well'
// let sentence = 'This movie is not so bad !'
// let sentence = 'This dinner is bad !'

const word = 'bad'
const wordNot = sentence.indexOf('not')
const wordBad = sentence.indexOf(word)

if (wordBad > wordNot && wordNot !== -1) {
    partToReplace = sentence.substring(wordNot,wordBad + word.length) 
    sentence = sentence.replace(partToReplace,'good')
} 
console.log(sentence)