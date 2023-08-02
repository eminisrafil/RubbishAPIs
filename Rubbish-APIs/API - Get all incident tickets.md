# Rubbish API Documentation - Get all incident tickets

## GET /reports/:teamID/get

This endpoint allows you to retrieve all the incident tickets that have been recorded in the Rubbish application. An "incident ticket" refers to a report about a specific instance of trash or litter, detailing information such as the type of rubbish, its location, and whether it has been picked up.

### Headers

- `Authorization`: Bearer token for authentication

### Path Parameters

- `teamID`: The ID of the team for which the incident tickets are to be retrieved.

### Query Parameters

- `limit`: This parameter controls the maximum number of incident tickets that the API returns in one response. Value should be an integer. Default value is 50 if not specified.

- `offset`: This parameter specifies the starting point for the collection of returned incident tickets. Value should be an integer. It works in conjunction with `limit` for implementing pagination.

- `afterTimeStamp`: This parameter is used to get incident tickets that were created after a specific time. The value should be in a standardized date-time format such as ISO 8601 (e.g., 'YYYY-MM-DDTHH:MM:SSZ').

- `beforeTimeStamp`: This parameter is used to get incident tickets that were created before a specific time. The value should be in a standardized date-time format such as ISO 8601 (e.g., 'YYYY-MM-DDTHH:MM:SSZ').



### Response

The response is an array of objects, each representing an incident ticket. Each object has the following keys:

| Key | Type | Description |
| --- | --- | --- |
| `afterPhotoURL` | String | The URL for the photo taken after the incident was addressed. |
| `city` | String | The city where the incident occurred. |
| `comments` | String | Any comments related to the incident. |
| `id` | String | The unique identifier of the incident ticket. |
| `identifier` | String | An additional identifier for the incident. |
| `is311` | Boolean | Indicates whether the incident has been reported to 311 (a non-emergency phone number that people can call in many cities to find information about services, make complaints, or report problems like graffiti or road damage). |
| `isBeamConnected` | Boolean | Indicates whether the incident is connected to a beam. |
| `isResolved` | Boolean | Indicates whether the incident has been resolved. |
| `isSponsored` | Boolean | Indicates whether the incident is sponsored. |
| `isValidated` | Boolean | Indicates whether the incident has been validated. |
| `lastUpdatedServerTimeStamp` | Object | The last updated timestamp from the server. Contains `_seconds` and `_nanoseconds`. |
| `lastUpdatedUserTimeStamp` | Number | The last updated timestamp from the user. |
| `lat` | String | The latitude of the location where the incident occurred. |
| `likes` | Number | The number of likes the incident has received. |
| `location` | String | The location where the incident occurred. |
| `long` | String | The longitude of the location where the incident occurred. |
| `modelVersion` | Number | The version of the model used. |
| `phoneNumber` | String | The phone number of the user who reported the incident. |
| `photoStoryID` | String | The ID of the photo story related to the incident. |
| `photoSubmissionState` | String | The state of the photo submission related to the incident. |
| `photoURL` | String | The URL for the photo taken at the incident. |
| `pickedUp` | Boolean | Indicates whether the rubbish has been picked up. |
| `postedByUserRole` | String | The role of the user who posted the incident. |
| `primaryCommunity` | String | The primary community affected by the incident. |
| `privacyLevel` | String | The privacy level of the incident. |
| `qrCodeID` | String | The ID of the QR code related to the incident. |
| `reportedAt` | Object | The timestamp when the incident was reported. Contains `_seconds` and `_nanoseconds`. |
| `reportedTimeStamp` | Number | The timestamp when the incident was reported. |
| `reporterEmail` | String | The email of the user who reported the incident. |
| `resolutionImage` | String | The URL for the image showing the resolution of the incident. |
| `resolvedTimeStamp` | Number | The timestamp when the incident was resolved. |
| `rubbishRunID` | String | The ID of the rubbish run during which the incident was reported. |
| `rubbishType` | String | The type of rubbish involved in the incident. |
| `rubbishTypeID` | String | The ID of the rubbish type involved in the incident. |
| `rubbishTypeLowerCaseSearchIdentifier` | String | The lower case identifier of the rubbish type for search purposes. |
| `serverTimeStamp` | Object | The timestamp from the server when the incident was recorded. Contains `_seconds` and `_nanoseconds`. |
| `state` | String | The state where the incident occurred. |
| `status` | String | The status of the incident. |
| `street` | String | The street where the incident occurred. |
| `subscribeToNewsletter` | Boolean | Indicates whether the reporter is subscribed to the newsletter. |
| `teamDisplayName` | String | The display name of the team. |
| `teamID` | String | The ID of the team. |
| `totalNumberOfItemsTagged` | String | The total number of items tagged in the incident. |
| `userAgent` | String | The user agent of the device from which the incident was reported. |
| `userIpAddress` | String | The IP address of the user who reported the incident. |
| `userName` | String | The name of the user who reported the incident. |
| `validatedState` | String | Describes if submission has been validated by user. |

