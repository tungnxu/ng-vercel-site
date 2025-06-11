// server.ts
import {
  createNodeRequestHandler,
  AngularNodeAppEngine,
  writeResponseToNodeResponse,
  isMainModule,
} from '@angular/ssr/node';
import { createServer } from 'node:http';

const engine = new AngularNodeAppEngine();

const handler = createNodeRequestHandler(async (req, res) => {
  const result = await engine.handle(req);
  if (result) {
    writeResponseToNodeResponse(result, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Nếu chạy local
if (isMainModule(import.meta.url)) {
  const http = await import('node:http');
  const port = process.env['PORT'] || 4000;
  const server = createServer(handler);
  server.listen(port, () => {
    console.log(`Zoneless Angular SSR listening on http://localhost:${port}`);
  });
}