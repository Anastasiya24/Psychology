import faceQuestions from '../questions/face';
import eyesQuestions from '../questions/eyes';
import palmsQuestions from '../questions/palms';
import handsQuestions from '../questions/hands';
import shouldersQuestions from '../questions/shoulders'
import legsQuestions from '../questions/legs'

function translite(id) {
    let collectionName = '';
    let element = null;
    let option = '';
    switch (id) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            collectionName = 'глаза смотрят ';
            element = eyesQuestions.find(el => el.id === id);
            option = element.text
            break;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 11:
        case 12:
            collectionName = 'лицо ';
            element = faceQuestions.find(el => el.id === id);
            option = element.text
            break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            collectionName = 'руки ';
            element = handsQuestions.find(el => el.id === id);
            option = element.text
            break;
        case 23:
        case 24:
        case 25:
        case 26:
            collectionName = "ноги ";
            element = legsQuestions.find(el => el.id === id);
            option = element.text
            break;
        case 27:
        case 28:
        case 29:
            collectionName = "ладони ";
            element = palmsQuestions.find(el => el.id === id);
            option = element.text
            break;
        case 30:
        case 31:
        case 32:
            collectionName = "плечи ";
            element = shouldersQuestions.find(el => el.id === id);
            option = element.text
            break;
        default: break;
    }
    console.log(`${collectionName} + ${option}`)
    return { collectionName, option }
}

export function checkResult(result, options) {
    let resultString = '';
    let lie = 0, lieSum = 0, lieArray = [];
    let nedovolen = 0, nedovolenSum = 0, nedovolenArray = [];
    let chesten = 0, chestenSum = 0, chestenArray = [];
    let zadymalsy = 0, zadymalsySum = 0, zadymalsyArray = [];
    let nervnichaet = 0, nervnichaetSum = 0, nervnichaetArray = [];
    let uveren = 0, uverenSum = 0, uverenArray = [];
    let skyka = 0, skykaSum = 0, skykaArray = [];

    for (let i = 0; i < result.length; i++) {
        if (result[i] === 1 || result[i] === 3 || result[i] === 5 ||
            result[i] === 8 || result[i] === 12 || result[i] === 14 ||
            result[i] === 18 || result[i] === 20 || result[i] === 22 ||
            result[i] === 25 || result[i] === 28 || result[i] === 29 || result[i] === 31
        ) {
            lieArray.push(result[i]);
            lie++;
        }
        if (result[i] === 12 || result[i] === 14 || result[i] === 17 ||
            result[i] === 18 || result[i] === 20 || result[i] === 24 ||
            result[i] === 29 || result[i] === 31) {
            nedovolenArray.push(result[i]);
            nedovolen++;
        }
        if (result[i] === 1 || result[i] === 3 || result[i] === 5 ||
            result[i] === 7 || result[i] === 13 || result[i] === 23 ||
            result[i] === 27 || result[i] === 30) {
            chestenArray.push(result[i]);
            chesten++;
        }
        if (result[i] === 1 || result[i] === 3 || result[i] === 5 ||
            result[i] === 8 || result[i] === 22 || result[i] === 25 ||
            result[i] === 29) {
            zadymalsyArray.push(result[i]);
            zadymalsy++;
        }
        if (result[i] === 4 || result[i] === 8 || result[i] === 9 ||
            result[i] === 14 || result[i] === 17 || result[i] === 20 ||
            result[i] === 25 || result[i] === 29 || result[i] === 31) {
            nervnichaetArray.push(result[i]);
            nervnichaet++;
        }
        if (result[i] === 13 || result[i] === 15 || result[i] === 16 ||
            result[i] === 18 || result[i] === 19 || result[i] === 24 ||
            result[i] === 27 || result[i] === 30) {
            uverenArray.push(result[i]);
            uveren++;
        }
        if (result[i] === 10 || result[i] === 11 || result[i] === 14 ||
            result[i] === 18 || result[i] === 20 || result[i] === 21 ||
            result[i] === 25) {
            skykaArray.push(result[i]);
            skyka++;
        }

        //
        let u;
        let temporaryStringL = '';
        let temporaryStringN = '';
        let temporaryStringC = '';
        let temporaryStringZ = '';
        let temporaryStringNr = '';
        let temporaryStringU = '';
        let temporaryStringS = '';
        let resultSubStringL = '';
        let resultSubStringN = '';
        let resultSubStringC = '';
        let resultSubStringZ = '';
        let resultSubStringNr = '';
        let resultSubStringU = '';
        let resultSubStringS = '';
        ;
        if (lie) {
            lieSum = (lie / result.length) * 100;
            for (u = 0; u < lieArray.length; u++) {
                temporaryStringL = translite(lieArray[u]);
                resultSubStringL += `${temporaryStringL.collectionName} ${temporaryStringL.option},`
            }
            resultString = `Человек лжёт с вероятностью ${lieSum} % : ` + `${resultSubStringL}.`
        }
        if (nedovolen) {
            nedovolenSum = (nedovolen / result.length) * 100;
            for (u = 0; u < nedovolenArray.length; u++) {
                temporaryStringN = translite(nedovolenArray[u]);
                resultSubStringN += `${temporaryStringN.collectionName} ${temporaryStringN.option},`
            }
            resultString += ` Человек недоволен с вероятностью ${nedovolenSum.toFixed()} % : ` + `${resultSubStringN}.`
        }
        if (chesten) {
            chestenSum = (chesten / result.length) * 100;
            for (u = 0; u < chestenArray.length; u++) {
                temporaryStringC = translite(chestenArray[u]);
                resultSubStringC += `${temporaryStringC.collectionName} ${temporaryStringC.option},`
            }
            resultString += ` Человек честен с вами с вероятностью ${chestenSum.toFixed()} % : ` + `${resultSubStringC}.`
        }
        if (zadymalsy) {
            zadymalsySum = (zadymalsy / result.length) * 100;
            for (u = 0; u < zadymalsyArray.length; u++) {
                temporaryStringZ = translite(zadymalsyArray[u]);
                resultSubStringZ += `${temporaryStringZ.collectionName} ${temporaryStringZ.option},`
            }
            resultString += ` Человек задумался о чём-то с вероятностью ${zadymalsySum.toFixed()} % : ` + `${resultSubStringZ}.`
        }
        if (nervnichaet) {
            nervnichaetSum = (nervnichaet / result.length) * 100;
            for (u = 0; u < nervnichaetArray.length; u++) {
                temporaryStringNr = translite(nervnichaetArray[u]);
                resultSubStringNr += `${temporaryStringNr.collectionName} ${temporaryStringNr.option},`
            }
            resultString += ` Человек нервничает с вероятностью ${nervnichaetSum.toFixed()} % : ` + `${resultSubStringNr}.`
        }
        if (uveren) {
            uverenSum = (uveren / result.length) * 100;
            for (u = 0; u < uverenArray.length; u++) {
                temporaryStringU = translite(uverenArray[u]);
                resultSubStringU += `${temporaryStringU.collectionName} ${temporaryStringU.option},`
            }
            resultString += ` Человек уверен в себе с вероятностью ${uverenSum.toFixed()} % :` + `${resultSubStringU}.`
        }
        if (skyka) {
            skykaSum = (skyka / result.length) * 100;
            for (u = 0; u < skykaArray.length; u++) {
                temporaryStringS = translite(skykaArray[u]);
                resultSubStringS += `${temporaryStringS.collectionName} ${temporaryStringS.option},`
            }
            resultString += ` Человеку скучно с вероятностью ${skykaSum.toFixed()} % : ` + `${resultSubStringS}.`
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