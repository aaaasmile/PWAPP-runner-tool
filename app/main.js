// TODO(Caterpillar): Check usage of app.runtime.onLaunched.addListener.
chrome.app.runtime.onLaunched.addListener(function () {
// TODO(Caterpillar): Check usage of app.window.create.
    console.log('onLaunched.addListener is called')
    chrome.app.window.create('index.html', {
        id: "RunCorsaTool",
        'outerBounds': {
            'width': 1200,
            'height': 800
        }
    });
});