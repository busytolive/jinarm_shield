var current = 0;
function update_pageinfo()
{
    //alert('xx');
    current = (current + 1) % 9;
    document.getElementById("current_dep").style.backgroundImage = "url(images/logo_" + current_dep_id +"_gray.png)";

    for (var i = 0; i < 5; i++)
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
    }
}
