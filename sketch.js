let archive;

function preload() {
  archive = loadJSON("insects.json");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();

  let insects = archive.insects;

  for (let i = 0; i < insects.length; i++) {
    createElement("h1", insects[i].name);
    let parts = insects[i].parts;
    for (let j = 0; j < parts.length; j++) {
      createDiv(parts[j]);
    }
  }
}

function draw() {
  background(220);
}
