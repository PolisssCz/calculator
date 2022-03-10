<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/css/normalize.css" rel="stylesheet"/>
    <link href="assets/css/StyleSheet1.css" rel="stylesheet"/>
    <title>Calculator</title>
</head>
<body>

<section>
    <form class="container" action="math.php" method="post">
        <div class="calc-container">
            <input id="calc-screen" name="screen" type="text" class="screen" placeholder="0" readonly="true">
            <div class="keypad">
                <div class="row">
                    <button id="clear">C</button>
                    <button id="bracket-open">(</button>
                    <button id="bracket-close">)</button>
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