# Hexo theme based on twitter bootstrap

See [this example site](http://hexo-example.s3-website.eu-central-1.amazonaws.com/) for a demo.

- optimized for readability (~70 characters per line, enough margin between body and sidebar)
- done for offline writing: (almost) all css and js files are part of the theme, the blog looks the same online as offline and loads also without internet connnection

# Installation

```
npm install hexo-renderer-less --save
cd themes
git clone https://github.com/philippkeller/hexo-theme-twbootstrap.git
```

Then `theme: hexo-theme-twboostrap` into your `_config.yml`

# Features

## Highlightjs

Highlight.js enables syntax highlighting for your code blocks. 

In `_config.yml` remove the whole `highlight` block and replace it with

```yaml
highlight:
  enable: false
```

and instead add:

```yaml
highlightjs: atelier-estuary-light
```

Then do

```bash
hexo clean
hexo generate
```

To get highlightjs working.

For a full list of all themes see [this demo page](https://highlightjs.org/static/demo/)

## Menu

Enable the menu on top with e.g.

```yaml
menu:
  Home: /
  Archives: /archives
```

## About me carousel (only visible on index)

Add `about` in widgets:

```yaml
widgets:
 - about
```

And add some text about yourself:

```yaml
about:
  title: About John Doe
  content:
  - image: /images/john.jpg
    image_alt: John
    description: I'm a <a href="https://www.python.org/">python</a> developer
  - image: /images/rust.jpg
    image_alt: Rust
    description: Recently I started learning rust.
```

## Per-post CSS and Javascript

You can add custom CSS and load a special JS on a per-post basis. Example:

```yaml
---
title: My awesome post
date: 2014-01-20 16:06:00
css:
  - "pre>code.hljs {font-size: 80%}"
scripts:
  - https://example.com/script.js
---
```

## Captions on images

If you add a image like this, it'll show the caption "Raspberry pi" right below the image:

```html
<img src="/images/pi.jpg" alt="Raspberry pi" class="caption" />
```

## Other features of this theme

There's support for disqus, addthis, subscripe to mailchimp mailing list, etc. Have a look at [the example config](_config.example.yml)

## Update

Execute the following command to update:

```
cd themes/hexo-theme-twbootstrap
git pull
```
