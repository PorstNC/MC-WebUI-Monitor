const express = require('express');
const http = require('http');
const { spawn } = require('child_process');

const app = express();
const server = http.createServer(app);
app.use(express.static('.'));

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'multipart/x-mixed-replace; boundary=frame');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.setHeader('Pragma', 'no-cache');

  const ffmpeg = spawn('./ffmpeg', [
    '-f', 'gdigrab',
    '-framerate', '30',
    '-i', 'title=Minecraft 1.21.8',
    '-q:v', '2',
    '-preset', 'ultrafast',
    '-tune', 'zerolatency',
    '-f', 'mjpeg',
    '-'
  ]);

  let buffer = Buffer.alloc(0);
  ffmpeg.stdout.on('data', (data) => {
    buffer = Buffer.concat([buffer, data]);
    let jpegStart = buffer.indexOf(Buffer.from([0xff, 0xd8]));
    let jpegEnd = buffer.indexOf(Buffer.from([0xff, 0xd9]));

    while (jpegStart !== -1 && jpegEnd !== -1 && jpegEnd > jpegStart) {
      const frame = buffer.slice(jpegStart, jpegEnd + 2);
      res.write(`--frame\r\nContent-Type: image/jpeg\r\n\r\n`);
      res.write(frame);
      res.write(`\r\n`);
      buffer = buffer.slice(jpegEnd + 2);
      jpegStart = buffer.indexOf(Buffer.from([0xff, 0xd8]));
      jpegEnd = buffer.indexOf(Buffer.from([0xff, 0xd9]));
    }
  });

  req.on('close', () => ffmpeg.kill());
});

let isStarted = false;
app.get('/start', (req, res) => {
  if (isStarted) return res.send('already started');
  isStarted = true;
  spawn('start1.21.8.bat', { shell: true });
  res.send('started');
});

server.listen(5173, () => {
  console.log('✅ Running at http://localhost:5173');
});