### Example Requests

Curl Request:
```bash
curl --location 'https://qr-dev.rubbish.love/public/api/v1/reports/<teamId>/get' \
--header 'Authorization: Bearer <token>'
```

JavaScript Fetch Request:
```bash
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://qr-dev.rubbish.love/public/api/v1/reports/<teamId>/get", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

### Example Response

```bash
[
    {
        "afterPhotoURL": "https://storage.googleapis.com/rubbish-ee2d0.appspot.com/StoryPhotos/YC0k1CPyN0Iz3wZvYlgy_1",
        "city": "",
        "comments": "",
        "id": "YC0k1CPyN0Iz3wZvYlgy",
        "identifier": "",
        "is311": false,
        "isBeamConnected": false,
        "isResolved": true,
        "isSponsored": false,
        "isValidated": false,
        "lastUpdatedServerTimeStamp": {
            "_seconds": 1686610141,
            "_nanoseconds": 914000000
        },
        "lastUpdatedUserTimeStamp": 1686610140.976,
        "lat": "37.7945798",
        "likes": 0,
        "location": "Ferry Terminal Plaza, San Francisco, CA, USA",
        "long": "-122.3924451",
        "modelVersion": 420,
        "phoneNumber": "",
        "photoStoryID": "YC0k1CPyN0Iz3wZvYlgy",
        "photoSubmissionState": "awaitingReview",
        "photoURL": "https://storage.googleapis.com/rubbish-ee2d0.appspot.com/StoryPhotos/YC0k1CPyN0Iz3wZvYlgy_2",
        "pickedUp": true,
        "postedByUserRole": "genericWeb",
        "primaryCommunity": "unknown",
        "privacyLevel": "privacyTeam",
        "qrCodeID": "NONE",
        "reportedAt": {
            "_seconds": 1686610141,
            "_nanoseconds": 914000000
        },
        "reportedTimeStamp": 1686610141.914,
        "reporterEmail": "",
        "resolutionImage": "https://storage.googleapis.com/rubbish-ee2d0.appspot.com/StoryPhotos/YC0k1CPyN0Iz3wZvYlgy_1",
        "resolvedTimeStamp": 1686610141.914,
        "rubbishRunID": "",
        "rubbishType": "Plastic",
        "rubbishTypeID": "xb0dqzTEGBjWTK2kyud2",
        "rubbishTypeLowerCaseSearchIdentifier": "plastic",
        "serverTimeStamp": {
            "_seconds": 1686610141,
            "_nanoseconds": 914000000
        },
        "state": "",
        "status": "Logged",
        "street": "Ferry Terminal Plaza, San Francisco, CA, USA",
        "subscribeToNewsletter": false,
        "teamDisplayName": "June6thTest",
        "teamID": "SkeC9OksucKoAWGpnEp8",
        "totalNumberOfItemsTagged": "1",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "userIpAddress": "12.94.170.82,74.125.209.44",
        "userName": "",
        "userProfilePhotoURL": null,
        "userTimeStamp": 1686610140.976,
        "validationState": "awaitingReview"
    },

]


```
