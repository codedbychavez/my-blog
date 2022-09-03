---
title: Up and running with Docusaurus
description: A step-by-step guide on getting up and running with Docusaurus
date: 2022 07
author: Chavez Harris
githubProfileImage: https://avatars.githubusercontent.com/u/74829200?v=4
tags: [docusaurus, react, documentation]
---

Start your next bog or documentation website. Docusaurus is a static-site generator that lets you build a one-page web application with fast client-side navigation, harnessing the full power of React to make your site interactive. The out-of-the-box documentation features allow you to create any kind of website, such as personal websites, products, blogs, marketing landing pages, etc

<!-- more -->

## Prerequisites

- Basic React and Markdown knowledge

## Creating a documentation site.

1. Generate a new site, with the following command:

```sh
npm init docusaurus@latest my-website classic

```

2. Change the directory into the folder generated with the above command:

```sh
cd my-website

```

3. start your site by running the following command:

```sh
npx docusaurus start

```

The app should launch in your browser at [http://localhost:3000](http://localhost:3000)

## Creating a document

Documents are groups of pages connected through:

- A sidebar
- previous/next navigation
- versioning

1. Create a markdown file called **hello.md** in the **/docs** directory with the following content:

```markdown
# Hello
This is my **first Docusaurus document**!

```

The new document should now be available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello)

2. Configure the sidebar


Docusaurus automatically creates a sidebar from the docs folder. Add metadata to customize the sidebar label and position in **docs/hello.md**

```markdown
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!

```

That's it!

## Further reading:

If you would like to learn more about Docusaurus. Check out the [official documentation](https://tutorial.docusaurus.io/docs/intro)