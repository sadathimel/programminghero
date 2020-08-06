function welComeGuest (name, greetHandler){
    greetHandler(name)
}
const actorName = 'Tom Hanks';

function greetUserMorning(name){
    console.log('Good Morning', name)
}
function greetAfternoon(name) {
    console.log("Good Afternoon", name);
}
welComeGuest(actorName,greetAfternoon);
welComeGuest('shakib khon',greetUserMorning);
welComeGuest('kate Winslet',greetAfternoon);

function handleClick(){
    console.log('someone clicked me');
}
document.getElementById('click').addEventListener('click', handleClick)