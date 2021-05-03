chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = new URL(tabs[0].url);
    document.getElementById("dir").value = url.pathname;
    let dump = document.getElementById("dump")
    dump.addEventListener("click", ()=>{
      const Http = new XMLHttpRequest();
      Http.open("post", 'http://127.0.0.1:5000/dump')
      Http.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      data = JSON.stringify({
        line : url.pathname
      })
      Http.send(data)
      Http.onreadystatechange = (e) => {
        document.getElementById("dir").value = "";
      }
    })
});

