// Invokes the Scan API to retrieve only one "page" of data from the table.
// It needs to be called repeatedly to scan the whole table (this will be shown next)
// If you are scanning a large table, make sure to follow the best practices
// as described in the developer guide.
var params = {
    TableName: 'lambda-dynamodb-dev',
    Limit: 5  // Limits the number of results per page (beyond the default 1MB limit)
};

console.log("Calling the Scan API on the Image table");
docClient.scan(params, function(err, data) {
    if (err) {
        ppJson(err); // an error occurred
    } else {
        console.log("The Scan call evaluated " + data.ScannedCount + " items");
        ppJson(data); // successful response
    }
});