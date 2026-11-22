# AdaLabs Terminal

Twenty hand-tuned VS Code themes, **10 dark and 10 light**. They run from OLED black through slate and espresso, and from pure white through paper and sepia.

Each theme comes from a single palette. The editor, sidebar, tabs, status bar, terminal ANSI colors, bracket pairs, outline icons, diff and git states, and syntax all match each other. Switching themes changes the mood, not what each color means.

![All twenty AdaLabs Terminal themes](assets/preview.png)

## The range

| Dark | Feel | Light | Feel |
| --- | --- | --- | --- |
| **Obsidian** | OLED true black, crisp cool syntax | **Snow** | Pure white, monochrome chrome |
| **Carbon** | Neutral graphite, ember-orange accent | **Paper** | Warm notebook paper, burnt-orange ink |
| **Slate** | Blue-gray slate, calm for long sessions | **Linen** | Soft cream with deep teal |
| **Ink** | Midnight navy, violet ink | **Sepia** | Aged parchment, warmest and easiest on the eyes |
| **Graphite** | Soft mid-gray, low glare | **Mist** | Cool gray-white, clear blue |
| **Espresso** | Roasted brown-black, caramel | **Cloud** | Light slate blue-gray |
| **Moss** | Forest green-black, organic | **Sage** | Pale sage, restful |
| **Plum** | Aubergine with orchid and peach | **Blush** | Rose off-white, raspberry |
| **Abyss** | Deep-sea teal, bioluminescent cyan | **Lavender** | Lilac wash, electric violet |
| **Dusk** | Low-contrast twilight violet-gray | **Stone** | Dim concrete gray for all-day use |

## One palette, everywhere

- **Workbench:** activity bar, sidebar, tabs, title bar, command center, status bar, menus, quick pick, notifications, settings, and chat all use the same surfaces and accent.
- **Terminal:** the 16 ANSI colors come from the theme's own syntax colors, so `git status` looks like your diff gutter.
- **Syntax:** fixed roles in every theme. Keywords, functions, types, strings, numbers, properties, comments and regex each keep their role, and each theme tunes the hues. Includes TextMate and semantic tokens.
- **Everything else:** bracket-pair colors, outline and suggest icons, diff and merge, debug, testing, notebooks, minimap and scrollbars.

Every syntax color meets WCAG AA (4.5:1) against its background. Comments meet at least 3.5:1, so they recede without becoming unreadable.

## Install

1. Open the Extensions view in VS Code and search for **AdaLabs Terminal**.
2. Install it, then run **Preferences: Color Theme** and pick any **AdaLabs** theme.

Tip: turn on `"window.autoDetectColorScheme": true` and set `workbench.preferredDarkColorTheme` and `workbench.preferredLightColorTheme`. For example, use *AdaLabs Slate* and *AdaLabs Paper* to follow your OS.

## Upgrading from 1.x

The numbered shades (Dark 1–5, Light 1–5) were replaced by named themes. The closest matches:

- Dark 1 → **Obsidian**, Dark 2 → **Carbon**, Dark 5 → **Graphite**
- Light 1 → **Snow**, Light 5 → **Stone**

## Development

Themes are generated from [`scripts/palettes.mjs`](scripts/palettes.mjs). Edit a palette, then run:

```sh
npm run build     # contrast audit + regenerate themes/*.json and package.json theme list
npm run check     # contrast audit only
npm run package   # build + vsce package
```

## Maintainer

**Abhishek Choudhury**: [www.abhishekchoudhury.com](https://www.abhishekchoudhury.com)

- Source: [github.com/yesabhishek/adalabs-terminal-theme](https://github.com/yesabhishek/adalabs-terminal-theme)
- Issues: [github.com/yesabhishek/adalabs-terminal-theme/issues](https://github.com/yesabhishek/adalabs-terminal-theme/issues)

MIT licensed.
