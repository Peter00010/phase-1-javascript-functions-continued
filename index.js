// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return 'This Saturday, I want to ' + activity + '!';
}
saturdayFun('eat yams');



function mondayWork(activity = 'go to the office.') {
    return 'This Monday, I will ' + activity + '.';
}
const result = mondayWork();



function wrapAdjective(flair = "*") {
    return function (adjective =  special){
        return `You are ${flair}${adjective}${flair}!`
    };
}