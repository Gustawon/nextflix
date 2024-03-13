# nextflix

Nextflix is a Netflix clone created with Next.js

## API Keys

```bash
.env.local
```

In order to use full functionalities, You will need to create and set following api keys and flags:

- YOUTUBE_API_KEY for fetching data from YouTube api
- NEXT_PUBLIC_MAGIC_API_KEY for passwordless login with magic.link
- NEXT_PUBLIC_VALID_EMAIL for dummy email validation while backend is not there yet
- NEXT_PUBLIC_DEVELOPMENT flag (false/true) for switching between YouTube API data (false) and JSON pre-fetched data for development purposes (true)

## Getting Started

Run the development server:

```bash
npm run dev
```
