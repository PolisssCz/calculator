<?php

// Check if the request contains bracket
if ( $_POST['bracket'] == 'true' ) {
    $bracket_total = calculation( $_POST['bracket-number-1'], $_POST['bracket-operation'], $_POST['bracket-number-2'] );
    $total = calculation( $_POST['number-1'], $_POST['operation'], $bracket_total );
    echo "$total";
} else {
    $total = calculation( $_POST['number-1'], $_POST['operation'] ,$_POST['number-2'], true );
    echo "$total";
}



function calculation($number1, $operation, $number2, $format_number = false ){

    // Validation
    if ( is_numeric($number1) && is_numeric($number2) )
    {
        // Calculate total
        if( $operation == '+' )
        {
            $total = $number1 + $number2;	
        }
        if( $operation == '−' )
        {
            $total = $number1 - $number2;	
        }
        if( $operation == '×' )
        {
            $total = $number1 * $number2;	
        }
        if( $operation == '÷' )
        {
            $total = $number1 / $number2;	
        }

        if ( $format_number ){
            $format_number = number_format($total, 2, ',', ' ');
            return "$format_number";
        } else {
            return "$total";
        }

    } else {
        echo "Value must be a number!";
    };
};