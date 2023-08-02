# Rubbish API Documentation - Get all runs

## GET /runs/:teamID/get

This endpoint allows you to retrieve all the runs that have been recorded in the Rubbish application. In the context of this application, a "run" refers to a specific time period during which a user activates tracking on their phone through the Rubbish app and actively captures pictures of trash along their route. The data collected from each run includes precise latitude and longitude information that identifies the user's exact location, along with the pictures taken during the run.

### Headers

- `Authorization`: Bearer token for authentication

### Path Parameters

- `teamID`: The ID of the team for which the runs are to be retrieved.

### Query Parameters

- `limit`: This parameter controls the maximum number of incident tickets that the API returns in one response. Value should be an integer. Default value is 50 if not specified.

- `offset`: This parameter specifies the starting point for the collection of returned incident tickets. Value should be an integer. It works in conjunction with `limit` for implementing pagination.

- `afterTimeStamp`: This parameter is used to get incident tickets that were created after a specific time. The value should be in a standardized date-time format such as ISO 8601 (e.g., 'YYYY-MM-DDTHH:MM:SSZ').

- `beforeTimeStamp`: This parameter is used to get incident tickets that were created before a specific time. The value should be in a standardized date-time format such as ISO 8601 (e.g., 'YYYY-MM-DDTHH:MM:SSZ').


### Response

The response is an array of objects, each representing a run. Each object has the following keys:

| Key | Type | Description |
| --- | --- | --- |
| `creationTimeStamp` | Number | The timestamp of when the run was created. |
| `distance` | Number | The distance covered in the run. |
| `endLat` | Number | The latitude of the end location of the run. |
| `endLong` | Number | The longitude of the end location of the run. |
| `endStreet` | String | The street of the end location of the run. |
| `id` | String | The unique identifier of the run. |
| `isCurrentlyInRubbishRun` | Boolean | Indicates whether the run is currently in progress. |
| `isSponsored` | Boolean | Indicates whether the run is sponsored. |
| `isValidated` | Boolean | Indicates whether the run is validated. |
| `lastUpdatedServerTimeStamp` | Object | The last updated timestamp from the server. Contains `_seconds` and `_nanoseconds`. |
| `lastUpdatedUserTimeStamp` | Number | The last updated timestamp from the user. |
| `litterNotPickedUpStats` | Object | Statistics about the litter not picked up during the run. `breakdown` contains detailed stats. |
| `litterPickedUpStats` | Object | Statistics about the litter picked up during the run. `breakdown` contains detailed stats. |
| `modelVersion` | Number | The version of the model used. |
| `numberOfItemsNotPickedUp` | Number | The number of items not picked up during the run. |
| `numberOfItemsPickedUp` | Number | The number of items picked up during the run. |
| `numberOfItemsTagged` | Number | The number of items tagged during the run. |
| `numberOfPictures` | Number | The number of pictures taken during the run. |
| `numberOfPicturesNotPickedUp` | Number | The number of pictures of items not picked up. |
| `numberOfPicturesPickedUp` | Number | The number of pictures of items picked up. |
| `photoStoryIDs` | Array | An array of IDs for the photo stories related to the run. |
| `privacyLevel` | String | The privacy level of the run. |
| `rubbishRunMode` | String | The mode of the rubbish run. |
| `rubbishRunStoryModelID` | String | The ID of the rubbish run story model. |
| `serverTimeStamp` | Object | The timestamp from the server. Contains `_seconds` and `_nanoseconds`. |
| `shouldRecalculateRubbishRunStats` | Boolean | Indicates whether the rubbish run stats should be recalculated. |
| `startLat` | Number | The latitude of the start location of the run. |
| `startLong` | Number | The longitude of the start location of the run. |
| `startStreet` | String | The street of the start location of the run. |
| `stepCount` | Number | The number of steps taken during the run. |
| `teamDisplayName` | String | The display name of the team. |
| `teamID` | String | The ID of the team. |
| `thumbnailImages` | Array | An array of URLs for the thumbnail images related to the run. |
| `totalRubbishRunTime` | Number | The total time of the rubbish run. |
| `totalRubbishRuns` | Number | The total number of rubbish runs. |
| `userFirstName` | String | The first name of the user who performed the run. |
| `userID` | String | The ID of the user who performed the run. |
| `userLastName` | String | The last name of the user who performed the run. |
| `userName` | String | The username of the user who performed the run. |
| `userRoles` | Array | An array of roles assigned to the user. |
| `userTimeStampEnd` | Number | The timestamp of when the user ended the run. |
| `userURI` | String | The URI of the user who performed the run. |

### Example Requests

