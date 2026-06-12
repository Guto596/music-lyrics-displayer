const musicaTeste = `walking by the wall
    (Shy one) the shadows will not fall
    (Shy one) is silently ignored
    (Quiet one) discouraged by the noise
    (Quiet one) living without choice
    (Quiet one) is a life without a voice
    When you can't even say my name
    Has the memory gone? Are you feeling numb?
    Go and call my name
    I can't play this game, so I ask again
    Will you say my name?
    Has the memory gone? Are you feeling numb?
    Or have I become invisible?
    that dreamers wish away
    (Hindsight) is falling on my face
    (Highlights) the shape of my disgrace
    When you don't hear a word I say
    As the talking goes, it's a one-way flow
    No fault, no blame
    Has the memory gone? Are you feeling numb?
    And have I become invisible? 
    And no one hears a word they say
    Has the memory gone? Are you feeling numb?
    Not a word they say
    But a voiceless crowd isn't backing down
    When the air turns red
    With their loaded hesitation
    Can you say my name?
    Has the memory gone? Are you feeling numb?
    Have we all become invisible?`;

function play() {
    const musicaSplittada = musicaTeste.split(/\r?\n/);
    const tempoInicial = 1000 // (ms)
    musicaSplittada.forEach((parte, index) => {
        setTimeout(() => {
            console.log(parte);
        }, tempoInicial*index);
    });
    
}

play();