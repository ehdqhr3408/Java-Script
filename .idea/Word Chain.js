var word = '제로초'
while(true){
    var newword = prompt(word);
    if(word[word.length-1]===newword[0]){
        alert("딩동댕");
        word = newword;
    }
    else{
        alert("땡");
    }
}