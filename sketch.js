let userInput, button;
let poem = [];


function setup() {
  createCanvas(400, 500);

  userInput = createInput();
  userInput.position(10, 10);

  button = createButton('Generate Line');
  button.position(10, 38);
  button.mousePressed(newLine);
}

function newLine() {
  let userLine = userInput.value();
  userInput.value(''); 

  let words = RiTa.tokenize(userLine);
  let r = floor(random(words.length));
  let rhymes = RiTa.rhymesSync(words[r]);
  let soundLike = RiTa.soundsLikeSync(words [r]);

  if (rhymes.length > 0) {
    let changedWord = random(rhymes);
    words[r] = changedWord;
    userLine = RiTa.untokenize(words);
  }

  poem.push(userLine);
}

function draw() {
  background(240);
  writePoem();
}

function writePoem() {
  for (let i = 0; i < poem.length; i++) {
    text(poem[i], 10, 180 + i * 20);
  }
}
