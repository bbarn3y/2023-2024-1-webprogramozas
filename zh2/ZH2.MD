# Webprogramozás 2023-2024-1 ZH 2

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## A feladat

Adott egy fájl játékok adataival: `games.json`

A fájlok játékok adatait tartalmazzák, mindről a következőket:
- **title**: A játék címe.
- **genre**: A játék műfaja.
- **month**: A játék megjelenésének hónapja.

Két kiinduló PHP fájl tartozik a projekthez: `list.php` és `creator.php`.
Minden feladatnál jeleztem, hogy melyikben kell megoldani.

Fontos: Az oldalon ne jelenjenek meg figyelmeztetések és hibák, minden esetben megfelelően működjön!
(Például akkor is ha POST-olt a felhasználó egy űrlapon keresztül és akkor is ha nem, először látogat az oldalra.)

1.1 **Olvasd be a `games.json` fájl tartalmát egy asszociatív tömbbe a `GamesFromJSON` osztály `getGames` függvényében. (`list.php`)** (1 pont)

1.2 **Jelenítsd meg táblázatos (<table>) formában a játékok összes adatát (title, genre, month). (`list.php`)** (2 pont)

1.3 **Implementáld a `GamesFromJSON` osztály `getGamesReleasedInMonth` függvényét. (`list.php`)** (1 pont)
A függvény célja, hogy azokkal a játékokkal térjen vissza, melyek az év egy megadott hónapjában (`$month` mező) jelentek meg.

1.4 **A `Szűrés hónapra` gomb lenyomásakor töltsd újra az oldalt és jelenítsd meg csak a kiválasztott hónapban megjelent játékokat. (`list.php`)** (1 pont)
Ehhez használd az 1.3-es feladatban implementált függvényt.

1.5 **Ha szűrés történt (a `Szűrés hónapra` gomb lenyomásával) akkor a hónapválasztón a kiválasztott hónap legyen kiválasztva az oldal újratöltése után is.(`list.php`)** (1 pont)

1.6 **Az `Új játék felvétele` gombra kattintva navigáld át a felhasználót a `creator.php` fájlra. (`list.php`)** (1 pont)
A navigációhoz PHP-t használj, NE JavaScriptet!
Segítség: a gomb egy űrlapon belül jelenik meg és submit gombnak van `name` attribútuma.

1.7 **A `creator.php` fájlban található űrlap segítségével legyen lehetőség új játék felvételére. (`creator.php`)** (3 pont)
Az űrlap várja el, hogy minden mező kitöltésre kerüljön, ha ez nem teljesül jeleníts meg egy hibaüzenetet
(nem szükséges minden input alá külön, elegendő egy közös hibaüzenet).
Amennyiben ez sikerül, tároljuk is le az új játék adatait a `games.json` fájl végére (utolsó elemként kerüljön be).
Sikeres tárolás esetén navigáljuk is vissza a felhasználót a `list.php` fájlra (ahol meg is kell jelennie a táblázat utolsó sorában az újonnan felvett játéknak).

---

+1 **Keresd meg azt a műfajt amelybe a legtöbb játék tartozik és listás (<ul>) formátumban jelenítsd meg az abba tartozó játékokat a táblázat alatt. (`list.php`)** (2 pont)


Összesen elérhető pontszám: 10 + 2

