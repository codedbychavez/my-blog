---
title: How to use Tailwindcss in Nuxt3
description: "A simple step-by-step guide on how to use Tailwindcss in Nuxt3"
date: 2022 09
author: Chavez Harris
coverPhoto: https://codedbychavez.com/images/articles/using-tailwindcss-in-nuxt3/cover_photo.png
tags: [css, tailwindcss, styling, nuxt, nuxt3]
---

<!-- TODO: Create a thumbnail -->
<!-- ![ALT Text](/images/articles/LINK_TO_IMAGE.EXT) -->

As web developers, we're often pulled in many directions by CSS frameworks. I get it, We need to add some sort of styling to make our
web interfaces look presentable. One of the CSS frameworks we'll take a look at is Tailwindcss, but more specifically I will walk you through the steps 
of how you can use it correctly in your Nuxt3 application.

<!-- more -->

## Getting started

You can follow along with me using this repo (https://github.com/codedbychavez-labs/nuxt3-with-tailwindcss-sample) if you don't have a Nuxt3 project. It's a freshly generated Nuxt3 application with Tailwindcss added.

### Prerequisites

Here is a list of software requirements you'll need to have. Check that you have these before kicking things off!

- Node.js - Having the [latest LTS version](https://nodejs.org/en/download/) is recommended
- [Visual Studio Code](https://code.visualstudio.com/)
- [Volar Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

Now that you've installed the prerequisites, Let's spin up the sample app.

## How to add Tailwindcss

1. Run the following command to install the tailwindcss dependency to your project:

```sh
npm install --save-dev @nuxt/tailwindcss
```

2. Add the dependency we've just installed to the modules section in your `nuxt.config` file.

```js
export default {
  modules: ['@nuxt/tailwindcss']
}
```

3. Generate a `tailwind.config.js` file by running:

```sh
npx tailwindcss init
```

You should now be able to use Tailwindcss in your Nuxt3 app.


## Final words

Tailwindcss CSS is simple to use and only requires that we follow three important steps.

