import 'dotenv/config';
import { createServer } from 'http';
import { app } from './app.js';

const PORT = process.env.PORT ?? 7373;

const server = createServer(app);

try {
  server.listen(PORT);
  server.on('listening', () => {
    console.log(`Listening on port ${PORT}`);
  });

  server.on('error', (error) => {
    console.log(`Error en index: ${error.message}`);
  });
} catch (error) {
  server.emit('error', error);
  console.log('error', error);
}
