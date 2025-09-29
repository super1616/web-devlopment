function fetchData(url, callback) {
  console.log("Fetching from:", url);

  setTimeout(() => {
    const networkOk = true; 
    if (!networkOk) {
      callback("Network Error", null); 
      
    } else {
      const response = { data: "Sample Data from " + url };
      callback(null, response); 
    }
  }, 2000);
}


fetchData("https://example.com/api", (err, response) => {
  if (err) {
    console.log("Fetch failed:", err);
  } else {
    console.log("Fetch success:", response);
  }
});
