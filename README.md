# AdaLabs Terminal

Ten readable VS Code themes with simple dark and light shade ranges.

AdaLabs Terminal is built for switching between screens, rooms, and display types without relearning syntax colors. The family now uses five dark shades and five light shades, all with the same token mapping for keywords, functions, types, strings, numbers, comments, filenames, line numbers, snippets, diagnostics, git states, and Markdown/code block highlighting.

## Themes

Shade numbers increase with background brightness and softness.

### Dark

- **AdaLabs Dark 1**: True black `#000000` for OLED displays and high-focus editing.
- **AdaLabs Dark 2**: Near-black `#050505` with slightly softer panel separation.
- **AdaLabs Dark 3**: Balanced graphite black `#0B0B0B` for long reading sessions.
- **AdaLabs Dark 4**: Softer charcoal black `#111111` with lower contrast across the workbench.
- **AdaLabs Dark 5**: Softest dark `#181818` for LCD/TN panels and brighter rooms.

### Light

- **AdaLabs Light 1**: Clean white `#FFFFFF` for bright LCD/TN panels.
- **AdaLabs Light 2**: Cool off-white `#F8FAFC` with gentle surface contrast.
- **AdaLabs Light 3**: Balanced light `#F3F4F6` for everyday document and code reading.
- **AdaLabs Light 4**: Softer light `#ECEFF3` for reduced glare.
- **AdaLabs Light 5**: Softest light `#E5E9EF` for daylight use and long review sessions.

## Recommendations

- Choose **AdaLabs Dark 1** for OLED true black.
- Choose **AdaLabs Dark 3** or **AdaLabs Dark 4** for lower-contrast long reading.
- Choose **AdaLabs Light 1** or **AdaLabs Light 2** for bright LCD/TN panels.
- Choose **AdaLabs Light 4** or **AdaLabs Light 5** for softer daylight use.

## Syntax Palette

All ten themes use a consistent syntax model:

- Keywords: blue
- Functions and methods: cyan
- Types and classes: violet
- Strings: green
- Numbers and constants: amber
- Parameters and properties: slate-blue
- Comments: muted neutral with readable contrast
- Diagnostics: red, amber, and blue

## Install

1. Open the Extensions view in VS Code.
2. Search for **AdaLabs Terminal**.
3. Install the extension.
4. Run **Preferences: Color Theme** and choose an AdaLabs Dark or AdaLabs Light shade.

For local testing from this repository:

```sh
npx @vscode/vsce package --no-dependencies
code --install-extension adalabs-terminal-1.1.0.vsix
```

## Semantic Highlighting

AdaLabs Terminal enables semantic highlighting and includes semantic token colors for modern language servers. This keeps TypeScript, JavaScript, Rust, Python, and other language-server-backed syntax aligned with the same palette across every shade.

If you prefer only TextMate token colors, you can disable semantic highlighting in your VS Code settings:

```json
{
  "editor.semanticHighlighting.enabled": false
}
```

## Design Notes

The dark range moves from OLED true black to neutral graphite surfaces, with black and gray UI accents instead of blue-tinted chrome. The light range moves from clean white to soft daylight grays. Each theme keeps the same workbench structure and syntax mapping so switching shades changes brightness and contrast, not the meaning of the colors.

## Links

- Website: [abhishekchoudhury.com](https://abhishekchoudhury.com/)
- Source: [github.com/yesabhishek/adalabs-terminal-theme](https://github.com/yesabhishek/adalabs-terminal-theme)
- Issues: [github.com/yesabhishek/adalabs-terminal-theme/issues](https://github.com/yesabhishek/adalabs-terminal-theme/issues)

## Development

Validate the theme JSON:

```sh
for file in package.json themes/*.json; do node -e "JSON.parse(require('fs').readFileSync(process.argv[1], 'utf8'))" "$file"; done
```

Package the extension:

```sh
npx @vscode/vsce package --no-dependencies
```
