function getParamByName(name)
{
    var parArr = window.location.href.split("#");//remove anchor part(for ex: #firstpage/1)
    parArr = parArr[0].split("?")[1].split("&");
    for (var i = 0; i < parArr.length; i++)
    {
        var pair = parArr[i].split("=");
        if (pair[0] == name)
            return pair[1];
    }

    return null;
}
