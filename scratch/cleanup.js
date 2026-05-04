const fs = require("fs");
const path = require("path");

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith(".tsx")) arrayOfFiles.push(path.join(dirPath, file));
    }
  });
  return arrayOfFiles;
};

const contentFiles = getAllFiles("src/content/page-sections");

contentFiles.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  
  // Remove unused Lucide imports
  content = content.replace(/^import \{ [^}]* \} from "lucide-react";\n/gm, "");

  // Fix unescaped entities in JSX (specifically for headings and text nodes)
  // We look for patterns like <>Text's Text</> or <span>Text's Text</span>
  content = content.replace(/(>|{)([^<}'"]*)'([^<}'"]*)(<|})/g, (match, p1, p2, p3, p4) => {
    return `${p1}${p2}&apos;${p3}${p4}`;
  });
  // Repeat to catch multiple apostrophes
  content = content.replace(/(>|{)([^<}'"]*)'([^<}'"]*)(<|})/g, (match, p1, p2, p3, p4) => {
    return `${p1}${p2}&apos;${p3}${p4}`;
  });

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
