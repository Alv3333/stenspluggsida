const http = require('http');

// Render tilldelar PORT via miljövariabel
const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hej! Din Render-server fungerar med HTTPS!\n');
});

server.listen(PORT, () => {
  console.log(`Servern kör på port ${PORT}`);
});
