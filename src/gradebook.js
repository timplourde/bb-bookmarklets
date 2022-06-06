import { parseGrade } from './parseGrade.mjs';

function printGrade(nodes){
    let grade = nodes.map(parseGrade)
        .filter(x=> x !== null && x.length == 2)
        .reduce( (acc, grade) => {
            let score = grade[0];
            let outOf = grade[1];
            if(typeof score !== "number" || typeof outOf !== "number") {
                return acc;
            }
            acc.scored += score;
            acc.total += outOf;
            return acc;
        }, {
            scored: 0,
            total: 0
        });
    let percentage = ((grade.scored / grade.total ) * 100).toFixed(2);
    return `Points so far: ${grade.scored.toFixed(2)} / ${grade.total.toFixed(2)} (${percentage} %) This does not include ungraded assignments.`;
}

let grade = printGrade([...document.querySelectorAll(".grade-input-display")].map( x => x.innerText));

alert(grade);