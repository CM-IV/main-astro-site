# Oceanus Digital Consulting
## Built with [Astro](https://astro.build/)

![](https://ik.imagekit.io/xbkhabiqcy9/img/Screenshot_2022-11-01_at_11-38-57_Dreamland_Software_Ph6A1iTMl.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1667320964285)


## 🚀 Project Structure

Here's a rough outline of the directory structure.

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
|   ├── css/
|   |   └── styles.css
|   ├── layouts/
|   |   ├── blogPost.astro
|   |   └── mainLayout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |