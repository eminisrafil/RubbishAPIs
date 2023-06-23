# Rubbish API Documentation - Get all runs

## GET /runs/:teamID/get

This endpoint retrieves any Rubbish runs for a specified team.

### Headers

- `Authorization`: Bearer token for authentication

### Path Parameters

- `teamID`: The ID of the team for which the runs are to be retrieved.

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

### Example

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
