function sendData(data, endpoint) {
    var xhr = new XMLHttpRequest();
    var stringifiedData = JSON.stringify(data);

    xhr.open('POST', endpoint);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(stringifiedData);

    xhr.onload = function () {
        if (xhr.status.toString()[0] !== '2') {
            console.error(xhr.status + '> ' + xhr.statusText);
        }
    };
}
