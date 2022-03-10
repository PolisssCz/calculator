;(function($, window, document, undefined){

// Create variables
var number = $('.num')
var form = $(".container");
var screen = $('#calc-screen');
var inpSubmit = $('#key-13');

// Adding function: exists()

    /****************************************************
    *    Do you want to find out if the element exists?
    *****************************************************/
    jQuery.fn.exists = function(){
        return this.length > 0; 
    };

//

// Adding local function: onScreen()

    /****************************************************
    *    Displays the selected value on the display.
    *    If you want, you can delete the original value.
    *****************************************************/
    function onScreen(secondPart, clearScreen = false) { 
        if (clearScreen) {
            return screen.val(secondPart);
        } else {
            var firstPart = screen.val();
            return screen.val(firstPart + secondPart);
        }
    };

//

// Keyboard control
document.addEventListener('keypress', function (event) {
    var keyCode = event.which;
    $('#key-'+ keyCode +'').click();
});

// Button control + validation
$('button').on('click', function (event) { 
    event.preventDefault();
    var secondPart = $(event.target).text();
    
    // Button validation
    var operation = {'÷' : 1, '×' : 1, '\u2212' : 1, '+' : 1};

    // if the result is currently displayed, clear the screen.
    if( $('#equals').exists() ){
        screen.css({
            'transition': '0s',
            'background': '#36c436'
        });
        $('.inputs').remove();
        onScreen('', true);
    }

    if ( (secondPart in operation) && ! $('#number-1').exists() ){
        return false
    } 
    else if ( (secondPart in operation) && $('#operation').exists() )
    {
        return false
    } else {
        onScreen(secondPart);
    }
});

// Input validation
inpSubmit.on('click', function (event) {
    if ( ! $('#number-2').exists() ){ 
        return false
    } 
    else if(  $('#number-2').exists()) 
    {
        if ($('#number-2').val().length == 0) {

            return false
        } else {
            event.preventDefault();
            screen.css({
                'transition': '.5s',
                'background': '#e3e278'
            });
            $.ajax({
                type: "POST",
                url: form.attr('action'),
                data: form.serialize(),
                success: function (equals) {
                    onScreen(equals, true);
                    $('<input id="equals" class="inputs" name="equals" type="hidden" value="'+ equals +'">').appendTo(form);
                }
            });
        }
    }
})

// Saving values for calculation
number.on('click', function (event) { 
    var number = $(event.target).text();
    
    if ( $('#number-2').exists() ){
        var firstPart = $('#number-2').val();
        $('#number-2').remove();
        $('<input id="number-2" class="inputs" name="number-2" type="hidden" value="'+ firstPart +''+ number +'">').appendTo(form);
    } 
    else if ( $('#number-1').exists() )
    {
        var firstPart = $('#number-1').val();
        $('#number-1').remove();
        $('<input id="number-1" class="inputs" name="number-1" type="hidden" value="'+ firstPart +''+ number +'">').appendTo(form);
    } else {
        $('<input id="number-1" class="inputs" name="number-1" type="hidden" value="'+ number +'">').appendTo(form);
    }
});

// Save operation value == ÷,x,-,+
$('.btn-operation').on('click', function (event){
    var operation = $(event.target).text();
    // Validation
    if(  $('#operation').exists() ){ 
        // Remove the previous value of the operation
        $('#operation').remove();
        $('#number-2').remove();

        // Adding new operation value
        $('<input id="operation" class="inputs" name="operation" type="hidden" value="'+ operation +'">').appendTo(form);
        $('<input id="number-2" class="inputs" name="number-2" type="hidden" value="">').appendTo(form);

        // Fix visualization
        var original = screen.val();
        var correction = original.slice(0, -1) + ''+ operation +'';
        onScreen(correction, true)
        return true 
    } 
    else if ( $('#number-1').exists() )
    {
        $('<input id="operation" class="inputs" name="operation" type="hidden" value="'+ operation +'">').appendTo(form);
        $('<input id="number-2" class="inputs" name="number-2" type="hidden" value="">').appendTo(form);
        return true
    } else {
        return false
    }
});

// Clear button
$('#clear').on('click', function clear(){
    screen.css({
        'transition': '0s',
        'background': '#36c436'
    });
    $('.inputs').remove();
    onScreen('', true);
});
 
})(jQuery, window, document, undefined);