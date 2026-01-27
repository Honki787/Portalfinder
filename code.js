function a(koordinate) {
    return Math.round(koordinate / 8);
}

let netherText = "";
let zielText = "";

function berechnen() {
    const startx = Number(document.getElementById("startx").value);
    const startz = Number(document.getElementById("startz").value);
    const startx2 = Number(document.getElementById("startx2").value);
    const startz2 = Number(document.getElementById("startz2").value);

    const netherX = a(startx);
    const netherZ = a(startz);
    const zielX = a(startx2);
    const zielZ = a(startz2);

    const diffX = zielX - netherX;
    const diffZ = zielZ - netherZ;

    const gesamtDistanz = Math.round(Math.sqrt(diffX*diffX + diffZ*diffZ));

    netherText = `Nether Portal: X:${netherX} Z:${netherZ}`;
    zielText = `Ziel Portal: X:${zielX} Z:${zielZ}`;

    document.getElementById("output").innerHTML = `
        <p><strong>${netherText}</strong></p>
        <p><strong>${zielText}</strong></p>
        <hr>
        <p><strong>Differenz:</strong></p>
        <p>X: ${diffX} | Z: ${diffZ}</p>
        <p><strong>Gesamt Entfernung:</strong> ${gesamtDistanz} Blöcke</p>
    `;
}

function copyText(type) {
    const text = type === "nether" ? netherText : zielText;
    navigator.clipboard.writeText(text);
    alert("Koordinaten kopiert 📋");
}

