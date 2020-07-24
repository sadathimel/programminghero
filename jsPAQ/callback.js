function explain_callback(name, age, task){
      console.log('Hello ', name);
      console.log('Your age ', age);
      task()
}
function washHand(){
      console.log('wash hand with soap')
}
function takeShower(){
      console.log('Take shower');
}
function scrollFacebook(){
      console.log('Scroll facebook but dont like any post');
}
explain_callback('Sogir Uddin', 17, washHand)
explain_callback('Jogir uddin', 13, takeShower)
explain_callback('mugir Uddin', 21, scrollFacebook);