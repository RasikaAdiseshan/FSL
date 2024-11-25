const fs = require("fs");
const path = require("path");


const readFile = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
    } else {
      console.log(`Contents of ${filePath}:`);
      console.log(data);
    }
  });
};


const writeFile = (filePath, content) => {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err.message);
    } else {
      console.log(`Content written to ${filePath}`);
    }
  });
};


const appendFile = (filePath, content) => {
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error("Error appending to file:", err.message);
    } else {
      console.log(`Content appended to ${filePath}`);
    }
  });
};


const getFileInfo = (filePath) => {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error("Error getting file info:", err.message);
    } else {
      console.log(`File Info for ${filePath}:`);
      console.log(stats);
    }
  });
};


const resolvePath = (fileName) => {
  const fullPath = path.resolve(fileName);
  console.log(`Full path of ${fileName}:`, fullPath);
};


const demoFile = "demo.txt";

writeFile(demoFile, "This is the initial content.\n");


appendFile(demoFile, "Appending some extra content.\n");


readFile(demoFile);

getFileInfo(demoFile);


resolvePath(demoFile);
