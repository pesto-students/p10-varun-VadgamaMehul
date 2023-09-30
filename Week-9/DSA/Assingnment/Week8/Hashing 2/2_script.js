
function nonRepeatingChar(str){
    const map = new Map();
    let freq = 0;
    for(let i=0;i<str.size;i++){
        if(map.has(str[i])){
            map.set(str[i],str.get(i)+freq)
        }
        else{
            map.set(str[i],1)
        }
    }
    console.log(map);
}

nonRepeatingChar('abcdabcd');