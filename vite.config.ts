import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function imagePersistencePlugin(): Plugin {
  return {
    name: 'image-persistence-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-static-image', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { filename, base64 } = JSON.parse(body);
              if (filename && base64) {
                const publicDir = path.resolve(__dirname, 'public');
                if (!fs.existsSync(publicDir)) {
                  fs.mkdirSync(publicDir, { recursive: true });
                }
                const cleanData = base64.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(cleanData, 'base64');
                const targetPath = path.join(publicDir, filename);
                fs.writeFileSync(targetPath, buffer);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, url: '/' + filename }));
                return;
              }
            } catch (err) {
              console.error('Error saving image:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid payload' }));
          });
          return;
        }
        res.writeHead(404);
        res.end();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/HERizon/', // <--- Đưa base ra đúng chỗ cấu hình chung ở đây!
    plugins: [react(), tailwindcss(), imagePersistencePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
