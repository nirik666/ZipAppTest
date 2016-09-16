document.addEventListener('deviceready', function(){
    /*
    var ftrans = new FileTransfer();
    ftrans.download(
        encodeURI("https://nirik666.github.io/ZipAppTest/test.html"),
    );
    */
    window.alert(cordova.file.dataDirectory);
}, false);
