# Workshop_6

Text and language

* Create an interactive nonsense poem generator using the rita.js library.
* Use at least three different functions from the rita.js library to process the user's input.

Add fonts
Let font1;

Function preload(){
Font 1= loadFont(‘xxx.xxx.xxxpathway’);

Function setup
textFont(font1);

————

Let userInput;
Let button;

Function setup()
userInput= createInput();
userInput.position(x,x):
Button = createButton(‘label’)
Button.position(xxx,xxx);
Button.mousePressed(newLine);

Function newLine(){
Add let userLine; (top of the page)
userLine = uerINput.value():

Let poem =[]; (top)

Keep going prom.push(userLine);

Function writepoem(){
for(x=0; x<poem.length; x++){
text(poem[x], 40u can change this, 180+ x * 20);
}
}
Function draw
writePoem();

Tp clear the box
Function newLine
userInput.value(‘’);

RiTa javascript library
New line function<- change

Let words=RiTa.tokenize(userLine);
Let r=floor(random(0, words, length));
Make Rita rhyme 
Let rhymes = RiTa.rhymesSync(words[r]);
Let changedWord = random(rhymes);
Words[r]=changedWord;
UserLine= RiTa.untokenize(words);
Poem.push(userLine);

 If Rita doens’t find words to rhyme

Let rhymes = RiTa.rhymesSync(words[r]);
Of(rhymes.length ===0){
Poem.push(userLine);
}else{
Continue


URL:https://taropie3sui.github.io/Workshop_6/
