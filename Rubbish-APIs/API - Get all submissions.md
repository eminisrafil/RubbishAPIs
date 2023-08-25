# Rubbish API Documentation - Get all submissions

## GET /reports/:teamID/get

This endpoint allows you to retrieve all the submission tickets that have been recorded in the Rubbish application. A "submission ticket" refers to a report about a specific instance of trash or litter, detailing information such as the type of rubbish, its location, and whether it has been picked up.

### Headers

- `Authorization`: Bearer token for authentication

### Path Parameters

- `teamID`: The ID of the team for which the submissions tickets are to be retrieved.

### Query Parameters

- `limit`: This parameter controls the maximum number of submissions tickets that the API returns in one response. Value should be an integer. Default value is 100 if not specified.

- `offset`: This parameter specifies the starting point for the collection of returned submissions tickets. Value should be an integer. It works in conjunction with `limit` for implementing pagination.

- `afterTimeStamp`: This parameter is used to retrieve submission tickets that were created after a specific time. The value should be provided as a Unix timestamp (e.g., 1686607314). It allows users to filter results to only include tickets created after the specified timestamp.

- `beforeTimeStamp`: This parameter is used to retrieve submission tickets that were created before a specific time. The value should be provided as a Unix timestamp (e.g., 1686607314). It allows users to filter results to only include tickets created before the specified timestamp.

- `userTimeStamp`: This parameter is used to retrieve submission tickets that were created or updated by a user at a specific time. The value should be provided as a Unix timestamp (e.g., 1686607314). It can be useful for tracking user activity or changes made by a specific user at a given time.

- `filterRubbishType`: This parameter allows the user to filter the submission tickets based on the type of rubbish. The value should be a string that matches one of the predefined rubbish types in the application (e.g., 'Plastic', 'Organic', 'Metal'). By using this parameter, users can focus on specific types of rubbish reports.

- `filterRubbishTypeId`: This parameter is similar to filterRubbishType but uses an ID instead of a string name. It allows users to filter the submission tickets based on the unique identifier associated with each rubbish type in the application. This can be especially useful for systems or integrations that rely on IDs rather than string names for categorization.



### Response

The response is an array of objects, each representing an submission ticket. Each object has the following keys:

| Key | Type | Description |
| --- | --- | --- |
| `afterPhotoURL` | String | The URL for the photo taken after the submission was addressed. |
| `city` | String | The city where the submission occurred. |
| `comments` | String | Any comments related to the submission. |
| `id` | String | The unique identifier of the submission ticket. |
| `identifier` | String | An additional identifier for the submission. |
| `is311` | Boolean | Indicates whether the submission has been reported to 311 (a non-emergency phone number that people can call in many cities to find information about services, make complaints, or report problems like graffiti or road damage). |
| `isBeamConnected` | Boolean | Indicates whether the submission is connected to a beam. |
| `isResolved` | Boolean | Indicates whether the submission has been resolved. |
| `isSponsored` | Boolean | Indicates whether the submission is sponsored. |
| `isValidated` | Boolean | Indicates whether the submission has been validated. |
| `lastUpdatedServerTimeStamp` | Object | The last updated timestamp from the server. Contains `_seconds` and `_nanoseconds`. |
| `lastUpdatedUserTimeStamp` | Number | The last updated timestamp from the user. |
| `lat` | String | The latitude of the location where the submission occurred. |
| `likes` | Number | The number of likes the submission has received. |
| `location` | String | The location where the submission occurred. |
| `long` | String | The longitude of the location where the submission occurred. |
| `modelVersion` | Number | The version of the model used. |
| `phoneNumber` | String | The phone number of the user who reported the submission. |
| `photoStoryID` | String | The ID of the photo story related to the submission. |
| `photoSubmissionState` | String | The state of the photo submission related to the submission. |
| `photoURL` | String | The URL for the photo taken at the submission. |
| `pickedUp` | Boolean | Indicates whether the rubbish has been picked up. |
| `postedByUserRole` | String | The role of the user who posted the submission. |
| `primaryCommunity` | String | The primary community affected by the submission. |
| `privacyLevel` | String | The privacy level of the submission. |
| `qrCodeID` | String | The ID of the QR code related to the submission. |
| `reportedAt` | Object | The timestamp when the submission was reported. Contains `_seconds` and `_nanoseconds`. |
| `reportedTimeStamp` | Number | The timestamp when the submission was reported. |
| `reporterEmail` | String | The email of the user who reported the submission. |
| `resolutionImage` | String | The URL for the image showing the resolution of the submission. |
| `resolvedTimeStamp` | Number | The timestamp when the submission was resolved. |
| `rubbishRunID` | String | The ID of the rubbish run during which the submission was reported. |
| `rubbishType` | String | The type of rubbish involved in the submission. |
| `rubbishTypeID` | String | The ID of the rubbish type involved in the submission. |
| `rubbishTypeLowerCaseSearchIdentifier` | String | The lower case identifier of the rubbish type for search purposes. |
| `serverTimeStamp` | Object | The timestamp from the server when the submission was recorded. Contains `_seconds` and `_nanoseconds`. |
| `state` | String | The state where the submission occurred. |
| `status` | String | The status of the submission. |
| `street` | String | The street where the submission occurred. |
| `subscribeToNewsletter` | Boolean | Indicates whether the reporter is subscribed to the newsletter. |
| `teamDisplayName` | String | The display name of the team. |
| `teamID` | String | The ID of the team. |
| `totalNumberOfItemsTagged` | String | The total number of items tagged in the submission. |
| `userAgent` | String | The user agent of the device from which the submission was reported. |
| `userIpAddress` | String | The IP address of the user who reported the submission. |
| `userName` | String | The name of the user who reported the submission. |
| `validationState` | String | Describes if submission has been validated by user. |

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
