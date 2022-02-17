module.exports = function check(str, bracketsConfig) {

    let elements = [];
    let openBrackets = ['[', '(', '{'];
    let bracketPairs = {
        [']'] : '[',
        [')'] : '(',
        ['}'] : '{',
    }

    let count = 0;

    for(let i = 0; i < str.length; i++){
        let element = str[i];

        if(element === '|'){
            count++;
        }else{
            if(openBrackets.includes(element)){
                elements.push(element)
            }else{
                if(elements.length === 0){
                    return false;
                }
    
                let topElement = elements[elements.length - 1];
    
                if(bracketPairs[element] === topElement){
                    elements.pop();
                }else{
                    return false;
                }
            }
        }

        
    }

    if(count % 2 != 0){
        return false;
    }

    return elements.length === 0;
    
}
