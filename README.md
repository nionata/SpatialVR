# SpatialVR - SwampHacks 2018
## VR experience and fullstack web app for helping people with spatial hearing disorders
### Pize Winning Project: Home Depot - Entrepreneurial Spirit

* Checkout out our project's devpost: https://swamphacks-iv.devpost.com/
* This is the web app, the VR experience can be found here: https://github.com/sourabh2k15/spatialHearing

To run the client and server on your local device:
1. Clone this repo
2. Run 'npm install'
3. Run 'npm run start-dev'

When you run the above script, it will start up both a client react server and a node server.
* Client server: localhost:3000
* Node server: localhost:3001
  * The RESTful api will run off this server at: localhost:3001/api/results
    * You can hit these endpoints with GET and POST requests
  * There is also a socket server running at: localhost:8000
