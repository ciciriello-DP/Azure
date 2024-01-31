const injectScript = require('injectScript');
const callInWindow = require('callInWindow');
const log = require('logToConsole');
const queryPermission = require('queryPermission');

const postScriptUrl = 'https://myPostScriptUrl'; //provide your script url
const endpoint = 'https://myEndpoint'; //provide your endpoint url

//provide your data; data object contains all properties from fields tab of the GTM template
const gtmData = {
    sessionId: data.sessionId,
    name: data.name,
    description: data.description
};

//add appropriate permission to inject script from 'https://myPostScriptUrl' url in GTM template's privileges tab
if (queryPermission('inject_script', postScriptUrl)) {
    injectScript(postScriptUrl, onSuccess, data.gtmOnFailure, postScriptUrl);
} else {
    log('postScriptUrl: Script load failed due to permissions mismatch.');
    data.gtmOnFailure();
}

function onSuccess() {
    //add appropriate permission to call `sendData` variable in GTM template's privileges tab
    callInWindow('sendData', gtmData, endpoint);
    data.gtmOnSuccess();
}
