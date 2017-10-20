// Create an array that contains the words in the sentence
 let sentence = ["I", "have", "a", "dog", "and", "her", "name", "is", "Rolo",]
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, character) {
    let sentenceToWrite = ""
    let characterList = character
    for (var index = 0; index < theWordArray.length; index++) {
        var element = theWordArray[index];
        var counter = index + 1 
        if (counter % 3 === 0) {
            element += characterList + " "
            characterList += character 
                
        } else {
            element += " "
        }
        sentenceToWrite += element 
     console.log(sentenceToWrite)   
    }
    /* If the index gets to the 3rd word, put an exclamation point there */
   
}

// Invoke the function and pass in the array
addExcitement(sentence, "?");