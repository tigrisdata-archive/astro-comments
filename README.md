# Astro Starter Kit: Blog + Comments

Adding comments to your blog is a great way to engage with your readers. This repo contains the base Astro starter kit blog template with a few extra features:

- A `newcomment` Netlify function to handle saving comments to Tigris
- A `Comments` component to retrieve and display comments saved to Tigris
- A `NewComment` component to submit new comments to the Netlify function

![image](https://user-images.githubusercontent.com/1228996/232147989-e7e06ca7-adf8-48d7-a932-666a7325ac62.png)

## 🚀 Getting Started

Before starting, create a free [Tigris](https://console.preview.tigrisdata.cloud/signup) account.

### Creating a Tigris Project

Next, in your Tigris account, create a new project. Then get the client ID and secret from the Application keys tab.

![image](https://user-images.githubusercontent.com/1228996/232148679-704d18fb-4995-4f40-b24e-37f4ba650165.png)

This project uses the [`@tigrisdata/astro`](https://www.npmjs.com/package/@tigrisdata/astro) package to handle the Tigris API calls. It then registers the integration in the `astro.config.mjs` file. Currently, the integration expects to find the following environment variables:

```php
// .env file
TIGRIS_PROJECT={YOUR_TIGRIS_PROJECT_NAME}
TIGRIS_CLIENT_ID={YOUR_TIGRIS_CLIENT_ID}
TIGRIS_CLIENT_SECRET={YOUR_TIGRIS_CLIENT_SECRET}
TIGRIS_DB_BRANCH=main
```

You can also forgo a `.env` file and specify the config in the `tigris` function within the `astro.config.mjs` file.

```ts
// astro.config.mjs
export default defineConfig({
  integrations: [
    tigris({
      branch: "main",
      projectName: "YOUR_TIGRIS_PROJECT_NAME",
      clientId: "YOUR_TIGRIS_CLIENT_ID",
      clientSecret: "YOUR_TIGRIS_CLIENT_SECRET",
    }),
  ],
});
```

### Creating a Tigris Collection

Within your Tigris project, create a new collection named `comments` with the following schema:

![image](https://user-images.githubusercontent.com/1228996/232150889-1864522d-16dc-4948-9b24-f79d86fe7dba.png)

Of course, if you want to modify this for your own use, you can change the schema to whatever you'd like. Just be sure to update the `Comments` and `NewComment` components and `newcomment.ts` function to match.

### Run It!

Now that you've got your Tigris project and collection set up and have updated your environment, you can run the project locally:

```bash
npm run dev
```

## ☑️ To Do

Have suggestions or want to contribute? Here are a few things we'd love to see:

- Add a honeypot to the `NewComment` component to help prevent spam
- Add error checking in the `newcomment.ts` function

## 👀 Want to learn more?

Check out [our documentation](https://www.tigrisdata.com/docs/) or jump into our [Discord server](https://tigris.dev/discord).

### Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
