$( document ).ready (function() {

  //console.log(parseInt(str1));

  $('.fa-chevron-up').click(function() {
    var num = parseInt($('#five').text());
    num++;
    $('#five').html(num);

  });
  $('.fa-chevron-down').click(function() {

    var num = parseInt($('#five').text());
    if (num > 1) {
        num--;
    }

    $('#five').html(num);


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
