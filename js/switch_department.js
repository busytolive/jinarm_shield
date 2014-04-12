function change_department()
{
    current_dep_id = (current_dep_id + 1) % 5;
    update_department(current_dep_id);
}

function update_department(current_dep_id)
{
   // alert(current_dep_id);
    document.getElementById("current_dep").style.backgroundImage = "url(images/logo_" + current_dep_id +"_gray.png)";

    for (var i = 0; i < 5; i++) // for each department('s photowall, logo, next logos)...
    {
        var objCurrentDep = document.getElementById('dep_' + i);
        var objCurrentPhotoWall = document.getElementById('dep_' + i + '_photo');
        if (i === current_dep_id) //Only display content of the current department
        {
            objCurrentDep.style.display = 'block'; 
            objCurrentPhotoWall.style.display = 'block';
        }
        else
        {
            objCurrentDep.style.display = 'none'; 
            objCurrentPhotoWall.style.display = 'none';
        }

        var objDepSmall = document.getElementById('small_logo_' + i);
        if ( i == (current_dep_id + 1) % 5 || i == (current_dep_id + 2) % 5)
        {
            objDepSmall.style.display = 'block';
        }
        else
        {
            objDepSmall.style.display = 'none';
        }
    }

}
