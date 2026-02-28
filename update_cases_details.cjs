import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import https from "https";

const url = "https://cdn-cf-east.streamable.com/video/mp4/55qnux.mp4?Expires=1772471506183&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Mm53Vf1luR8JkhXn6ryvbDY5w4iIQaKzkHlyS4ejzYnASt8x3uwpyvToTT-4FWJBw88mfVCsoOnL1BJgPQsnWlNGq-QBxOzAPtPd18poAcj2WABIclrKu1uDbCjK708G3C9EjOMaRSzN0y1AX1Kc8aJwuGDRtVRAO8uK0329CbXqAju9491zWj7~xDuzPVLMEdtGBn0qtZ3PFzhRs1V0HG8Ere61z7Ssj-SwTUUTlW~XFlmwMUZ94I42VHQ1wah41G5~LRN9FTZ8vt~i21D6880hVLRS25iUNrLtSA1zM0-irLn4nawg1v8kyilo0nc3SLmDufMGNF5fGqO41RZt-w__";

https.get(url, (res) => {
  const file = fs.createWriteStream("video.mp4");
  res.pipe(file);
  file.on("finish", async () => {
    file.close();
    console.log("Downloaded");
    const stats = fs.statSync("video.mp4");
    console.log("Size:", stats.size);
  });
});
