const http = require("http");

const PORT = process.env.PORT || 3200;

const SERVER = http.createServer();

SERVER.listen(PORT);

SERVER.on("listening", () => {
  console.log("[Server]::LISTEN:%s", PORT);
});

SERVER.on("ERROR", error => {
  throw new Error("[Server]::ERROR:%s", err.message);
});


