let archive;

let chests = [];
let butts = [];
let legs = [];
let heads = [];
let ants = [];

function preload() {
  archive = loadJSON("insects.json");

  for (let i = 0; i < 6; i++) {
    chests[i] = loadImage("assets/parts/chest/chest-" + i + ".png");
    butts[i] = loadImage("assets/parts/butt/butt-" + i + ".png");
    legs[i] = loadImage("assets/parts/leg/leg-" + i + ".png");
    heads[i] = loadImage("assets/parts/head/head-" + i + ".png");
    ants[i] = loadImage("assets/parts/ant/ant-" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  let Insects = archive.insects;

  for (let i = 0; i < Insects.length; i++) {
    translate(200, 0);
    textAlign(CENTER);
    textSize(20);
    text(Insects[i].name, 0, 100);
    textSize(14);
    text(Insects[i].date, 0, 130);

    let Chest = Insects[i].parts[0];
    let Butt = Insects[i].parts[1];
    let Leg = Insects[i].parts[2];
    let Head = Insects[i].parts[3];
    let Ant = Insects[i].parts[4];

    imageMode(CENTER);

    //ANT
    image(
      ants[Ant.ant],
      0,
      400,
      ants[Ant.ant].width / 3,
      ants[Ant.ant].height / 3
    );

    //HEAD
    image(
      heads[Head.head],
      0,
      400,
      heads[Head.head].width / 3,
      heads[Head.head].height / 3
    );

    //LEG
    image(
      legs[Leg.leg],
      0,
      400,
      legs[Leg.leg].width / 3,
      legs[Leg.leg].height / 3
    );

    //BUTT
    image(
      butts[Butt.butt],
      0,
      400,
      butts[Butt.butt].width / 3,
      butts[Butt.butt].height / 3
    );

    //CHEST
    image(
      chests[Chest.chest],
      0,
      400,
      chests[Chest.chest].width / 3,
      chests[Chest.chest].height / 3
    );
  }
}

function draw() {}
