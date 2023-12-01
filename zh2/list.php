<?php

interface GamesAPI {
    function getGames(): array;
    function getGamesReleasedInMonth(string $month): array;
}

class GamesFromJSON implements GamesAPI {
    function getGames(): array {
        # 1.1
        return [];
    }

    function getGamesReleasedInMonth(string $month): array {
        # 1.3
        return [];
    }
}

$jsonGameAPI = new GamesFromJSON();
$games = $jsonGameAPI->getGames();

# 1.4

# 1.6

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZH2 - List</title>
</head>
<body>

    <form method="post">
        <select name="month">
            <!-- #1.5 -->
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
        <button type="submit" name="filter">Szűrés hónapra</button>
    </form>
    
    <table>
        <!-- #1.2 -->

    </table>

    <form method="post">
        <button type="submit" name="create">Új játék felvétele</button>
    </form>

</body>
</html>

