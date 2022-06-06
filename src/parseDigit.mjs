function parseDigit(textInput){
    let parseResult = /\d*\.?\d+/.exec(textInput);
    if(parseResult && parseResult.length){
        return Number.parseFloat(parseResult[0]);
    }
    else {
        return null;
    }
}

export {parseDigit};