function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information' + ${response}`);
  });
}

// makeRequest('Facebook').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse)
// }).catch(err => {
//     console.log(err)
// })

/*---- USING ASYNC AWAIT ----*/
async function doWork() {
  try {
    const response = await makeRequest("Facebook");
    console.log("Response Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();
