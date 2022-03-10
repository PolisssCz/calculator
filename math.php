<?php

// Simple validation
if ( is_numeric($_POST['number-1']) && is_numeric($_POST['number-2']) )
{
    // Calculate total
    if($_POST['operation'] == '+')
    {
        $total = $_POST['number-1'] + $_POST['number-2'];	
    }
    if($_POST['operation'] == '−')
    {
        $total = $_POST['number-1'] - $_POST['number-2'];	
    }
    if($_POST['operation'] == '×')
    {
        $total = $_POST['number-1'] * $_POST['number-2'];	
    }
    if($_POST['operation'] == '÷')
    {
        $total = $_POST['number-1'] / $_POST['number-2'];	
    }

    // Print total to the browser
    echo "$total";

    // formatting of results
    $formatNumber = number_format($total, 2, ',', ' ');
    /* 
        // Print total to the browser
        echo "$formatNumber"; 
    */
} else {
    // Print total to the browser
    echo "Value must be a number!";
}