function update_photowall(dep, photoId)
{
    var descArr = [
        ["<span class=\"highlight\"> 北京百年变迁 | </span> 自1860年以来，北京多发战事，但古城均未遭到大的破坏，几次还幸免于战火。1949年1月31日，北平和平解放。9月，北平更名为北京，10月，北京成为新中国的都城。围绕行政中心区的设置、城墙的存废等问题，梁思成等专家展开激烈争论，最终却没能改变古城的命运",
        "<span class=\"highlight\">北京百年变迁 | </span> 明朝北京城格局图",
        "<span class=\"highlight\">北京百年变迁 | </span> 清末北京的四合院和城墙",
        "<span class=\"highlight\">北京百年变迁 | </span> 光绪二十五年的北京街景",
        "<span class=\"highlight\">北京百年变迁 | </span> 清末前门大街",
        "<span class=\"highlight\">北京百年变迁 | </span> 北京古城墙已有几百年的历史，始创于元代，建成于明代，主要用于军事防御。古城墙呈“凸”字形，城墙周长24公里，墙基宽24米，墙高8米，全部为板筑的夯土墙。图为清末北京城墙。",
        "<span class=\"highlight\">北京百年变迁 | </span> 1900年，八国联军侵入北京。在近代以来的战争中，八国联军对北京古城的破坏最大，被毁的多为箭楼、城楼。图为1900年驻扎在城墙上的俄军士兵",
        "<span class=\"highlight\">北京百年变迁 | </span> 在八国联军进入北京的过程中，正阳门箭楼和城楼、崇文门箭楼和朝阳门箭楼被毁。他们在天坛圜丘架炮轰击正阳门，箭楼被毁。印度兵在正阳门城楼内取火，引发火灾，城楼被毁。图为被毁坏后的正阳门箭楼",
        "<span class=\"highlight\">北京百年变迁 | </span> 正阳门城楼和箭楼、朝阳门箭楼于1903年修复。图为修复后的正阳门箭楼，上面还挂上了钟表。北京旧城有“内九外七皇城四”之说，指得是内城九门、外城七门以及皇城四门"]
    ];
   var descObj = document.getElementById('photo_desc');
   descObj.innerHTML = descArr[dep][photoId];
   var pageInfoObj = document.getElementById('pageinfo');
   pageInfoObj.innerHTML = (parseInt(photoId) + 1) + " / 9";
}

function switch_photo(anchorLink, index, slideAnchor, photoId)
{
    update_photowall(dep_id, photoId);
}
