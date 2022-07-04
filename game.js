let fishInfo = [
    {
        name: 'Merlthor Goby',
        level: 3,
        bait: ['Lugworm', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'Yes',
        minSize: 3.7,
        maxSize: 9.3,
        image: 'FishImg/Merlthor Goby.png'
    },

    {
        name: 'Finger Shrimp',
        level: 4,
        bait: ['Lugworm', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'Yes',
        minSize: 4.3,
        maxSize: 10.1,
        image: 'FishImg/Finger Shrimp.png'
    },

    {
        name: 'Ocean Cloud',
        level: 6,
        bait: ['Pill Bug', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'Yes',
        minSize: 4.9,
        maxSize: 10.5,
        image: 'FishImg/Ocean Cloud.png'
    },

    {
        name: 'Harbor Herring',
        level: 7,
        bait: ['Pill Bug', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'Yes',
        minSize: 5.8,
        maxSize: 12.8,
        image: 'FishImg/Harbor Herring.png'
    },

    {
        name: 'Malm Kelp',
        level: 4,
        bait: ['Lugworm', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 6.2,
        maxSize: 8.6,
        image: 'FishImg/Malm Kelp.png'
    },

    {
        name: 'Coral Butterfly',
        level: 9,
        bait: ['Pill Bug', 'Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 5.6,
        maxSize: 13.2,
        image: 'FishImg/Coral Butterfly.png'
    },

    {
        name: 'Sea Cucumber',
        level: 7,
        bait: ['Pill Bug', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 7.1,
        maxSize: 9,
        image: 'FishImg/Sea Cucumber.png'
    },

    {
        name: 'Angelfish',
        level: 19,
        bait: ['Rat Tail', 'Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 21.7,
        maxSize: 30.2,
        image: 'FishImg/Angelfish.png'
    },

    {
        name: 'Blowfish',
        level: 22,
        bait: ['Spoon Worm', 'Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 9.3,
        maxSize: 10.2,
        image: 'FishImg/Blowfish.png'
    },

    {
        name: 'Leafy Seadragon',
        level: 33,
        bait: ['Spoon Worm', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 17.6,
        maxSize: 34.4,
        image: 'FishImg/Leafy Seadragon.png'
    },

    {
        name: 'Wahoo',
        level: 43,
        bait: '', //Merlthor Goby
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 24.7,
        maxSize: 60.9,
        image: 'FishImg/Wahoo.png'
    },

    {
        name: 'Red Coral',
        level: 40,
        bait: ['Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 14.2,
        maxSize: 34,
        image: 'FishImg/Red Coral.png'
    },

    {
        name: 'Balloonfish',
        level: 37,
        bait: ['Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 20.7,
        maxSize: 47.4,
        image: 'FishImg/Balloonfish.png'
    },

    {
        name: 'Rothlyt Oyster',
        level: 17,
        bait: ['Rat Tail', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 4.1,
        maxSize: 9.4,
        image: 'FishImg/Rothlyt Oyster.png'
    },

    {
        name: 'Kissing Fish',
        level: 54,
        bait: ['Brute Leech', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 19.8,
        maxSize: 25.4,
        image: 'FishImg/Kissing Fish.png'
    },

    {
        name: 'Dravanian Squeaker',
        level: 54,
        bait: ['Brute Leech', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 13.4,
        maxSize: 18,
        image: 'FishImg/Dravanian Squeaker.png'
    },

    {
        name: 'Gnomefish',
        level: 60,
        bait: ['Brute Leech', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 5.2,
        maxSize: 8.9,
        image: 'FishImg/Gnomefish.png'
    },

    {
        name: 'Blackfin Snake Eel',
        level: 70,
        bait: ['Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 28.4,
        maxSize: 38.8,
        image: 'FishImg/Blackfin Snake Eel.png'
    },

    {
        name: 'Glass Flounder',
        level: 63,
        bait: ['Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 11.5,
        maxSize: 13.6,
        image: 'FishImg/Glass Flounder.png'
    },

    {
        name: 'Coeurl Snake Eel',
        level: 63,
        bait: ['Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 35.6,
        maxSize: 39.2,
        image: 'FishImg/Coeurl Snake Eel.png'
    },

    {
        name: 'Copperfish',
        level: 20,
        bait: ['Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'Yes',
        minSize: 6.7,
        maxSize: 10.9,
        image: 'FishImg/Copperfish.png'
    },

    {
        name: 'Monke Onke',
        level: 33,
        bait: '', //Mooch Cooperfish
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 22.1,
        maxSize: 36.9,
        image: 'FishImg/Monke Onke.png'
    },

    {
        name: 'Rock Lobster',
        level: 50,
        bait: ['Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 22.5,
        maxSize: 31.3,
        image: 'FishImg/Rock Lobster.png'
    },

    {
        name: 'Bullfrog',
        level: 55,
        bait: ['Brute Leech', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 5.5,
        maxSize: 12.5,
        image: 'FishImg/Bullfrog.png'
    },

    {
        name: 'Spotted Puffer',
        level: 38,
        bait: ['Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'No',
        minSize: 3.9,
        maxSize: 6.7,
        image: 'FishImg/Spotted Puffer.png'
    },

    {
        name: 'Monkfish',
        level: 26,
        bait: ['Spoonworm', 'Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 23.9,
        maxSize: 58.5,
        image: 'FishImg/Monkfish.png'
    },

    {
        name: 'Fullmoon Sardine',
        level: 34,
        bait: ['Spoon Worm', 'Versatile Lure'],
        bite: '!',
        time: 5,
        mooch: 'Yes',
        minSize: 9.8,
        maxSize: 21.5,
        image: 'FishImg/Fullmoon Sardine.png'
    },

    {
        name: 'Bianaq Bream',
        level: 27,
        bait: ['Spoon Worm', 'Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 21.8,
        maxSize: 51,
        image: 'FishImg/Bianaq Bream.png'
    },

    {
        name: 'Indigo Herring',
        level: 31,
        bait: ['Spoon Worm', 'Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 24.5,
        maxSize: 42.9,
        image: 'FishImg/Indigo Herring.png'
    },

    {
        name: 'Lavender Remora',
        level: 36,
        bait: ['Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 29.9,
        maxSize: 59.9,
        image: 'FishImg/Lavender Remora.png'
    },

    {
        name: 'Ash Tuna',
        level: 32,
        bait: ['Spoon Worm', 'Versatile Lure'],
        bite: '!!',
        time: 8,
        mooch: 'No',
        minSize: 30.4,
        maxSize: 69.1,
        image: 'FishImg/Ash Tuna.png'
    },

    {
        name: 'Shark Tuna',
        level: 50,
        bait: '', //Fullmoon Sardine
        bite: '!!!',
        time: 15,
        mooch: 'No',
        minSize: 89.2,
        maxSize: 102.7,
        image: 'FishImg/Shark Tuna.png'
    },

    {
        name: 'Silver Shark',
        level: 41,
        bait: '', //Merlthor Goby
        bite: '!!!',
        time: 15,
        mooch: 'No',
        minSize: 33.1,
        maxSize: 82.5,
        image: 'FishImg/Silver Shark.png'
    },

    {
        name: 'Gigantshark',
        level: 50,
        bait: '', //Merlthor Goby
        bite: '!!!',
        time: 15,
        mooch: 'No',
        minSize: 94.7,
        maxSize: 123.9,
        image: 'FishImg/Gigantshark.png'
    },
];


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
    // clearInterval(castMessage);
    chum.className = "";
    outputOne.innerHTML = `You put away your rod.`
});





