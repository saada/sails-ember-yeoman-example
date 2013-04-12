# Sails + Ember + Yeoman Example
#### I am aware this is sort of a hack, but it will do until another solution comes up:

    sails new YoSails --template=jade
    cd YoSails

Now make a backup of the sails default JSON dependencies, in my case:

    "dependencies": {
        "sails": "0.8.9"
    },
    "scripts": {
        "start": "node app.js",
        "debug": "node debug app.js"
    },
    "main": "app.js",

Now install Ember generator (and Yeoman of course):

    npm install generator-ember
    yo ember:all

Overwrite everything, then merge both package.json as shown in the example.

After that:

    npm install && bower install

Modify the grunt file's connect PORT to Sails's port:
    
    ...
    connect: {
            options: {
                port: 1337,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
    ...        
Finally, start Yeoman (Grunt) in a terminal:

    grunt server
    
And lift your sails!!

    sails lift
