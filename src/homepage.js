let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
[
    "Mental health is an integral component of maintaining good overall health.",
    "When individuals are mentally healthy, they are able to realize their own abilities, cope with the normal stresses of life, work productively, and make positive contributions to their community \n(World Health Organization, 2004).",
    "When individuals experience poor mental health, they may start to withdraw and can experience debilitating symptoms such as depression and anxiety. Poor mental health can also affect physical health, as individuals might react by neglecting their physical health through inconsistent eating habits, poor hygiene, and general malaise (Ohrnberger et al., 2017).",
    "You don’t have to control your thoughts. You just have to stop letting them control you.\n (Dan Millman)",
    "There is a crack in everything, that’s how the light gets in. \n (Leonard Cohen)",
    "Deep breathing is our nervous system’s love language. \n (Dr. Lauren Fogel Mersy)",
    "Just because you don’t understand it doesn’t mean it isn’t so.\n (Lemony Snicket)",
    "Promise me you’ll always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think.\n (Christopher Robin)",
    "Just because no one else can heal or do your inner work for you doesn’t mean you can, should, or need to do it alone.\n (Lisa Olivera)",
    "There is no normal life that is free of pain. It's the very wrestling with our problems that can be the impetus for our growth.\n (Fred Rogers)"

];

btn.addEventListener('click', function(){  
    var randomquote = quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML = randomquote;
})