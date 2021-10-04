const express = require('express')
const app = express();

const headers = {
    'Content-Security-Policy': [
        "default-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "script-src 'self'",
        // http://localhost:*/ required for live reload
        "script-src-elem 'self' http://localhost:*/",
        "style-src 'self'",
        "style-src-elem 'self' https://fonts.googleapis.com/",
        "font-src 'self' https://fonts.gstatic.com/",
        // wss://localhost:*/ required for live reload
        "connect-src 'self' ws://localhost:*/"
    ].join(';'),
    "Feature-Policy": [
        "accelerometer 'none'",
        "ambient-light-sensor 'none'",
        "autoplay 'none'",
        "battery 'none'",
        "camera 'none'",
        "display-capture 'none'",
        "document-domain 'none'",
        "encrypted-media 'none'",
        "fullscreen 'none'",
        "geolocation 'none'",
        "gyroscope 'none'",
        "legacy-image-formats 'none'",
        "magnetometer 'none'",
        "microphone 'none'",
        "midi 'none'",
        "oversized-images 'none'",
        "payment 'none'",
        "picture-in-picture 'none'",
        "publickey-credentials 'none'",
        "sync-xhr 'none'",
        "unoptimized-images 'none'",
        "unsized-media 'none'",
        "usb 'none'",
        "vibrate 'none'",
        "vr 'none'",
        "wake-lock 'none'",
        "xr-spatial-tracking 'none'",
    ].join(';'),
    "Referrer-Policy": "no-referrer, strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "sameorigin",
    "X-XSS-Protection": "1; mode=block"
}

function setHeaders(res, path, stat) {
    Object.keys(headers).forEach((key) => {
        res.set(key, headers[key]);
    });
}

app.use(express.static('public', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html', 'htm'],
    fallthrough: true,
    immutable: false,
    index: 'index.html',
    lastModified: true,
    maxAge: 0,
    redirect: true,
    setHeaders
}));
app.get('/*', function (req, res) {
    res.sendFile( process.cwd() + '/public/index.html')
});
app.listen(4200);