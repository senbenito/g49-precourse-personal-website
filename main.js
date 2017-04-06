$(document).ready(function() {

    console.log('Ready to go!');

    var img1 = $('.img1');
    var img2 = $('.img2');
    var img3 = $('.img3');
    var i = 0;
      while (i<10){
          img1.animate({height: '300px', opacity: '0.4'}, "slow");
          img3.fadeOut({height: '200px', opacity: '1'}, "slow")
          img2.animate({height: '100px', opacity: '0.4'}, "slow");
          img1.animate({width: '200px', opacity: '0.8'}, "slow");
          img2.animate({height: '300px', opacity: '0.4'}, "slow");
          img3.fadeIn({height: '150px', opacity: '0.4'}, "slow")
          img1.animate({height: '100px', opacity: '0.4'}, "slow");
          img3.slideUp({height: '50px', opacity: '0.4'}, "slow")
          img2.animate({width: '100px', opacity: '1'}, "slow");
          img1.animate({width: '100px', opacity: '0.8'}, "slow");
          img2.animate({width: '300px', opacity: '0.8'}, "slow");
          i++
      };

    $('#madLibs').hide();
    $('#results').hide();

    $('#letsPlay').on('click', function() {
      $('#madLibs').show();
    });

    $('#funPolice').on('click', function(){
      alert("Look out, the Fun Police is here............ seriously???????? You clicked 'No'?!?!?  Let's try this again, lame-o.")
    });

//copy this whole function and change to $('#submitUpdated').on('click', function() {
    $('#submitClassic').on('click', function() {
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
        var hulkingAnimal = $('#hulkingAnimal').val();
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
        var bestCohort = $('#bestCohort').val();


        // $('#results').show();
        $('#userNameResponse').append(userName);
        $('#noun1Response').append(noun1);
        $('#blueRhymeResponse').append(blueRhyme);
        $('#adjective1Response').append(adjective1);
        $('#plural1Response').append(plural1);
        $('#petResponse').append(pet);

        if (pet === 'cat') {
            $('#petGame').append(`"Indeed do we, Princess Mary Babycorn be she, but she's yowly and <span class='response'>${presentVerb1}</span> on the bed."`)
        } else if (pet === 'dog') {
            $('#petGame').append(`"The dog is Lola, who loves cherry cola, but will drink <span class='response'>${soda}</span> if led."`);
        } else {
            $('#petGame').append(`"We have a dog and a cat, but nothing like that - who just asks for a <span class='response'>${pet}</span>?", I said.`)
        }

        $('#explicativeResponse').append(explicative);
        $('#verbSucceedResponse').append(verbSucceed);
        $('#clothingResponse').append(clothing);
        $('#pastVerbResponse').append(pastVerb);
        $('#funAdjectiveResponse').append(funAdjective);
        $('#nounDiminutiveResponse').append(nounDiminutive);
        $('#coloradoActivityResponse').append(coloradoActivity);
        $('#hulkingAnimalResponse').append(hulkingAnimal);
        $('#adverbLyResponse').append(adverbLy);
        $('#adverbRhymeResponse').append(adverbRhyme);
        $('#superlative1Response').append(superlative1);
        $('#superlative2Response').append(superlative2);
        $('#superlative3Response').append(superlative3);
        $('#bestCohortResponse').append(bestCohort);
        $('#results').show();

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
