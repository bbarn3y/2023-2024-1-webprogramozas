<?php

print_r($_POST);

function validate($input, &$errors) {

}

?>

<form method="post">
    <div>
        <input type="radio" name="bool"
               value="true" > True
        <input type="radio" name="bool"
               value="false" > False
        <input type="radio" name="bool"
               value="other" > Other
    </div>

    

    <div>
        <input type="checkbox" name="categories[]"
               value="1" > Cat1
        <input type="checkbox" name="categories[]"
               value="2" > Cat2
        <input type="checkbox" name="categories[]"
               value="3" > Cat3
    </div>



    <div>
        <input type="text" name="email" value="<?= isset($_POST['email']) ? $_POST['email'] : '' ?>">
    </div>

    

    <button type="submit">Submit</button>

</form>