var getXMLFile = function(path, callback){
    var request = new XMLHttpRequest();
    request.open("GET",path, true);
    request.setRequestHeader("Content-Type","text/xml");
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseXML);
        }
    }
    request.send();
};

getXMLFile("https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.xml",function(xml){
    console.log(xml);
});