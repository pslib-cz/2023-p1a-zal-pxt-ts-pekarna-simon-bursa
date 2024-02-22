type Odber = {
    cas: number,
    spotreba: number 
};

let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 },
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 }, 
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 },
];

let prumer: number = 0;
const cena: number = 6.70; 

for (let i = 0; i < data.length; i++) {
    let cenaFinal = Math.round(data[i].spotreba / 1000 * (data[i].cas / 3600) * cena);
    prumer += data[i].spotreba / 1000;

    console.log(
        "Spotřeba: " + data[i].spotreba + " W" +
        "\nČas: " + data[i].cas + " s" +
        "\nCena za kWh: " + cena + " Kč" +
        "\nCelková cena: " + cenaFinal + " Kč" +
        "\n---"
    );
}

console.log("Průměrná spotřeba: " + prumer / data.length + " kWh")

