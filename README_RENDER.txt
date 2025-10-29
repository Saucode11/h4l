Render deployment instructions:

1. Place your frontend build output (the Netlify-ready static files) into the `public/` folder of this backend.
   - For a React app built with Vite, run `npm run build` in the frontend and copy the `dist` contents into `backend_render/public`.
   - Rename `index.html` and ensure the asset paths are correct.

2. On Render:
   - Create a new "Web Service".
   - Connect your repo or upload files.
   - Set the build command (if you have build steps) or leave blank if you upload already-built static files.
   - Set the start command to: `npm start`
   - The `PORT` environment variable is provided by Render automatically; the server listens on `process.env.PORT`.

3. Health check:
   - After deploy, check `/api/health` to verify server is running.

Notes:
- This backend intentionally keeps your frontend code unchanged; it only provides a lightweight Express server for Render.
- If you want me to automatically copy the frontend build into `public/` and produce a ready-to-deploy zip, reply "copy frontend build into backend" and I'll do it.
