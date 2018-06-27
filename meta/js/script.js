/**************************/
/* Author: Soo            */
/* Last update: 6/25/2018 */
/**************************/

$( document ).ready(function() {

  $( function() {
      $( "#sortable" ).sortable();
      $( "#sortable" ).disableSelection();
    } );


    $ ( "#general_tag_order" ).click(function() {
        $( "#sortable > li:nth-of-type(n)" ).css("background-color", "rgba(255, 255, 255, 0.225)");

        $( "#sortable > li:nth-of-type(1)" ).css("order", "1");
        $( "#sortable > li:nth-of-type(2)" ).css("order", "2");
        $( "#sortable > li:nth-of-type(3)" ).css("order", "3");
        $( "#sortable > li:nth-of-type(4)" ).css("order", "4");
        $( "#sortable > li:nth-of-type(5)" ).css("order", "5");
        $( "#sortable > li:nth-of-type(6)" ).css("order", "6");
        $( "#sortable > li:nth-of-type(7)" ).css("order", "7");
        $( "#sortable > li:nth-of-type(8)" ).css("order", "8");
        $( "#sortable > li:nth-of-type(9)" ).css("order", "9");
        $( "#sortable > li:nth-of-type(10)" ).css("order", "11");
        $( "#sortable > li:nth-of-type(11)" ).css("order", "12");
        $( "#sortable > li:nth-of-type(12)" ).css("order", "13");
        $( "#sortable > li:nth-of-type(13)" ).css("order", "14");
        $( "#sortable > li:nth-of-type(14)" ).css("order", "15");
        $( "#sortable > li:nth-of-type(15)" ).css("order", "16");
        $( "#sortable > li:nth-of-type(16)" ).css("order", "10");
        $( "#sortable > li:nth-of-type(17)" ).css("order", "17");

        $( "#sortable > li:nth-of-type(1)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(2)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(3)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(4)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(5)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(6)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(7)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(8)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(9)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
        $( "#sortable > li:nth-of-type(16)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
    } );

    $ ( "#lecture_tag_order" ).click(function() {
      $( "#sortable > li:nth-of-type(n)" ).css("background-color", "rgba(255, 255, 255, 0.225)");

      $( "#sortable > li:nth-of-type(1)" ).css("order", "5");
      $( "#sortable > li:nth-of-type(2)" ).css("order", "6");
      $( "#sortable > li:nth-of-type(3)" ).css("order", "7");
      $( "#sortable > li:nth-of-type(4)" ).css("order", "8");
      $( "#sortable > li:nth-of-type(5)" ).css("order", "9");
      $( "#sortable > li:nth-of-type(6)" ).css("order", "10");
      $( "#sortable > li:nth-of-type(7)" ).css("order", "11");
      $( "#sortable > li:nth-of-type(8)" ).css("order", "12");
      $( "#sortable > li:nth-of-type(9)" ).css("order", "13");
      $( "#sortable > li:nth-of-type(10)" ).css("order", "14");
      $( "#sortable > li:nth-of-type(11)" ).css("order", "1");
      $( "#sortable > li:nth-of-type(12)" ).css("order", "2");
      $( "#sortable > li:nth-of-type(13)" ).css("order", "3");
      $( "#sortable > li:nth-of-type(14)" ).css("order", "15");
      $( "#sortable > li:nth-of-type(15)" ).css("order", "16");
      $( "#sortable > li:nth-of-type(16)" ).css("order", "17");
      $( "#sortable > li:nth-of-type(17)" ).css("order", "4");

      $( "#sortable > li:nth-of-type(11)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
      $( "#sortable > li:nth-of-type(12)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
      $( "#sortable > li:nth-of-type(13)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
      $( "#sortable > li:nth-of-type(17)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
  } );

  $ ( "#lecture_tag_order" ).click(function() {
      $( "#sortable > li:nth-of-type(n)" ).css("background-color", "rgba(255, 255, 255, 0.225)");
      
      $( "#sortable > li:nth-of-type(1)" ).css("order", "5");
      $( "#sortable > li:nth-of-type(2)" ).css("order", "6");
      $( "#sortable > li:nth-of-type(3)" ).css("order", "7");
      $( "#sortable > li:nth-of-type(4)" ).css("order", "8");
      $( "#sortable > li:nth-of-type(5)" ).css("order", "9");
      $( "#sortable > li:nth-of-type(6)" ).css("order", "10");
      $( "#sortable > li:nth-of-type(7)" ).css("order", "11");
      $( "#sortable > li:nth-of-type(8)" ).css("order", "12");
      $( "#sortable > li:nth-of-type(9)" ).css("order", "13");
      $( "#sortable > li:nth-of-type(10)" ).css("order", "14");
      $( "#sortable > li:nth-of-type(11)" ).css("order", "1");
      $( "#sortable > li:nth-of-type(12)" ).css("order", "2");
      $( "#sortable > li:nth-of-type(13)" ).css("order", "3");
      $( "#sortable > li:nth-of-type(14)" ).css("order", "15");
      $( "#sortable > li:nth-of-type(15)" ).css("order", "16");
      $( "#sortable > li:nth-of-type(16)" ).css("order", "17");
      $( "#sortable > li:nth-of-type(17)" ).css("order", "4");

      $( "#sortable > li:nth-of-type(11)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
      $( "#sortable > li:nth-of-type(12)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
      $( "#sortable > li:nth-of-type(13)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
      $( "#sortable > li:nth-of-type(17)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
  } );

  $ ( "#quiz_tag_order" ).click(function() {
    $( "#sortable > li:nth-of-type(n)" ).css("background-color", "rgba(255, 255, 255, 0.225)");
    
    $( "#sortable > li:nth-of-type(1)" ).css("order", "3");
    $( "#sortable > li:nth-of-type(2)" ).css("order", "4");
    $( "#sortable > li:nth-of-type(3)" ).css("order", "5");
    $( "#sortable > li:nth-of-type(4)" ).css("order", "6");
    $( "#sortable > li:nth-of-type(5)" ).css("order", "7");
    $( "#sortable > li:nth-of-type(6)" ).css("order", "8");
    $( "#sortable > li:nth-of-type(7)" ).css("order", "9");
    $( "#sortable > li:nth-of-type(8)" ).css("order", "10");
    $( "#sortable > li:nth-of-type(9)" ).css("order", "11");
    $( "#sortable > li:nth-of-type(10)" ).css("order", "12");
    $( "#sortable > li:nth-of-type(11)" ).css("order", "13");
    $( "#sortable > li:nth-of-type(12)" ).css("order", "14");
    $( "#sortable > li:nth-of-type(13)" ).css("order", "15");
    $( "#sortable > li:nth-of-type(14)" ).css("order", "1");
    $( "#sortable > li:nth-of-type(15)" ).css("order", "2");
    $( "#sortable > li:nth-of-type(16)" ).css("order", "16");
    $( "#sortable > li:nth-of-type(17)" ).css("order", "17");

    $( "#sortable > li:nth-of-type(14)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
    $( "#sortable > li:nth-of-type(15)" ).css("background-color", "rgba(255, 182, 185, 0.225)");
  } );

});