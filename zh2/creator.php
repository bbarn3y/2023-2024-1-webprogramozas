<?php

# 1.7


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZH2 - Creator</title>
</head>
<body>
    <form method="post">
        Cím: <input type="string" name="title"/>
        <br/>
        Műfaj: <input type="string" name="genre"/>
        <br/>
        Megjelenés: 2023.
        <select name="month">
            <option value="January">Január</option>
            <option value="February">Február</option>
            <option value="March">Március</option>
            <option value="April">Április</option>
            <option value="May">Május</option>
            <option value="June">Június</option>
            <option value="July">Július</option>
            <option value="August">Augusztus</option>
            <option value="September">Szeptember</option>
            <option value="October">Október</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>

        <button type="submit" name="create">Új játék felvétele</button>
    </form>
</body>
</html>