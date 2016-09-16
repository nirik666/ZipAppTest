document.addEventListener('deviceready', function(){
    var ftrans = new FileTransfer();
    ftrans.download(
        encodeURI("https://nirik666.github.io/ZipAppTest/test.zip"),
        cordova.file.dataDirectory + "test.zip",
        function(){
            window.alert("DL success");
            zip.unzip(cordova.file.dataDirectory + "test.zip", cordova.file.dataDirectory, function(res){
                window.alert(res);
                window.location.href = cordova.file.dataDirectory + "test/index.html";
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
