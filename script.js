function openMemory(month) {

    document.getElementById("memoryPopup").style.display = "flex";

    document.getElementById("popupTitle").textContent = month;

}

function closeMemory() {

    document.getElementById("memoryPopup").style.display = "none";

}
