# Mad Libs Generator

A self-contained, single-file web app for playing Mad Libs. No build tools, no dependencies, no server required — just open `index.html` in a browser.

## Features

- 10 visual themes (Playful, Dark Mode, 80s Neon, Pastel Dream, Newspaper, Ocean, Forest, Cyberpunk, Vintage Paper, Y2K)
- Live story preview that updates as you type
- Templates organized by category in the story dropdown
- Theme preference saved across sessions
- Copy-to-clipboard on the finished story
- Mobile responsive

## Running the app

Open `index.html` directly in any modern browser. No server needed.

> **Note:** If you open via `file://` and your browser blocks local script loading, serve it with any static file server:
> ```
> npx serve .
> # or
> python -m http.server
> ```

## Adding new templates

1. Create a new file in `templates/`, e.g. `templates/holidays.js`
2. Add one line to `templates/_registry.js`:
   ```js
   window.TEMPLATE_REGISTRY = [
     'templates/adventure.js',
     'templates/animals.js',
     'templates/food.js',
     'templates/holidays.js',   // <-- add this
     'templates/school.js',
     'templates/scifi.js',
   ];
   ```
3. That's it. `index.html` never needs to be touched.

### Template file format

Each template file self-registers to `window.MADLIB_TEMPLATES`:

```js
window.MADLIB_TEMPLATES = window.MADLIB_TEMPLATES || {};
Object.assign(window.MADLIB_TEMPLATES, {

  my_template_id: {
    title: "My Template Title",
    category: "Holiday & Celebrations",   // used to group the dropdown
    story: "It was a {{ADJ_1}} day when {{NAME_1}} decided to {{VERB_1}} the {{NOUN_1}}.",
    fields: [
      { key: "ADJ_1",  label: "Adjective",      hint: "e.g., stormy" },
      { key: "NAME_1", label: "Person's name",  hint: "e.g., Gerald" },
      { key: "VERB_1", label: "Verb (to...)",   hint: "e.g., reorganize" },
      { key: "NOUN_1", label: "Noun",           hint: "e.g., shed" },
    ]
  },

  another_template: {
    // ...
  },

});
```

**Placeholder format:** `{{KEY}}` — uppercase, underscores allowed, must match a `key` in `fields`.

**`category`** — determines the optgroup label in the story dropdown. Templates with the same category string are grouped together and sorted alphabetically.

## File structure

```
madlib-generator/
├── index.html              # App shell — themes, layout, JS logic (never edit)
└── templates/
    ├── _registry.js        # List of template files to load (edit this to add packs)
    ├── adventure.js        # Adventure & Fantasy (10 templates)
    ├── animals.js          # Animals & Nature (1 template)
    ├── food.js             # Food & Cooking (1 template)
    ├── school.js           # School Life (10 templates)
    └── scifi.js            # Sci-Fi & Space (10 templates)
```
