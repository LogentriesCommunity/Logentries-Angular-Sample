# Logentries Angular Sample

To build the sample:

* Install node.js version => 0.12
* Clone this repository
* cd into the cloned directory
* Run npm install
* Replace the token in app/LogEntriesFactory.js with your Logentries token (see below)
* Start the node server with
```
npm run-script start
```
or
```
node server.js
```
* Open http://localhost:3000 in a web browser


#### Connecting the sample to you Logentries account

* Edit the _app/LogEntriesFactory.js_ file.
* Replace the "1234_fake_token" with your token and the links will post correctly to your Logentries.com endpoint.
```
opts.token = '1234_fake_token';
```
becomes
```
opts.token = 'your token';
```
