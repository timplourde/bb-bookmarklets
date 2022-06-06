import {parseDigit} from './parseDigit.mjs';

function parseGrade(grade){
    let parts = grade.split('/').map(x=>x.trim());
    if(parts.length !== 2) return null;
    return parts.map(parseDigit);
}

export {parseGrade};