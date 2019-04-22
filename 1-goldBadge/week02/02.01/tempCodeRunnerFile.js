function piggie(str) {
    let vowels = ['a','e','i','o','u'];
    let phrase; 
    for(let v in vowels){
        if(v==str[0]){
           return str;
        } else{ 
            console.log(str[0]); 
        }
    }
}
piggie('Hey');