export function checkResult(result) {
    let resultString ='';
    let lie = 0;
    let lieSum = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === 1 || result[i] === 3 || result[i] === 5 ||
            result[i] === 8 || result[i] === 12 || result[i] === 14 ||
            result[i] === 18 || result[i] === 20 || result[i] === 22 ||
            result[i] === 25 || result[i] === 28 || result[i] === 29 || result[i] === 31
        ) {
            lie++;
        }
        if (lie){
            lieSum = (lie / result.length ) * 100;
            resultString = `Человек лжёт с вероятностью ${lieSum} %`
        }
    }

    return resultString;
}