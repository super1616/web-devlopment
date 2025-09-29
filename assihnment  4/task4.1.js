function readData(callback) {
  const fileExists = true; 

  console.log("Reading file...");

  setTimeout(() => {
    if (fileExists) {
      const content = "This is file content.";
      callback(null, content); 
    } else {
      callback("Error: File not found!", null);
    }
  }, 2000);
}


readData((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File content:", data);
  }
});
