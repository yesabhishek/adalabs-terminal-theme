# AdaLabs Terminal

Twenty hand-tuned VS Code themes, **10 dark and 10 light**. They run from OLED black through slate and espresso, and from pure white through paper and sepia.

Each theme comes from a single palette. The editor, sidebar, tabs, status bar, terminal ANSI colors, bracket pairs, outline icons, diff and git states, and syntax all match each other. Switching themes changes the mood, not what each color means.

<p align="center">
  <img src="assets/screenshots/obsidian.png" width="49%" alt="AdaLabs Obsidian">
  <img src="assets/screenshots/paper.png" width="49%" alt="AdaLabs Paper">
</p>

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

## Screenshots

These are rendered from the generated theme files. The sidebar, git colors, tabs, syntax, bracket pairs, terminal ANSI colors and status bar all come from each theme's own palette.

<details open>
<summary><b>Dark themes</b></summary>

<table>
<tr><td width="50%"><img src="assets/screenshots/obsidian.png" alt="AdaLabs Obsidian"><br><b>Obsidian</b>: OLED true black with crisp, cool syntax.</td><td width="50%"><img src="assets/screenshots/carbon.png" alt="AdaLabs Carbon"><br><b>Carbon</b>: Neutral graphite black with an ember-orange accent.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/slate.png" alt="AdaLabs Slate"><br><b>Slate</b>: Blue-gray slate, calm and balanced for long sessions.</td><td width="50%"><img src="assets/screenshots/ink.png" alt="AdaLabs Ink"><br><b>Ink</b>: Deep midnight navy with violet ink highlights.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/graphite.png" alt="AdaLabs Graphite"><br><b>Graphite</b>: Soft mid-gray for bright rooms and lower glare.</td><td width="50%"><img src="assets/screenshots/espresso.png" alt="AdaLabs Espresso"><br><b>Espresso</b>: Warm roasted brown-black with caramel accents.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/moss.png" alt="AdaLabs Moss"><br><b>Moss</b>: Forest-floor green-black, organic and quiet.</td><td width="50%"><img src="assets/screenshots/plum.png" alt="AdaLabs Plum"><br><b>Plum</b>: Aubergine dark with orchid and peach highlights.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/abyss.png" alt="AdaLabs Abyss"><br><b>Abyss</b>: Deep-sea teal black with bioluminescent cyan.</td><td width="50%"><img src="assets/screenshots/dusk.png" alt="AdaLabs Dusk"><br><b>Dusk</b>: Low-contrast twilight violet-gray with rose accents.</td></tr>
</table>

</details>

<details>
<summary><b>Light themes</b></summary>

<table>
<tr><td width="50%"><img src="assets/screenshots/snow.png" alt="AdaLabs Snow"><br><b>Snow</b>: Pure white, monochrome chrome, maximum clarity.</td><td width="50%"><img src="assets/screenshots/paper.png" alt="AdaLabs Paper"><br><b>Paper</b>: Warm notebook paper with burnt-orange ink.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/linen.png" alt="AdaLabs Linen"><br><b>Linen</b>: Soft cream linen with deep teal accents.</td><td width="50%"><img src="assets/screenshots/sepia.png" alt="AdaLabs Sepia"><br><b>Sepia</b>: Aged parchment, the most eye-friendly warm light.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/mist.png" alt="AdaLabs Mist"><br><b>Mist</b>: Cool morning gray-white with a clear blue accent.</td><td width="50%"><img src="assets/screenshots/cloud.png" alt="AdaLabs Cloud"><br><b>Cloud</b>: Light slate blue-gray, a softer alternative to white.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/sage.png" alt="AdaLabs Sage"><br><b>Sage</b>: Pale sage green, restful like a studio wall.</td><td width="50%"><img src="assets/screenshots/blush.png" alt="AdaLabs Blush"><br><b>Blush</b>: Rose-tinted off-white with raspberry accents.</td></tr>
<tr><td width="50%"><img src="assets/screenshots/lavender.png" alt="AdaLabs Lavender"><br><b>Lavender</b>: Lilac-washed light with electric violet accents.</td><td width="50%"><img src="assets/screenshots/stone.png" alt="AdaLabs Stone"><br><b>Stone</b>: Dim warm concrete gray, low-glare light for all-day use.</td></tr>
</table>

</details>

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
npm run shots     # regenerate assets/preview.html and assets/screenshots/*.html
```

## Maintainer

**Abhishek Choudhury**: [www.abhishekchoudhury.com](https://www.abhishekchoudhury.com)

- Source: [github.com/yesabhishek/adalabs-terminal-theme](https://github.com/yesabhishek/adalabs-terminal-theme)
- Issues: [github.com/yesabhishek/adalabs-terminal-theme/issues](https://github.com/yesabhishek/adalabs-terminal-theme/issues)

MIT licensed.
