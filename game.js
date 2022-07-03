let fishInfo = [
    {
        name: 'Merlthor Goby',
        level: 3,
        bait: ['Lugworm', 'Versatile Lure'],
        bite: '!',
        time: 3,
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
        time: 3,
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
        time: 3,
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
        time: 3,
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
        time: 3,
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
        time: 6,
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
        time: 3,
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
        time: 6,
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
        time: 6,
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
        time: 3,
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
        time: 6,
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
        time: 3,
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
        time: 6,
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
        time: 3,
        mooch: 'No',
        minSize: 4.1,
        maxSize: 9.4,
        image: 'FishImg/Rothlyt Oyster.png'
    },

    {
        name: 'Rock Lobster',
        level: 50,
        bait: ['Versatile Lure'],
        bite: '!!',
        time: 6,
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
        time: 3,
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
        time: 3,
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
        time: 6,
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
        time: 3,
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
        time: 6,
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
        time: 6,
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
        time: 6,
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
        time: 6,
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
        time: 9,
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
        time: 9,
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
        time: 9,
        mooch: 'No',
        minSize: 94.7,
        maxSize: 123.9,
        image: 'FishImg/Gigantshark.png'
    },
];

function randomIntFromInterval(min, max) {
    return (Math.random() * (max - min + 1) + min)
}

const cast = document.getElementById("button");
const fishImg = document.querySelector('img');
cast.addEventListener("click", function (e) {

    const container = document.getElementById('container');
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName == "DIV") {
            children[i].innerHTML = "";
        }
        else {
            children[i].src = "";
        }
    }
    outputOne.innerHTML = `You cast your line.`
    let caughtFish = fishInfo[Math.floor(Math.random() * fishInfo.length)]
    let fishSize = randomIntFromInterval(caughtFish.minSize, caughtFish.maxSize)
    let biteSize = caughtFish.bite;
    let fishTime = caughtFish.time * 1000;
    setTimeout(() => { outputTwo.innerHTML = `Something bites${biteSize}` }, fishTime);
    setTimeout(() => {
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
    }, fishTime + 3000);

});




