const cpAqua = document.getElementById("cp-aqua");
const cpBlue = document.getElementById("cp-blue");
const cpGreen = document.getElementById("cp-green");
const cpGrey = document.getElementById("cp-grey");
const cpIndigo = document.getElementById("cp-indigo");
const cpOrange = document.getElementById("cp-orange");
const cpPink = document.getElementById("cp-pink");
const cpPurple = document.getElementById("cp-purple");
const cpRed = document.getElementById("cp-red");
const cpYellow = document.getElementById("cp-yellow");

const aqua = [
  "#ABFBF2",
  "#4EF6E5",
  "#0CDAC6",
  "#009E8E",
  "#00776A",
  "#004F47"
];
const blue = [
  "#d3efff", 
  "#8cd5ff", 
  "#5fc4ff", 
  "#23A6F0", 
  "#0F56B3", 
  "#0A3977"
];
const green = [
  "#C5F2C7",
  "#8CE590",
  "#52D858",
  "#2AB930",
  "#1F8B24",
  "#155D18",
];
const grey = [
  "#E0E0E0", 
  "#C0C0C0", 
  "#A1A1A1", 
  "#818181", 
  "#616161", 
  "#414141"
];
const indigo = [
  "#C7CDF1",
  "#8E9AE3",
  "#5668D5",
  "#2E41B6",
  "#223189",
  "#17205B",
];
const orange = [
  "#FBE5C9",
  "#F6CA92",
  "#F2B05C",
  "#ED9526",
  "#BF710F",
  "#7F4C0A",
];
const pink = [
  "#FAC1D6", 
  "#F584AD", 
  "#F04684", 
  "#E1125E", 
  "#A90E46", 
  "#70092F"
];
const purple = [
  "#ECB9F9",
  "#D972F4",
  "#C52CEE",
  "#9A0FBF",
  "#730C8F",
  "#4D085F",
];
const red = [
  "#FCD0CF", 
  "#FAA09E", 
  "#F7716E", 
  "#F5413D", 
  "#DA100B", 
  "#910B08"
];
const yellow = [
  "#FBF3D0",
  "#F7E7A1",
  "#F4DB71",
  "#F0D042",
  "#D4B011",
  "#8E750B",
];

const createColorPalette = (colors, selector, colorName) => {
  let index = 1;
  colors.map((color) => {
    selector.innerHTML += `
      <div class="color-palette--color">
        <div class="color--dark color txt-center" style="background-color: ${color};">${color}</div>
        <p>${colorName}-${index++}</p>
      </div>
    `;
  });
};

createColorPalette(aqua, cpAqua, "Aqua");
createColorPalette(blue, cpBlue, "Blue");
createColorPalette(green, cpGreen, "Green");
createColorPalette(grey, cpGrey, "Grey");
createColorPalette(indigo, cpIndigo, "Indigo");
createColorPalette(orange, cpOrange, "Orange");
createColorPalette(pink, cpPink, "Pink");
createColorPalette(purple, cpPurple, "Purple");
createColorPalette(red, cpRed, "Red");
createColorPalette(yellow, cpYellow, "Yellow");