Curl Request:
```bash
curl --location 'https://qr-dev.rubbish.love/public/api/v1/runs/<teamId>/get' \
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

fetch("https://qr-dev.rubbish.love/public/api/v1/runs/<teamId>/get", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

### Example Response

```bash
[
  {
    creationTimeStamp: 1686607312.379514,
    distance: 282.5671775141257,
    endLat: 37.7962575950519,
    endLong: -122.39399789911693,
    endStreet: "(37.7963, -122.3940)",
    id: "yhVU9Z619mj9AEkBoB6M",
    isCurrentlyInRubbishRun: false,
    isSponsored: false,
    isValidated: false,
    lastUpdatedServerTimeStamp: {
      _seconds: 1686608067,
      _nanoseconds: 182000000,
    },
    lastUpdatedUserTimeStamp: 1686608067.0051498,
    litterNotPickedUpStats: { breakdown: {} },
    litterPickedUpStats: {
      breakdown: { xb0dqzTEGBjWTK2kyud2: 1, Z9DoROaK88N5bAqqN21k: 1 },
    },
    modelVersion: 205,
    numberOfItemsNotPickedUp: 0,
    numberOfItemsPickedUp: 2,
    numberOfItemsTagged: 2,
    numberOfPictures: 2,
    numberOfPicturesNotPickedUp: 0,
    numberOfPicturesPickedUp: 2,
    photoStoryIDs: ["nv1WJqoYTxiE2YX5UJ7F", "wByFhK0rudjF9B60ozmv"],
    privacyLevel: "privacyOpen",
    rubbishRunMode: "completed",
    rubbishRunStoryModelID: "yhVU9Z619mj9AEkBoB6M",
    serverTimeStamp: { _seconds: 1686607312, _nanoseconds: 422000000 },
    shouldRecalculateRubbishRunStats: false,
    startLat: 37.796300345846255,
    startLong: -122.39399653750789,
    startStreet: "Ferry Building",
    stepCount: 0,
    teamDisplayName: "June6thTest",
    teamID: "SkeC9OksucKoAWGpnEp8",
    thumbnailImages: [
      "https://firebasestorage.googleapis.com/v0/b/rubbish-ee2d0.appspot.com/o/StreetRubbishPhotos%2Fthumbnails%2Fnv1WJqoYTxiE2YX5UJ7F_138x300.jpg?alt=media",
      "https://firebasestorage.googleapis.com/v0/b/rubbish-ee2d0.appspot.com/o/StreetRubbishPhotos%2Fthumbnails%2FwByFhK0rudjF9B60ozmv_138x300.jpg?alt=media",
    ],
    totalRubbishRunTime: 753,
    totalRubbishRuns: 1,
    userFirstName: "Guest",
    userID: "AaUDLJpSc7QtLIgrGOuL9THwnIc2",
    userLastName: "User",
    userName: "guest_wnIc2",
    userRoles: ["guest"],
    userTimeStampEnd: 1686608065.419043,
    userURI: "/User/AaUDLJpSc7QtLIgrGOuL9THwnIc2",
  },
  {
    creationTimeStamp: 1686607234.177617,
    distance: 17.088419334262316,
    endLat: 37.796288160205734,
    endLong: -122.39397820229338,
    endStreet: "(37.7963, -122.3940)",
    id: "jtEpGEA15EcyX3XH3Kpe",
    isCurrentlyInRubbishRun: false,
    isSponsored: false,
    isValidated: false,
    lastUpdatedServerTimeStamp: {
      _seconds: 1686607308,
      _nanoseconds: 655000000,
    },
    lastUpdatedUserTimeStamp: 1686607308.476722,
    litterNotPickedUpStats: { breakdown: {} },
    litterPickedUpStats: { breakdown: {} },
    modelVersion: 205,
    numberOfItemsNotPickedUp: 0,
    numberOfItemsPickedUp: 0,
    numberOfItemsTagged: 0,
    numberOfPictures: 0,
    numberOfPicturesNotPickedUp: 0,
    numberOfPicturesPickedUp: 0,
    photoStoryIDs: [],
    privacyLevel: "privacyOpen",
    rubbishRunMode: "timedout",
    rubbishRunStoryModelID: "jtEpGEA15EcyX3XH3Kpe",
    serverTimeStamp: { _seconds: 1686607234, _nanoseconds: 225000000 },
    shouldRecalculateRubbishRunStats: false,
    startLat: 37.79627147835769,
    startLong: -122.39396475878503,
    startStreet: "Ferry Building",
    stepCount: 0,
    teamDisplayName: "June6thTest",
    teamID: "SkeC9OksucKoAWGpnEp8",
    thumbnailImages: [],
    totalRubbishRunTime: 60,
    totalRubbishRuns: 1,
    userFirstName: "Guest",
    userID: "AaUDLJpSc7QtLIgrGOuL9THwnIc2",
    userLastName: "User",
    userName: "guest_wnIc2",
    userRoles: ["guest"],
    userTimeStampEnd: 1686607294.202327,
    userURI: "/User/AaUDLJpSc7QtLIgrGOuL9THwnIc2",
  },
];


```
