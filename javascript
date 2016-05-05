var items=[
" Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.'--Mary Anne Radmacher, American author and artist",
"Fall seven times and stand up eight.--Japanese Proverb",

"It's not that I'm so smart, it's just that I stay with problems longer.--Albert Einstein (1879-1955), physicist and developer of the theory of relativity",
"Many of life's failures are people who did not realize how close they were to success when they gave up.--Thomas Edison (1874-1931), inventor of the light bulb",
"Failure is only the opportunity to begin again, this time more intelligently.--Henry Ford (1863-1947), founder of Ford Motor Company",
"A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying.--B.F. Skinner (1904-1990), American psychologist",
"Ask yourself this question: 'Will this matter a year from now?'--Richard Carlson, American psychotherapist and author of Don't Sweat the Small Stuff",
"What if I told you that 10 years from now, your life would be exactly the same? I doubt you'd be happy. So, why are you so afraid of change?--Karen Salmansohn, best-selling self-help author",
"Success is the sum of small efforts, repeated day in and day out.--Robert Collier (1885-1950), American self-help author",
"It does not matter how slowly you go so long as you do not stop.--Confucius (551-479 BC), philosopher",
"Never confuse a single defeat with a final defeat.--F. Scott Fitzgerald (1896-1940), American author",
"Perseverance is the hard work you do after you get tired of doing the hard work you already did.--Newt Gingrich (1943- ), American politician, historian, and author",
"Perseverance is failing 19 times and succeeding the 20th.--Julie Andrews (1935- ), English film and stage actress",
];



var header = document.getElementById("myheader");
header.addEventListener("click", getQuote);

 function getQuote() {

var item = items[Math.floor(Math.random()*items.length)];
document.getElementById("linkId").href = "https://twitter.com/intent/tweet?text=" + item;
    
  header.innerHTML = item;
};
function jiggle(){
window.open(document.getElementById("linkId").href,'_blank');}
