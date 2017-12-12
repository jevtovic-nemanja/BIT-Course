const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<div><h2>Hello world</h2></div><style>
    div {
        border: 2px solid red;
    }
    h2 {
        color: green;
        text-align: center;
    }`);
});

server.listen(port, hostname, () => {
    const open = require("open");
    open(`http://${hostname}:${port}/`, "chrome");
});