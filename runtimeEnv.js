/* 


The runtime environments of a browser and Node.js differ significantly in terms of their purpose, available APIs, and the way they execute JavaScript code. Here are some key differences:
1. Purpose

    Browser: The primary purpose is to render web pages, handle user interactions, and manage the Document Object Model (DOM). It provides an environment for executing client-side JavaScript.
    Node.js: Designed for server-side development, it allows JavaScript to be used for building scalable network applications. It provides server-side APIs for file system operations, networking, and more.

2. Global Objects

    Browser: The global object is window. It represents the browser window and provides access to the DOM, Web APIs (like fetch, localStorage, and alert), and browser-specific features.
    Node.js: The global object is global. It provides access to Node.js-specific features like file system modules (fs), process information (process), and other built-in modules.

3. Available APIs

    Browser: Provides APIs related to the web page and user interactions, such as:
        document (DOM manipulation)
        localStorage (client-side storage)
        fetch (network requests)
        alert, confirm, prompt (dialog boxes)
        setTimeout, setInterval (timers)
    Node.js: Provides APIs for server-side operations, such as:
        fs (file system operations)
        http (creating HTTP servers)
        net (networking)
        os (operating system information)
        process (process information and control)
        require (module loading)



    Here are some common API names available in both the browser and Node.js environments:

    setTimeout
    clearTimeout
    setInterval
    clearInterval
    Promise
    console
    JSON
    Date
    Math
    parseInt
    parseFloat
    isNaN
    isFinite
    encodeURI
    decodeURI
    encodeURIComponent
    decodeURIComponent




    setInterval : return an id in the form of a number in chrome v8 engine 
    setInterval : return an object in the form of a number in nodejs engine

    In different runtimes the same function can return different types of values but although the working is same.


    Nodejs
    Welcome to Node.js v18.17.0.
    Type ".help" for more information.
    > const x = setInterval(function(){console.log("hello")},10); clearInterval(x);
    undefined
    > typeof x
    'object'
    > x
    Timeout {
    _idleTimeout: -1,
    _idlePrev: null,
    _idleNext: null,
    _idleStart: 12440,
    _onTimeout: null,
    _timerArgs: undefined,
    _repeat: 10,
    _destroyed: true,
    [Symbol(refed)]: true,
    [Symbol(kHasPrimitive)]: false,
    [Symbol(asyncId)]: 102,
    [Symbol(triggerId)]: 6

*/