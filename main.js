

//time complexity = O(n)
//space complexity = O(1)

//algorithems
    // create a loop in text
    // then try to matched text first element and key first element
    // if text[i] = key[0] then go next step or return next index
    // then slice a word and try to matched slice part = key
    // if matched then count + 1;
    //end of function return count;

    
function keyMatched(text,key){
    
    let count = 0;
    let keyLength = key.length
    
    for (let i = 0; i < text.length - 2; i++) {
        if(text[i] == key[0]){
            let word = text.slice(i,i+keyLength)
            if(word === key){
                count += 1;
            }
        }
        
    }

    return count;
}

let text = 'kdafsfafadaaraafatarataafaffddeasfeafafafafafadddafasdddafssafaff'
let key = 'afa'

let result = keyMatched(text,key)
console.log(result)