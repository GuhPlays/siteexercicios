function random(){
    //make a collection with all td elements
    var items = document.getElementsByTagName("td");

    for( i=0; i < items.length; i++ ){
        //that delete old backgroundColor style 
        items[i].style.backgroundColor = '';
    };
    //choose a random id between 1 and 9
    var random_id = Math.floor((Math.random()*16)+1);
    //aply the red style color to this random element
    document.getElementById(random_id).style.backgroundColor = "#B5E48C";
    document.getElementById(random_id).style.transition = "all 0.6s";

};