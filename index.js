//CODE PROVIDED BY Ayush Jha
//YOU CAN FREELY EDIT AND USE THE CODE HEREBY
let btn = document.getElementById('circle-btn');
let output = document.getElementById('output');
let quotes = [ // HERE I'VE DEFINED THE QUOTES' LIBRARY.
    '"   When The Going Gets Tough, The Tough Gets Going...   ~ UnKnown   " ',
    '"   Being Rich Is Hard, Being Poor Is Hard: Choose Your Hard...    ~ Experience   "',
    '"   STOIC... GRIND... GLORY...    ~ Ayush Jha   "',
    '"   Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Comply...   ~ Johann Wolfgang Von Goethe   "',
    '"   The Bad News is That The Time Flies. The Good News Is You Are The Pilot...   ~ Michael Altshuler   "',
    '"   An Honest Man Is Always A Child.... ~ Socrates   "',
    '"   The Roots Of Education Are Always Bitter, But The Fruit Is Always Sweet.... ~ Aristotle   "',
    '"   It Is Easier To Build Strong Children, Then To Repair Broken Men .... ~ Frederick Douglass   "',
    '"   Do We Not Realize That Self Respect Comes From Self Reliance.... ~ APJ Abdul Kalam   "',
    '"   You Have To Dream, Before Your Dreams Come True.... ~ APJ Abdul Kalam   "',
    '"   Great Minds Disscuss Ideas; Average Minds Disscuss Events; Small Minds Disscuss People... ~Eleanor Roosevelt   "',
    '"   I Hear And I Forget. I See And I Remember. I Do And I Understand.... ~ Chinese Proverb   "',
    '"   The Pessimist Sees Difficulty In Every Opportunity, The Optimist Sees Opportunity In Every Difficulty.... ~ Winston Churchill   "',
    '"   Tough Times Produces Strong Men, Strong Men Produces Good Time, Good Time Produces Weak Men, Weak Men Produces Tough Times  & Tough Times Gives Strong Men And The Circle Goes ON And ON.... ~ History   "',
    '"   Dont Let Yesterday, Take Up Too Much Of Today... ~ Will Rogers   "',
    '"   Early Success Develops Arrogance, Late Success Develops Character .... ~ UnKnown   "',
    '"   The Force From The Outside, Might Break You But The Force From Within Definately Makes You... ~ Experience   "',
    "The quieter you become, the more you can hear. – Ram Dass",
    "Discipline is choosing between what you want now and what you want most. – Abraham Lincoln",
    "You do not rise to the level of your goals, you fall to the level of your systems. – James Clear",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don't count the days, make the days count. – Muhammad Ali",
    "Action is the foundational key to all success. – Pablo Picasso",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "If you're going through hell, keep going. – Winston Churchill",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Fall seven times, stand up eight. – Japanese Proverb",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Hard choices, easy life. Easy choices, hard life. – Jerzy Gregorek",
    "Courage doesn't always roar. Sometimes it's the quiet voice at the end of the day saying 'I will try again tomorrow.' – Mary Anne Radmacher",
    "Work in silence, let your success make the noise. – Frank Ocean",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "A comfort zone is a beautiful place, but nothing ever grows there. – Unknown",
    "Be so good they can’t ignore you. – Steve Martin",
    "Do it with passion or not at all. – Rosa Nouchette Carey",
    "Dream big. Start small. Act now. – Robin Sharma",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "What we fear doing most is usually what we most need to do. – Tim Ferriss",
    "Don't limit your challenges. Challenge your limits. – Unknown"
    ];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;

})

