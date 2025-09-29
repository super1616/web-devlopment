function readData(callback) {
  const fileExists = true; // change this to false to simulate missing file

  console.log("Reading file...");

  setTimeout(() => {
    if (fileExists) {
      const content = "This is file content.";
      callback(null, content); // no error, return content
    } else {
      callback("Error: File not found!", null); // error case
    }
  }, 2000);
}

// Usage
readData((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File content:", data);
  }
});
