const memories = {

    "Month 1": {
        text: "The beginning of our story. ❤️",
        video: "videos/month1.mp4",
        photos: [
            "images/month1-photo1.jpg",
            "images/month1-photo2.jpg",
            "images/month1-photo3.jpg"
        ]
    },

    "Month 2": {
        text: "Our second month together. 💕",
        video: "videos/month2.mp4",
        photos: [
            "images/month2-photo1.jpg",
            "images/month2-photo2.jpg",
            "images/month2-photo3.jpg"
        ]
    },

    "Month 3": {
        text: "Another beautiful chapter of us. 🌸",
        video: "videos/month3.mp4",
        photos: [
            "images/month3-photo1.jpg",
            "images/month3-photo2.jpg",
            "images/month3-photo3.jpg"
        ]
    },

    "Month 4": {
        text: "More memories, more reasons to smile. ✨",
        video: "videos/month4.mp4",
        photos: [
            "images/month4-photo1.jpg",
            "images/month4-photo2.jpg",
            "images/month4-photo3.jpg"
        ]
    },

    "Month 5": {
        text: "Five months of beautiful moments. 🫶",
        video: "videos/month5.mp4",
        photos: [
            "images/month5-photo1.jpg",
            "images/month5-photo2.jpg",
            "images/month5-photo3.jpg"
        ]
    },

    "Month 6": {
        text: "Half a year of memories together. 🌙",
        video: "videos/month6.mp4",
        photos: [
            "images/month6-photo1.jpg",
            "images/month6-photo2.jpg",
            "images/month6-photo3.jpg"
        ]
    },

    "Month 7": {
        text: "Another month, another collection of memories. 💗",
        video: "videos/month7.mp4",
        photos: [
            "images/month7-photo1.jpg",
            "images/month7-photo2.jpg",
            "images/month7-photo3.jpg"
        ]
    },

    "Month 8": {
        text: "Eight months of our little story. 🌷",
        video: "videos/month8.mp4",
        photos: [
            "images/month8-photo1.jpg",
            "images/month8-photo2.jpg",
            "images/month8-photo3.jpg"
        ]
    },

    "Month 9": {
        text: "Another chapter I'll always remember. 🦋",
        video: "videos/month9.mp4",
        photos: [
            "images/month9-photo1.jpg",
            "images/month9-photo2.jpg",
            "images/month9-photo3.jpg"
        ]
    },

    "Month 10": {
        text: "Ten months of memories together. ⭐",
        video: "videos/month10.mp4",
        photos: [
            "images/month10-photo1.jpg",
            "images/month10-photo2.jpg",
            "images/month10-photo3.jpg"
        ]
    },

    "Month 11": {
        text: "Almost one whole year of us. 🎀",
        video: "videos/month11.mp4",
        photos: [
            "images/month11-photo1.jpg",
            "images/month11-photo2.jpg",
            "images/month11-photo3.jpg"
        ]
    },

    "Month 12": {
        text: "Our first anniversary. ❤️",
        video: "videos/month12.mp4",
        photos: [
            "images/month12-photo1.jpg",
            "images/month12-photo2.jpg",
            "images/month12-photo3.jpg"
        ]
    }

};


function openMemory(month) {

    const popup = document.getElementById("memoryPopup");
    const title = document.getElementById("popupTitle");
    const text = document.getElementById("popupText");

    const video = document.getElementById("memoryVideo");
    const videoSource = document.getElementById("videoSource");

    const gallery = document.getElementById("photoGallery");

    const memory = memories[month];

    title.textContent = month;
    text.textContent = memory.text;

    // Load video
    videoSource.src = memory.video;
    video.load();

    // Load photos
    gallery.innerHTML = "";

    memory.photos.forEach(function(photo) {

        const img = document.createElement("img");

        img.src = photo;
        img.alt = month + " memory";

        img.className = "memory-photo";

        gallery.appendChild(img);

    });

    popup.style.display = "flex";
}


function closeMemory() {

    document.getElementById("memoryPopup").style.display = "none";

}
