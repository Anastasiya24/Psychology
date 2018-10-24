export function checkResult(result, options) {
    let resultString = '';
    let lie = 0;
    let lieSum = 0;
    let nedovolen = 0, nedovolenSum = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === 1 || result[i] === 3 || result[i] === 5 ||
            result[i] === 8 || result[i] === 12 || result[i] === 14 ||
            result[i] === 18 || result[i] === 20 || result[i] === 22 ||
            result[i] === 25 || result[i] === 28 || result[i] === 29 || result[i] === 31
        ) {
            lie++;
        }
        if (result[i] === 12 || result[i] === 14 || result[i] === 17 ||
            result[i] === 18 || result[i] === 20 || result[i] === 24 ||
            result[i] === 29 || result[i] === 31) {
            nedovolen++;
        }

        if (lie) {
            lieSum = (lie / result.length) * 100;
            resultString = `Человек лжёт с вероятностью ${lieSum} %.`
        }
        if (nedovolen) {
            nedovolenSum = (nedovolen / result.length) * 100;
            resultString += `Человек недоволен с вероятностью ${lieSum} %.`
        }
    }

    let a = [lie, nedovolen];
    let maxResult = a.reduce(function (a, b) { return a > b ? a : b })

    if (options === "result") return maxResult;
    if (options === "description") return resultString;
}