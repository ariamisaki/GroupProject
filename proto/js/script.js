/**************************/
/* Author: Soo            */
/* Last update: 6/27/2018 */
/**************************/

var accordion = null;
var viewport = $(window).width();

//if viewport of the browser is less than 759. Accordion menu is disabled
if ( viewport <= 759) {
    accordion = true;
    //Print button is hidden 
    $( print_button ).hide();
} else {
    accordion = false;
}

if (accordion == false) {
    $(function() {
        $( "#accordion" ).accordion( "disable" );
    });
} else {
    $( "#accordion" ).accordion({
        header: "h2",
        active: 0,
        collapsible: false,
        heightStyle: "content",
    });
};
