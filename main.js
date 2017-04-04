$(document).ready(function() {

    console.log('Ready to go!');
    $('#madLibs').hide();
    $('#results').hide();

    $('#letsPlay').on('click', function() {
      $('#madLibs').show();
    });

    $('#funPolice').on('click', function(){
      alert("Look out, the Fun Police is here............ seriously???????? You clicked 'No'?!?!?  Let's try this again, lame-o.")
    });

    $('#submit').on('click', function() {
        var userName = $('#userName').val();
        var noun1 = $('#noun1').val();
        var blueRhyme = $('#blueRhyme').val();
        var adjective1 = $('#adjective1').val();
        var plural1 = $('#plural1').val();
        var presentVerb1 = $('#presentVerb1').val();
        var pet = $('#pet').val();
        var soda = $('#soda').val();
        var explicative = $('#explicative').val();
        var verbSucceed = $('#verbSucceed').val();
        var clothing = $('#clothing').val();
        var pastVerb = $('#pastVerb').val();
        var funAdjective = $('#funAdjective').val();
        var nounDiminutive = $('#nounDiminutive').val();
        var coloradoActivity = $('#coloradoActivity').val()
        var relationNoun = $('#relationNoun').val();
        var adverbLy = $('#adverbLy').val();

        if ($('#adverbLy').slice(-4) === 'edly') {
            var adverbRhyme = 'spectightedly';
        } else if ($('#adverbLy').slice(-5) === 'ingly') {
            var adverbRhyme = 'ubercobrimmingly';
        } else {
            var adverbRhyme = 'dokely';
        }

        var verb = $('#verb').val();
        var noun2 = $('#noun2').val();
        var superlative1 = $('#superlative1').val();
        var superlative2 = $('#superlative2').val();
        var superlative3 = $('#superlative3').val();

        $("var").css("font-color", "blue");

        $('#results').show();
        $('#results').append(`There once was a fellow named Shannon, who said, "Let's shoot <span class='userResponse'>${userName}</span> out of a cannon."`);
        $('#results').append(`<br>"I'm not sure I like that ${noun1}", said you. "Oh, don't be such a ${blueRhyme}..."`);
        $('#results').append(`<br>"If you're ${adjective1} when we're done, I'll give you a son - for I have two."`);
        $('#results').append(`<br>"No way," you say. "${plural1} are expensive, but this has me pensive - do you have a ${pet} instead?"`)
        if (pet === 'cat') {
            $('#results').append(`<br>"Indeed do we, Princess Mary Babycorn be she, but she's yowly and ${presentVerb1} on the bed."`)
        } else if (pet === 'dog') {
            $('#results').append(`<br>"The dog is Lola, who loves cherry cola, but will drink ${soda} if led."`);

        } else {
            $('#results').append(`<br>"We have a dog and a cat, but nothing like that - who just asks for a ${pet}?", I said.`)
        }
        $('#results').append(`<br>"OK, OK that's your family I see - what about thee?", quoth you to me.<span class='caveat'>"And, what the ${explicative} does 'quoth' mean?!?"</span>`)
        $('#results').append(`<br>A bit about me: to ${verbSucceed} the LSAT, I studied like booom-braaat and also wore adult-${clothing} because you can't even break to pee.`);
        $('results').append(`<br>I ${pastVerb} on law school to keep my soul, and continued my toy sales role, because being ${funAdjective} is best.`)
        $('#results').append(`<br>A little ${nounDiminutive} more, before you snore, my hobbies include: cooking, Pokemon Go and <s>${coloradoActivity}</s><span class='caveat'><-- nope. Just trying to rest.</span>`);
        $('#results').append(`<br>I have neither ${relationNoun} nor brother, just a dad and mother who I ${adverbLy}-${adverbRhyme} appreciate because their love is so great.`)
        $('#results').append(`<br>It's gonna be ${superlative1}-${superlative2}-${superlative3}-just fine in g49, so I bid you adieu and toodle-dee-doo, this first page is through so why don't you check out this <a href="aboutMe.html">other</a>?`)
//
// for (i=1;i<1000000000;i++){
//         $('adieu').hide(i*100);
//         $('toodle-dee-doo').show(i*100);
//         $('adieu').show(i*100);
//         $('toodle-dee-doo').hide(i*100);
// }

        // JQUERY for adieu to toodle-dee-doo every few seconds



    });
});
