---
title: Display flex vs inline-flex
description: "Difference between display: flex and display: inline-flex"
date: 2022 09
author: Chavez Harris
githubProfileImage: https://avatars.githubusercontent.com/u/74829200?v=4
coverPhoto: https://codedbychavez.com/images/articles/display-flex-vs-inline-flex/cover_photo.png
tags: [css, flexbox, styling, flexboxModule]
---

In this post, we'll explore the difference between `display: flex` and `display: inline-flex`

<!-- more -->

## `display: flex`

When applied to an element it turns the element into **block-level** flex container which would take up the entire with of the page or its parent element (in this case, the body element).

Let’s take a look at a practical example.

```html
<body>
	<div class="container"> <!-- display: flex; -->
		<div class="card card-1">Card 1</div>
		<div class="card card-2">Card 2</div>
		<div class="card card-3">Card 3</div>
		<div class="card card-4">Card 4</div>
	</div>
</body>
```

In the above HTML code snippet I've defined a container div then inside I added children divs with the class of `card`. In addition, I've added some CSS properties to give the flexbox container div a `min-height` of `8rem` and then applied a `min-width` of `8rem` to each card.

```css
.flexbox-container {
  min-height: 8rem;
  background-color: purple;
  padding: 1rem;
  display: flex; /* display set to flex */
}

.card {
  min-width: 8rem;
}
```

Here is a screenshot:

![Screenshot of page with sample app with display: flex](/images/articles/display-flex-vs-inline-flex/snapshot_of_page_display_flex.png)

Setting the display property to flex on the container div transformed it into a flex container (colored purple). It is displayed as a block-level element, thus taking up the full width of it parent (the body element).

## `display: inline-flex`

On the other hand, If we give the display property a value of `inline-flex` the container div will only be as wide as the total width of its children divs (flex-items) or as wide as we set it to be.

```css
.flexbox-container {
  min-height: 8rem;
  background-color: purple;
  padding: 1rem;
  display: inline-flex;
}
```

Here's what it looks like as an `inline-level` flex container:

![Screenshot of page with sample app with display: inline-flex](/images/articles/display-flex-vs-inline-flex/snapshot_of_page_display_inline_flex.png)

## Conclusion

Knowing the differences between these two display values can be crucial to using the flexible box layout module in your front-end projects. With that said, you should now be on your way to making the web a better place.
