# AdaLabs Terminal

Pure-black terminal-inspired themes for focused code.

AdaLabs Terminal is a family of VS Code themes built around a true black editor surface, careful contrast, and predictable syntax colors. It is designed for OLED displays, late-night sessions, and developers who want terminal-inspired UI chrome without losing code structure.

## Themes

- **AdaLabs Terminal**: Flagship pure-black theme with crisp cyan and white accents.
- **AdaLabs Terminal Original**: Classic VS Code-inspired syntax adapted to a true black canvas.
- **AdaLabs Terminal Italics**: Original palette with restrained italic styling for comments, keywords, and selected symbols.
- **AdaLabs Terminal Amla**: Green and teal accents on a pure-black base.
- **AdaLabs Terminal Yuzu**: Balanced blue, purple, and warm syntax accents on black UI chrome.
- **AdaLabs Terminal Pitaya**: Vivid cyan, pink, green, and yellow syntax colors with sharp contrast.

## Install

1. Open the Extensions view in VS Code.
2. Search for **AdaLabs Terminal**.
3. Install the extension.
4. Run **Preferences: Color Theme** and choose one of the AdaLabs Terminal variants.

For local testing from this repository:

```sh
npx @vscode/vsce package --no-dependencies
code --install-extension adalabs-terminal-1.0.0.vsix
```

## Semantic Highlighting

AdaLabs Terminal enables semantic highlighting and includes semantic token colors for modern language servers. This keeps TypeScript, JavaScript, Rust, Python, and other language-server-backed syntax closer to the intended palette.

If you prefer only TextMate token colors, you can disable semantic highlighting in your VS Code settings:

```json
{
  "editor.semanticHighlighting.enabled": false
}
```

## Design Notes

AdaLabs Terminal uses `#000000` for the primary editor and workbench surfaces. Supporting panels, menus, and widgets use near-black shades only where separation is needed. Each variant keeps the same UI structure so switching themes changes the mood without making the editor feel unfamiliar.

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
