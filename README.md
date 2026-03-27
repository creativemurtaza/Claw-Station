# Claw Station

Next.js + Tailwind implementation of the **Home Page** from Figma ([Open-Claw](https://www.figma.com/design/6fBoVyJUAD6GmZ3o6GqtKE/Open-Claw?node-id=35-1370)).

## Commands

```bash
npm install
npm run dev
```

Open **http://localhost:3000** (or the port shown in the terminal).

If you see **HTTP 500** or “Internal Server Error”, stop all dev servers, clear the Next cache, and start again:

```bash
npm run clean
npm run dev
```

Do not run multiple `npm run dev` instances for this project at the same time (they fight over the `.next` folder).

### Page still not loading?

1. **Use the exact folder** that contains this `package.json` (the project root), not a parent folder.
2. **Match the port** in the browser to what the terminal prints (e.g. if it says “Port 3000 is in use … 3001”, open **http://localhost:3001**).
3. **Try** `http://127.0.0.1:3000` instead of `http://localhost:3000` if something else is intercepting `localhost`.
4. **`npm start`** only works after a successful **`npm run build`**. For local development, prefer **`npm run dev`**.
5. **Verify the server responds:** with dev or start running, open **http://localhost:3000/api/health** — you should see `{"ok":true,...}`. If that fails, the Next server is not running or the URL/port is wrong.
6. **Kill stray Node processes** if ports are stuck: quit other terminals running `next dev`, then `npm run clean` and `npm run dev` again.

## Figma assets

Icons and raster layers are loaded from Figma MCP asset URLs (see `lib/figma/homeAssets.ts`). Those URLs are temporary (~7 days). For production, download them into `public/` and update the constants.

## Routing

This project uses the **Next.js App Router** only (`app/`). Shared chrome (sidebar, top bar, footer) is provided once via **`app/layout.tsx`** wrapping **`HomeShell`**.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Homepage (command input) |
| `/stations` | Stations grid (Figma) |
| `/workspace` | Workspace; accepts `?q=`; shows selected station from store when set |
| `/agents`, `/create-station` | Placeholder content |
| `/reports`, `/activity`, `/settings`, `/support` | Minimal placeholders |
