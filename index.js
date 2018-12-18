const REDIRECT_HOST = "https://remote.one";

require("http")
  .Server((req, res) => {
    res.writeHead(301, { Location: REDIRECT_HOST + req.url });
    res.end();
  })
  .listen();
