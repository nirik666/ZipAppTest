document.addEventListener('deviceready', function(){
    var ftrans = new FileTransfer();
    ftrans.download(
        encodeURI("https://nirik666.github.io/ZipAppTest/test.html"),
        cordova.file.dataDirectory + "test.html",
        function(){
            window.alert("DL success");
            window.location.href = cordova.file.dataDirectory + "test.html";
        },
        function(){
            window.alert("DL error");
        }
    );
}, false);
