function openMemory(month) {

    const popup = document.getElementById("memoryPopup");
    const title = document.getElementById("popupTitle");
    const text = document.getElementById("popupText");

    title.textContent = month;

    const memories = {

        "Month 1": "The beginning of our story. ❤️",

        "Month 2": "Our second month together. 💕",

        "Month 3": "Another beautiful chapter of us. 🌸",

        "Month 4": "More memories, more reasons to smile. ✨",

        "Month 5": "Five months of beautiful moments. 🫶",

        "Month 6": "Half a year of memories together. 🌙",

        "Month 7": "Another month, another collection of memories. 💗",

        "Month 8": "Eight months of our little story. 🌷",

        "Month 9": "Another chapter I'll always remember. 🦋",

        "Month 10": "Ten months of memories together. ⭐",

        "Month 11": "Almost one whole year of us. 🎀",

        "Month 12": "Our first anniversary. ❤️"
    };

    text.textContent = memories[month];

    popup.style.display = "flex";
}


function closeMemory() {

    document.getElementById("memoryPopup").style.display = "none";

}
