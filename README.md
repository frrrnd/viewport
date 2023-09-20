# Viewport

## Managing Content

Hugo makes it easy to create content:

```bash
hugo new content posts/my-first-post.md
```

Read more about [how the content is structured here](#content-structure).


## Development

### Install

#### Installing Hugo on your machine

| Platform | Command |
| :--- | :----- |
| MacOS | `brew install hugo` |
| Windows | `choco install hugo-extended` |

*Or read thorugh the [installation guide](https://gohugo.io/installation/) on the website.*

#### Running locally

```bash
hugo serve
```

#### Building

```bash
hugo
```

### Directory Structure

```
my-site/
├── archetypes/
│   └── default.md
├── assets/
├── content/
├── data/
├── i18n/
├── layouts/
├── public/       <-- created when you build your site
├── resources/    <-- created when you build your site
├── static/
├── themes/
└── hugo.toml         <-- site configuration
```

[Read more about each one of the folders here.](https://gohugo.io/getting-started/directory-structure/#directories)

#### Content Structure

```
.
└── content
    └── about
    |   └── index.md  // <- https://example.com/about/
    ├── posts
    |   ├── firstpost.md   // <- https://example.com/posts/firstpost/
    |   ├── happy
    |   |   └── ness.md  // <- https://example.com/posts/happy/ness/
    |   └── secondpost.md  // <- https://example.com/posts/secondpost/
    └── quote
        ├── first.md       // <- https://example.com/quote/first/
        └── second.md      // <- https://example.com/quote/second/
```