document.addEventListener('deviceready', function(){
    var ftrans = new FileTransfer();
    ftrans.download(
        encodeURI("https://nirik666.github.io/ZipAppTest/test.zip"),
        cordova.file.dataDirectory + "test.zip",
        function(){
            window.alert("DL success");
            zip.unzip(cordova.file.dataDirectory + "test.zip", cordova.file.dataDirectory, function(){
                window.location.href = cordova.file.dataDirectory + "test/";
            });
        },
        function(){
            window.alert("DL error");
        },
        false,
        {
            headers: {
                "Cache-Control": "no-cache"
            }
        }
    );
}, false);
