function compare(charSet1, charSet2) {
    var count = 0;
    for (var i = 0; i < charSet1.length; i++) {
        if (charSet1.charAt(i) != charSet2.charAt(i)) {//compare each character 
            count++;
        }
    }
    if (count > 1) {
        return false;
    }
    return true;
}

function To(no, wordList, temp1, result, temp) {
    if (no == wordList.length - 1) {
        var tempRes = [];
        for (var i = 0; i < temp1.length; i++) {
            tempRes.push(wordList[temp1[i]]);//push begin Word and others word from list except endword
        }
        tempRes.push(wordList[wordList.length - 1]);//push end word to temp array
        result.push(tempRes);//push each case into array result
        temp1.pop();//clear all
        return;
    }

    for (var x in temp[no]) {
        if (temp[no][x] == 1 && temp1.indexOf(x) < 0) {
            temp1.push(no);
            To(x, wordList, temp1, result, temp);
        }
    }
    temp1.pop();//clear all
}

var findLadders = function (beginWord, endWord, wordList) {
    var temp = [];
    var isEndWordExist = wordList.indexOf(endWord);
    if (isEndWordExist == -1) { //Check End Word is exist or not 
        console.log("End Word is not exist in Word List");
        return;//stop dont run any more
    }
    wordList.unshift(beginWord); //add begin word to first element in word list

    //draw matrix
    /**
     *      hit hot dot dog lot log cog
     * hit   0   1   0   0   0   0   0
     * hot   1   0   1   0   1   0   0
     * dot   0   1   0   1   1   0   0
     * dog   0   0   1   0   0   1   1
     * lot   0   1   1   0   0   1   0
     * log   0   0   0   1   1   0   1
     * cog   0   0   0   1   0   1   0
     */
    for (var y in wordList) {
        temp[y] = [];
    }

    for (var i = 0; i < wordList.length; i++) {
        temp[i][i] = 0;//start from matrix is 0
        for (var x = i + 1; x < wordList.length; x++) {
            if (compare(wordList[i], wordList[x])) {
                temp[i][x] = 1;
                temp[x][i] = 1;
            }
            else {
                temp[i][x] = 0;
                temp[x][i] = 0;
            }
        }
    }

    var temp1 = [];
    var result = [];

    To(0, wordList, temp1, result, temp);//start from 0
    return result;
}

