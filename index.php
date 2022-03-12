<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/css/normalize.css" rel="stylesheet"/>
    <link href="assets/css/StyleSheet1.css" rel="stylesheet"/>
    <title>Calculator v3</title>
</head>
<!-- Create variable -->
<?php $backspace = "M19,5H9.83a3,3,0,0,0-2.12.88L2.29,11.29a1,1,0,0,0,0,1.42l5.42,5.41A3,3,0,0,0,9.83,19H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,11a1,1,0,0,1-1,1H9.83a1.05,1.05,0,0,1-.71-.29L4.41,12,9.12,7.29A1.05,1.05,0,0,1,9.83,7H19a1,1,0,0,1,1,1ZM16.71,9.29a1,1,0,0,0-1.42,0L14,10.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L12.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L14,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L15.41,12l1.3-1.29A1,1,0,0,0,16.71,9.29Z";?>
<body>
<section>
    <form class="container" action="math.php" method="post">
        <div class="calc-container">
            <input id="calc-screen" name="screen" type="text" class="screen" placeholder="0" readonly="true">
            <div class="keypad">
                <div class="row">
                    <button id="bracket-open">(</button>
                    <button id="bracket-close">)</button>
                    <button id="backspace"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d=<?=$backspace?>/></svg></button>
                    <button id="clear">C</button>
                </div>
                <div class="row">
                    <button id="key-55" class="num">7</button>
                    <button id="key-56" class="num">8</button>
                    <button id="key-57" class="num">9</button>
                    <button id="key-47" class="btn-operation">&divide;</button>
                </div>
                <div class="row">
                    <button id="key-52" class="num">4</button>
                    <button id="key-53" class="num">5</button>
                    <button id="key-54" class="num">6</button>
                    <button id="key-42" class="btn-operation">&times;</button>
                </div>
                <div class="row">
                    <button id="key-49" class="num">1</button>
                    <button id="key-50" class="num">2</button>
                    <button id="key-51" class="num">3</button>
                    <button id="key-45" class="btn-operation">&minus;</button>
                </div>
                <div class="row">
                    <button id="key-48" class="num">0</button>
                    <button id="key-44" class="num dot">.</button>
                    <input  id="key-13" type="submit" value="&equals;">
                    <button id="key-43" class="btn-operation">&plus;</button>
                </div>
            </div>
        </div>
    </form>
</section>
<script type="text/javascript" src="assets/js/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>