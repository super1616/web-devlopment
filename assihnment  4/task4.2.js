function fetchData(url, callback) {
  console.log("Fetching from:", url);

  setTimeout(() => {
    const networkOk = true; // change to false to simulate network error

    if (!networkOk) {
      callback("Network Error", null); // error case
    } else {
      const response = { data: "Sample Data from " + url };
      callback(null, response); // success case
    }
  }, 2000);
}

// Usage
fetchData("https://example.com/api", (err, response) => {
  if (err) {
    console.log("Fetch failed:", err);
  } else {
    console.log("Fetch success:", response);
  }
});
