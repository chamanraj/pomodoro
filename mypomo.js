$( document ).ready (function() {

  //console.log(parseInt(str1));

  $('.fa-chevron-up').click(function() {

    console.log('Hurray');

  });
  $('.fa-chevron-down').click(function() {

    console.log('Hurray');

  });

  $('button').delegate('', 'click', function() {
    //console.log($('button').text());
    if ($('button').text() === 'Start') {
        $('.circle').addClass("backy");
        var str = $('.text-set').text();
        var str1 = parseInt(str.slice(7));
        $('button').html('Stop');
        var circleText = $('.centering span');  // .html('Work' + '25')
        var timer = setInterval(function() {circleText.html('Work ' + str1--)}, 1000);

        //console.log($('button').text());

    } else {
        $('.circle').removeClass("backy");
        $('button').html('Start');
        clearInterval(timer);
        $('.centering span').html('Session 25');

    }



  });


});
