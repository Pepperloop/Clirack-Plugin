window.addEventListener('message', receiveMessage, false);
function receiveMessage(event) {
    let iFrameWebchat = document.getElementById('iFrameWebchat');
    if (event.data === 'show') {
        iFrameWebchat.style.height = '390px';
        iFrameWebchat.style.width = '280px';        
    }
    else if (event.data === 'hidden') {
        iFrameWebchat.style.height = '75px';
        iFrameWebchat.style.width = '75px';        
    }
}

var Webchat = function (args) {
    var ScriptTag = document.getElementById("ClirackWebchat");

    // get domain of calling script for dev server support
    var src = ScriptTag.getAttribute('src').match(/((?:\/[^\/]+)+)(?=\/[^\/]+)/);
    this.domain = '//' + src[1];
    this.identificationKey = ScriptTag.getAttribute('webchat-identification-key');
    this.tittle = ScriptTag.getAttribute('webchat-tittle');

    this.themeColor = ScriptTag.getAttribute('webchat-theme-color');
    this.fontColor = ScriptTag.getAttribute('webchat-font-color');

    this.backgroundColor = ScriptTag.getAttribute('webchat-background-color');
    this.fontColorNames = ScriptTag.getAttribute('webchat-font-color-names');

    this.fontColorReciber = ScriptTag.getAttribute('webchat-font-color-reciber');
    this.fontColorSender = ScriptTag.getAttribute('webchat-font-color-sender');
    this.backgroundReciber = ScriptTag.getAttribute('webchat-background-reciber');
    this.backgroundSender = ScriptTag.getAttribute('webchat-background-sender');
    this.openChat = ScriptTag.getAttribute('webchat-open-chat');
    this.closeChat = ScriptTag.getAttribute('webchat-close-chat');

    this.openToggle = ScriptTag.getAttribute('webchat-open-toggle');
    this.closeToggle = ScriptTag.getAttribute('webchat-close-toggle');

    this.animationVelocity  = ScriptTag.getAttribute('webchat-animation-velocity');

    this.askName  = ScriptTag.getAttribute('webchat-ask-name');
    this.askNameError = ScriptTag.getAttribute('webchat-ask-name-error');
    this.askEmail  = ScriptTag.getAttribute('webchat-ask-email');
    this.askEmailError = ScriptTag.getAttribute('webchat-ask-email-error');

    this.referer = window.location.href;
};

Webchat.prototype.iframe = {};
Webchat.prototype.iframe.id = 'iFrameWebchat';
Webchat.prototype.iframe.src = '/index.html';
Webchat.prototype.iframe.allowtransparency = true;

Webchat.prototype.iframe.style = {}
Webchat.prototype.iframe.style.zIndex = '99999999';
Webchat.prototype.iframe.style.position = 'fixed';
Webchat.prototype.iframe.style.right = '0px';
Webchat.prototype.iframe.style.bottom = '0px';
Webchat.prototype.iframe.style.width = '75px';
Webchat.prototype.iframe.style.height = '75px';
Webchat.prototype.iframe.style.border = 'none';
Webchat.prototype.iframe.style.overflow = 'hidden';



Webchat.prototype.load = function () {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('id', clirack_webchat.iframe.id);
    var src = clirack_webchat.domain + clirack_webchat.iframe.src;
    var identificationKey = '?identificationKey=' + ((!!clirack_webchat.identificationKey) ? clirack_webchat.identificationKey : '');
    var tittle = '&tittle=' + ((!!clirack_webchat.tittle) ? encodeURIComponent(clirack_webchat.tittle) : '');

    var themeColor = '&themeColor=' + ((!!clirack_webchat.themeColor) ? encodeURIComponent(clirack_webchat.themeColor) : '');
    var fontColor = '&fontColor=' + ((!!clirack_webchat.fontColor) ? encodeURIComponent(clirack_webchat.fontColor) : '');
    
    var fontColorNames = '&fontColorNames=' + ((!!clirack_webchat.fontColorNames) ? encodeURIComponent(clirack_webchat.fontColorNames) : '');
    var backgroundColor = '&backgroundColor=' + ((!!clirack_webchat.backgroundColor) ? encodeURIComponent(clirack_webchat.backgroundColor) : '');
    var fontColorReciber = '&fontColorReciber=' + ((!!clirack_webchat.fontColorReciber) ? encodeURIComponent(clirack_webchat.fontColorReciber) : '');
    var fontColorSender = '&fontColorSender=' + ((!!clirack_webchat.fontColorSender) ? encodeURIComponent(clirack_webchat.fontColorSender) : '');
    var backgroundReciber = '&backgroundReciber=' + ((!!clirack_webchat.backgroundReciber) ? encodeURIComponent(clirack_webchat.backgroundReciber) : '');
    var backgroundSender = '&backgroundSender=' + ((!!clirack_webchat.backgroundSender) ? encodeURIComponent(clirack_webchat.backgroundSender) : '');

    
    var openChat = '&openChat=' + ((!!clirack_webchat.openChat) ? encodeURIComponent(clirack_webchat.openChat) : '');
    var closeChat = '&closeChat=' + ((!!clirack_webchat.closeChat) ? encodeURIComponent(clirack_webchat.closeChat) : '');
    var openToggle = '&openToggle=' + ((!!clirack_webchat.openToggle) ? encodeURIComponent(clirack_webchat.openToggle) : '');
    var closeToggle = '&closeToggle=' + ((!!clirack_webchat.closeToggle) ? encodeURIComponent(clirack_webchat.closeToggle) : '');
    var closeToggle = '&closeToggle=' + ((!!clirack_webchat.closeToggle) ? encodeURIComponent(clirack_webchat.closeToggle) : '');
    var animationVelocity = '&animationVelocity=' + ((!!clirack_webchat.animationVelocity) ? encodeURIComponent(clirack_webchat.animationVelocity) : '');
    
    var askName = '&askName=' + ((!!clirack_webchat.askName) ? encodeURIComponent(clirack_webchat.askName) : '');

    var askNameError = '&askNameError=' + ((!!clirack_webchat.askNameError) ? encodeURIComponent(clirack_webchat.askNameError) : '');
    var askEmail = '&askEmail=' + ((!!clirack_webchat.askEmail) ? encodeURIComponent(clirack_webchat.askEmail) : '');
    var askEmailError = '&askEmailError=' + ((!!clirack_webchat.askEmailError) ? encodeURIComponent(clirack_webchat.askEmailError) : '');

    
    var referer = '&referer=' + ((!!clirack_webchat.referer) ? encodeURIComponent(clirack_webchat.referer) : '');
    iframe.setAttribute('src', src + identificationKey + tittle +  
    themeColor + fontColor + fontColorNames + backgroundColor + fontColorSender + fontColorReciber + backgroundReciber + backgroundSender +
    openChat + closeChat + openToggle + closeToggle + animationVelocity +
    askName + askEmail + askEmailError +
    referer);
    iframe.setAttribute('allowtransparency', 'true');

    var styleiFrame = iframe.style;
    styleiFrame.zIndex = clirack_webchat.iframe.style.zIndex;
    styleiFrame.position = clirack_webchat.iframe.style.position;
    styleiFrame.right = clirack_webchat.iframe.style.right;
    styleiFrame.bottom = clirack_webchat.iframe.style.bottom;
    styleiFrame.width = clirack_webchat.iframe.style.width;
    styleiFrame.height = clirack_webchat.iframe.style.height;
    styleiFrame.border = clirack_webchat.iframe.style.border;

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(iframe);


};

var clirack_webchat = new Webchat();
clirack_webchat.load();