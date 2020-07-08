to run locally:
npm install
node index.js

to build the docker container:
docker build -t bridge-simulator .


for testing in postman:
POST http://localhost:8082
body:
{
        "time": "2020-06-15T15:14:31.656Z",
        "type": "message-received",
        "to": "+19544141212",
        "description": "Incoming message received",
        "message": {
            "id": "f1708c12-e76e-40f8-9958-db3dbd3a957e",
            "owner": "+19544141212",
            "applicationId": "5989b095-941d-4edd-82de-64a37c535025",
            "time": "2020-06-15T15:14:31.620Z",
            "segmentCount": 1,
            "direction": "in",
            "to": [
                "+19544141212"
            ],
            "from": "+19544141299",
            "text": "Outbound received. Testing inbound"
        }
    }
