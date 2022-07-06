let fishInfo = coerthasFish.concat(thanalanFish, blackShroudFish, laNosceaFish, farEastFish);

var caught = false;
var hasBite = false;
var hasChum = false;
var fishTimer;
var catchTimer;

const castOut = document.getElementById("cast");
const hook = document.getElementById("hook");
const quit = document.getElementById("quit");
const fishImg = document.querySelector('img');
const container = document.getElementById('container');
const children = container.children;

let timeTwo;
// let iteration;
// let castMessage;

function teleport() {
    document.body.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(Misc/Fish.jpg) no-repeat';
}

function limsa() {
    document.body.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(Misc/Limsa.jpg) no-repeat';
}

function gridania() {
    document.body.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(Misc/Gridania.jpg) no-repeat';
}

function uldah() {
    document.body.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(Misc/Uldah.jpg) no-repeat';
}

function ishgard() {
    document.body.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(Misc/Ishgard.jpg) no-repeat';
}

function kugane() {
    document.body.style.background =
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(Misc/Kugane.jpg) no-repeat';
}

function chumMath(x) {
    return x - (x * .4);
}

// function myCallBack() {
//     let repeatText = `You cast your line`;
//     if (iteration > 2)
//         iteration = 0;
//     for (let i = 0; i <= iteration; i++) {
//         repeatText += '.';
//     }
//     outputOne.innerHTML = repeatText;
//     iteration++;
// }

function runFish(fish) {
    if (fish.bite == "!") {
        return 5;
    } else if (fish.bite == "!!") {
        return 5;
    } else {
        return 5;
    }
}

function randomIntFromInterval(min, max) {
    return (Math.random() * (max - min + 1) + min)
}

function resetPage() {
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName == "DIV") {
            children[i].innerHTML = "";
        }
        else {
            children[i].src = "";
        }
    }
    caught = false;
}

function selectClean(x) {
    chum.className = "";
    laNoscea.className = "";
    blackShroud.className = "";
    thanalan.className = "";
    coerthas.className = "";
    farEast.className = "";
    home.className = ""

    x.className = "select";
}

castOut.addEventListener("click", function (e) {

    resetPage();
    // iteration = 0;
    // castMessage = setInterval(myCallBack, 500);

    outputOne.innerHTML = `You cast your line.`

    let caughtFish = fishInfo[Math.floor(Math.random() * fishInfo.length)]
    let fishSize = randomIntFromInterval(caughtFish.minSize, caughtFish.maxSize)
    let biteSize = caughtFish.bite;
    let biteTime = caughtFish.time * 1000;
    if (hasChum == true) {
        biteTime = chumMath(biteTime);
    }

    timeTwo = setTimeout(() => {
        outputTwo.innerHTML = `Something bites${biteSize}`

        hasBite = true;

        fishTimer = setTimeout(() => {
            clearTimeout(catchTimer);
            // clearInterval(castMessage);
            hasBite = false;
            resetPage();
            outputOne.innerHTML = `The fish gets away...`
        }, runFish(caughtFish.bite) * 1000);

        catchTimer = setInterval(function () {
            if (caught == true) {
                hasChum = false;
                chum.className = "";
                // clearInterval(castMessage);
                clearInterval(fishTimer);
                clearInterval(catchTimer);
                let temp = '';
                let vowel = caughtFish.name[0];
                if (/^[aeiou]/i.test(vowel)) {
                    temp = " an ";
                } else {
                    temp = " a ";
                }
                outputThree.innerHTML =
                    (`You land` + temp + `${caughtFish.name} measuring ${fishSize.toFixed(1)} ilms!`);
                fishImg.src = caughtFish.image;
                hasBite = false;
                caught = false;
            }
        }, 100);
    }, biteTime);

});


hook.addEventListener("click", function (e) {
    if (hasBite == true) {
        caught = true;
    }
});

chum.addEventListener("click", function (e) {
    hasChum = true;
    chum.disable = true;
    chum.className = "chumGlow";
});

quit.addEventListener("click", function (e) {
    resetPage();
    clearTimeout(timeTwo);
    clearTimeout(fishTimer);
    // clearInterval(castMessage);
    chum.className = "";
    outputOne.innerHTML = `You put away your rod.`
});

home.addEventListener("click", function (e) {
    fishInfo = coerthasFish.concat(thanalanFish, blackShroudFish, laNosceaFish, farEastFish);
    teleport();
    resetPage();
    clearTimeout(timeTwo);
    clearTimeout(fishTimer);
    selectClean(home);
    outputOne.innerHTML = `You teleport back home.`
});

laNoscea.addEventListener("click", function (e) {
    fishInfo = laNosceaFish;
    limsa();
    resetPage();
    clearTimeout(timeTwo);
    clearTimeout(fishTimer);
    selectClean(laNoscea);
    outputOne.innerHTML = `You teleport to La Noscea.`
});

blackShroud.addEventListener("click", function (e) {
    fishInfo = blackShroudFish;
    gridania();
    resetPage();
    clearTimeout(timeTwo);
    clearTimeout(fishTimer);
    selectClean(blackShroud);
    outputOne.innerHTML = `You teleport to The Black Shroud.`
});

thanalan.addEventListener("click", function (e) {
    fishInfo = thanalanFish;
    uldah();
    resetPage();
    clearTimeout(timeTwo);
    clearTimeout(fishTimer);
    selectClean(thanalan);
    outputOne.innerHTML = `You teleport to Thanalan.`
});

coerthas.addEventListener("click", function (e) {
    fishInfo = coerthasFish;
    ishgard();
    resetPage();
    clearTimeout(timeTwo);
    clearTimeout(fishTimer);
    selectClean(coerthas);
    outputOne.innerHTML = `You teleport to Coerthas.`
});

farEast.addEventListener("click", function (e) {
    fishInfo = farEastFish;
    kugane();
    resetPage();
    clearTimeout(timeTwo);
    clearTimeout(fishTimer);
    selectClean(farEast)
    outputOne.innerHTML = `You teleport to The Far East.`
});



