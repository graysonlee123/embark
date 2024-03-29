# Embark

![Screenshot](/screenshot.jpeg?raw=true 'screenshot')

Get to where you need to go. Embark is your bookmarks bar, re-imagined. ([Static demo](https://ggantek-embark.vercel.app/))

The purpose of this project is to allow anyone to host a customized and enhanced bookmarks page. It can be configured as the "new tab" page in your browser.

## Features

- Use `/` to quickly search with Google
- Organize links into groups
- Easy JSON configuration
- Recent links

## Installation

I recommend installing this with [Docker](https://hub.docker.com/repository/docker/ggantek/embark/). But, you could also install the source code and run it manually.

### Docker

You can pull the Embark image, and start it by running this command. You need to add in your port of choice, and a directory where you want to store your `bookmarks.json` on your machine. The `bookmarks.json` file is how you add links to Embark.

```sh
$ docker run \
  -dit \
  -p <port>:3000 \
  -v <data>:/app/data/ \
  --restart unless-stopped \
  --name embark \
  ggantek/embark
```

I prefer running the container with Docker Compose:

```yaml
version: '3'

services:
  embark:
    image: ggantek/embark:latest
    ports:
      - <port>:3000
    volumes:
      - <data>:/app/data/
    restart: unless-stopped
```

### From source

```sh
$ git clone git@github.com:graysonlee123/embark.git
$ cd embark/
$ npm i
$ npm run build
$ npx next start -p <port>
```

## Configuration

To modify your bookmarks, all you need to do is create and edit your `bookmarks.json` file. It should resemble the following:

```json
{
  "groups": [
    {
      "name": "Productivity",
      "icon": "briefcase-outline",
      "items": [
        {
          "label": "Gmail",
          "url": "https://gmail.com/",
          "blank": true
        },
        ...
      ]
    },
    ...
  ]
}
```

You can use any icon in Ionic's open-source [icon library](https://ionic.io/ionicons) for group icons.

You can optionally add `"blank": true` to an item to open it in a new tab by default.

## Updating

To add, change, edit, or remove links in Embark, edit your `bookmarks.json` file. Then, refresh the site twice or wait some time. On the first refresh, NextJS triggers a function to rebuild the page with the new data.

## Changelog

- `1.2.0`: Added dark mode and `bookmarks.json` checking.
- `1.1.0`: Added TypeScript, ESLint, and Prettier
- `1.0.0`: Initial release

## Contributing

See the [contributing](/CONTRIBUTING.md) notes for details about contributing.
