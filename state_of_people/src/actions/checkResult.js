export function checkResult(result, options) {
    let resultString = '';
    let lie = 0, lieSum = 0;
    let nedovolen = 0, nedovolenSum = 0;
    let chesten = 0, chestenSum = 0;
    let zadymalsy = 0, zadymalsySum = 0;
    let nervnichaet = 0, nervnichaetSum = 0;
    let uveren = 0, uverenSum = 0;
    let skyka = 0, skykaSum = 0;

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
        if (result[i] === 1 || result[i] === 3 || result[i] === 5 ||
            result[i] === 7 || result[i] === 13 || result[i] === 23 ||
            result[i] === 27 || result[i] === 30) {
            chesten++;
        }
        if (result[i] === 1 || result[i] === 3 || result[i] === 5 ||
            result[i] === 8 || result[i] === 22 || result[i] === 25 ||
            result[i] === 29) {
            zadymalsy++;
        }
        if (result[i] === 4 || result[i] === 8 || result[i] === 9 ||
            result[i] === 14 || result[i] === 17 || result[i] === 20 ||
            result[i] === 25 || result[i] === 29 || result[i] === 31) {
            nervnichaet++;
        }
        if (result[i] === 13 || result[i] === 15 || result[i] === 16 ||
            result[i] === 18 || result[i] === 19 || result[i] === 24 ||
            result[i] === 27 || result[i] === 30) {
            uveren++;
        }
        if (result[i] === 10 || result[i] === 11 || result[i] === 14 ||
            result[i] === 18 || result[i] === 20 || result[i] === 21 ||
            result[i] === 25) {
            skyka++;
        }

        //
        if (lie) {
            lieSum = (lie / result.length) * 100;
            resultString = `Человек лжёт с вероятностью ${lieSum} %.`
        }
        if (nedovolen) {
            nedovolenSum = (nedovolen / result.length) * 100;
            resultString += ` Человек недоволен с вероятностью ${nedovolenSum.toFixed()} %.`
        }
        if (chesten) {
            chestenSum = (chesten / result.length) * 100;
            resultString += ` Человек честен с вами с вероятностью ${chestenSum.toFixed()} %.`
        }
        if (zadymalsy) {
            zadymalsySum = (zadymalsy / result.length) * 100;
            resultString += ` Человек задумался о чём-то с вероятностью ${zadymalsySum.toFixed()} %.`
        }
        if (nervnichaet) {
            nervnichaetSum = (nervnichaet / result.length) * 100;
            resultString += ` Человек нервничает с вероятностью ${nervnichaetSum.toFixed()} %.`
        }
        if (uveren) {
            uverenSum = (uveren / result.length) * 100;
            resultString += ` Человек уверен в себе с вероятностью ${uverenSum.toFixed()} %.`
        }
        if (skyka) {
            skykaSum = (skyka / result.length) * 100;
            resultString += ` Человеку скучно с вероятностью ${skykaSum.toFixed()} %.`
        }
    }

    let a = [lie, nedovolen, chesten, zadymalsy, nervnichaet, uveren, skyka];
    let maxResult = a[0]
    if (a.length >= 2)
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] < a[i + 1])
                maxResult = a[i + 1]
        }

    switch (maxResult) {
        case lie: maxResult = 'Человек что-то скрывает от вас, возможно, что он врёт вам'; break;
        case nedovolen: maxResult = 'Недоволен он'; break;
        case chesten: maxResult = 'Этот человек с вами честен'; break;
        case zadymalsy: maxResult = 'Этот человек задумался'; break;
        case nervnichaet: maxResult = 'Человек явно нервничает'; break;
        case uveren: maxResult = 'Он уверен в себе'; break;
        case skyka: maxResult = 'Человек испытывает чувство скуки, развеселите его :)'; break;        
    }

    if (options === "result") return maxResult;
    if (options === "description") return resultString;
}