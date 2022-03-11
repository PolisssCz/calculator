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
    var charKey = $(event.target).text();
    
    // if the result is currently displayed, clear the screen.
    if( $('#equals').exists() ){
        screen.css({
            'transition': '0s',
            'background': '#36c436'
        });
        $('.inputs').remove();
        onScreen('', true);
    }

    // Button validation
    var operation = {'÷' : 1, '×' : 1, '\u2212' : 1, '+' : 1};

    if ( $('#bracket-c').exists() ) {
        return false
    }

    // Checking the brackets
    if ( ( charKey == "(" ) )
    {
        if ( ($('#number-1').exists()) && ($('#operation').exists()) && (! $('#bracket-o').exists()) ) {
            return onScreen(charKey);
        } else {
            return false
        }
    }

    if ( ( charKey == ")" ) )
    {
        if ( ($("#bracket-number-2").exists()) && (! $("#bracket-c").exists()) ) {
            return onScreen(charKey);
        } else {
            return false
        }
    }
    else if ( ( charKey == ")" ) && (! $("#bracket-o").exists() ) ) 
    {
        return false
    }


    // visual display
    if ( (charKey in operation) )
    {
        if ( ($('#number-1').exists()) && (! $('#bracket-o').exists()) && (! $('#operation').exists()) ) { 
            onScreen(charKey);
            return true
        }
        else if ( ($('#number-1').exists()) && ( $('#operation').exists()) && (! $('#bracket-number-1').exists()) ) 
        {
            var operationChar = $('#operation').val();
            var original = screen.val();
            original.slice(0, -1) + ''+ operationChar +'';
            return true
        } else {
            return false            
        }
    }else{
        onScreen(charKey);
    }

});

/************
* Validation.
* Save operation value == "÷,x,-,+".
*************************************/
$('.btn-operation').on('click', function (event){
    var operation = $(event.target).text();

    /* validation */
    
    // If there is a bracket, we can insert an operation value
    if( ($("#bracket-number-1").exists()) && (! $("#bracket-operation").exists()) ){
        $('<input id="bracket-operation" class="inputs" name="bracket-operation" type="hidden" value="'+ operation +'">').appendTo(form);
        onScreen(operation);
    }
    else if ( (! $("#bracket-number-2").exists()) && ( $("#bracket-operation").exists()) )
    {
        $('#bracket-operation').remove();
        $('<input id="bracket-operation" class="inputs" name="bracket-operation" type="hidden" value="'+ operation +'">').appendTo(form);
        var original = screen.val();
        var newVal = original.slice(0, -1) + ''+ operation +'';
        onScreen(newVal, true);
    }

    

    // If i enter an operation value and then a number and then the operation value again - the entered number is not converted to the operation value.
    if( ($('#operation').exists()) && ( $("#number-2").exists()) ) {
        if( $("#number-2").val().length == 0 ){
            return true
        } else{
            return false
        }
    };

    // Overwriting the operational value
    if( ($('#operation').exists()) && (! $('#bracket-o').exists()) )
    { 
        // Remove the previous value of the operation
        $('#operation').remove();
        $('#number-2').remove();

        // Adding new operation value
        $('<input id="operation" class="inputs" name="operation" type="hidden" value="'+ operation +'">').appendTo(form);

        // Fix visualization
        var original = screen.val();
        var correction = original.slice(0, -1) + ''+ operation +'';
        onScreen(correction, true)
        return true 
    } 
     else if ( ($('#number-1').exists()) && (! $('#bracket-o').exists()) ) 
    {// If we do not override the operational value 
        $('<input id="operation" class="inputs" name="operation" type="hidden" value="'+ operation +'">').appendTo(form);
        return true
    } else {
        return false
    };
});

// Input validation
inpSubmit.on('click', function (event) {

    if ( ($('#number-2').exists()) || ($('#bracket-c').exists()) ) {
    // event.preventDefault();
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
    } else {
        return false
    }

});

$('#bracket-open').on('click', function bracket(event) {
    var bracketO = $(event.target).text();

    if ( $('#bracket-o').exists() ) {
        return false
    } else {
        $('<input id="bracket-o" class="inputs" name="bracket-o" type="hidden" value="'+ bracketO +'">').appendTo(form);
        return true
    }
})
$('#bracket-close').on('click', function bracket(event) {
    var bracketO = $(event.target).text();
    if ( ($('#bracket-o').exists()) && ($('#bracket-number-2').exists()) && (! $('#bracket-c').exists()) ) {
        $('<input id="bracket-c" class="inputs" name="bracket-o" type="hidden" value="'+ bracketO +'">').appendTo(form);
        return true
    } else {
        return false
    }
})

// Saving values for calculation
number.on('click', function (event) { 
    var number = $(event.target).text();

    /* 
    *** Storing number in brackets 
    */
    // Bracket-number-1
    if ( ($('#bracket-o').exists()) && (! $('#bracket-number-1').exists())  ) {
            $('<input id="bracket-number-1" class="inputs" name="bracket-number-1" type="hidden" value="'+ number +'">').appendTo(form);
        return true
    }else if ( ($('#bracket-o').exists()) && ($('#bracket-number-1').exists()) && (! $('#bracket-operation').exists())) {
        var firstPart = $('#bracket-number-1').val();
        $("#bracket-number-1").remove();
        $('<input id="bracket-number-1" class="inputs" name="bracket-number-1" type="hidden" value="'+ firstPart +''+ number +'">').appendTo(form);
    }
    // Bracket-number-2
    if ( ($('#bracket-number-1').exists()) && ($('#bracket-operation').exists()) && (! $('#bracket-number-2').exists()) ) {
        $('<input id="bracket-number-2" class="inputs" name="bracket-number-2" type="hidden" value="'+ number +'">').appendTo(form);
    }
    else if ( ($('#bracket-number-2').exists()) && (! $('#bracket-c').exists()) ) 
    {
        var firstPart = $('#bracket-number-2').val();
        $('#bracket-number-2').remove();
        $('<input id="bracket-number-2" class="inputs" name="bracket-number-2" type="hidden" value="'+ firstPart +''+ number +'">').appendTo(form);
    }

    /* 
    *** Storing number no brackets
    */
    if ( ($('#operation').exists()) && (! $('#bracket-number-1').exists()) ) { 
        $('<input id="number-2" class="inputs" name="number-2" type="hidden" value="'+ number +'">').appendTo(form);
    } 
    else if ( $('#number-2').exists() )
    {
        var firstPart = $('#number-2').val();
        $('#number-2').remove();
        $('<input id="number-2" class="inputs" name="number-2" type="hidden" value="'+ firstPart +''+ number +'">').appendTo(form);
    }  
    else if ( $('#number-1').exists() )
    {
        if ( $('#bracket-number-1').exists() ) {
            return false
        } 
        else if ( (! $('#bracket-number-1').exists()) && ( $('#number-1').exists() ) ) 
        {
            var firstPart = $('#number-1').val();
            $('#number-1').remove();
            $('<input id="number-1" class="inputs" name="number-1" type="hidden" value="'+ firstPart +''+ number +'">').appendTo(form);         
        };
    } else {
        $('<input id="number-1" class="inputs" name="number-1" type="hidden" value="'+ number +'">').appendTo(form);
        return true
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