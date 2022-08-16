let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
[
    "Mental health is an integral component of maintaining good overall health.",
    "When individuals are mentally healthy, they are able to realize their own abilities, cope with the normal stresses of life, work productively, and make positive contributions to their community (World Health Organization, 2004).",
    "When individuals experience poor mental health, they may start to withdraw and can experience debilitating symptoms such as depression and anxiety. Poor mental health can also affect physical health, as individuals might react by neglecting their physical health through inconsistent eating habits, poor hygiene, and general malaise (Ohrnberger et al., 2017)."
];

btn.addEventListener('click', function(){  
    var randomquote = quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML = randomquote;
})
