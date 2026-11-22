// Renders a VS Code-style workbench for each theme, using the colors in the
// generated themes/*.json files, into assets/screenshots/<slug>.html.
// Screenshot each page at 1280x800 to produce assets/screenshots/<slug>.png.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { palettes } from "./palettes.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "screenshots");
mkdirSync(outDir, { recursive: true });

const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function page(p) {
  const t = JSON.parse(readFileSync(join(root, "themes", `${p.slug}.json`), "utf8"));
  const c = t.colors, s = p.syntax;
  const k = (role, text, extra = "") => `<span style="color:${s[role]};${extra}">${esc(text)}</span>`;
  const v = (text) => `<span style="color:${c["editor.foreground"]}">${esc(text)}</span>`;
  const o = (text) => k("op", text);
  const br = (n, text) => `<span style="color:${c[`editorBracketHighlight.foreground${n}`]}">${esc(text)}</span>`;
  const it = "font-style:italic";

  const lines = [
    k("comment", "// Paint every surface from a single palette.", it),
    `${k("keyword", "import")} ${br(1, "{")} ${v("readFile")} ${br(1, "}")} ${k("keyword", "from")} ${k("string", '"node:fs/promises"')}${o(";")}`,
    `${k("keyword", "import")} ${k("keyword", "type")} ${br(1, "{")} ${k("type", "Palette")}${o(",")} ${k("type", "Theme")} ${br(1, "}")} ${k("keyword", "from")} ${k("string", '"./types"')}${o(";")}`,
    "",
    `${k("keyword", "const")} ${k("number", "MIN_CONTRAST")} ${o("=")} ${k("number", "4.5")}${o(";")}`,
    `${k("keyword", "const")} ${v("HEX")} ${o("=")} ${o("/")}${k("regex", "^#[0-9a-f]{6}$")}${o("/")}${k("keyword", "i")}${o(";")}`,
    "",
    `${k("keyword", "export")} ${k("keyword", "async")} ${k("keyword", "function")} ${k("func", "buildTheme")}${br(1, "(")}${k("prop", "palette", it)}${o(":")} ${k("type", "Palette")}${br(1, ")")}${o(":")} ${k("type", "Promise")}${o("<")}${k("type", "Theme")}${o(">")} ${br(1, "{")}`,
    `  ${k("keyword", "const")} ${v("base")} ${o("=")} ${k("keyword", "await")} ${k("func", "readFile")}${br(2, "(")}${k("string", "`themes/${")}${k("prop", "palette", it)}${o(".")}${k("prop", "slug")}${k("string", "}.json`")}${o(",")} ${k("string", '"utf8"')}${br(2, ")")}${o(";")}`,
    `  ${k("keyword", "for")} ${br(2, "(")}${k("keyword", "const")} ${br(3, "[")}${v("role")}${o(",")} ${v("color")}${br(3, "]")} ${k("keyword", "of")} ${k("type", "Object")}${o(".")}${k("func", "entries")}${br(3, "(")}${k("prop", "palette", it)}${o(".")}${k("prop", "syntax")}${br(3, ")")}${br(2, ")")} ${br(2, "{")}`,
    `    ${k("keyword", "if")} ${br(3, "(")}${o("!")}${v("HEX")}${o(".")}${k("func", "test")}${br(1, "(")}${v("color")}${br(1, ")")}${br(3, ")")} ${k("keyword", "throw")} ${k("keyword", "new")} ${k("type", "Error")}${br(3, "(")}${k("string", "`bad color: ${")}${v("role")}${k("string", "}`")}${br(3, ")")}${o(";")}`,
    `  ${br(2, "}")}`,
    `  ${k("keyword", "return")} ${br(2, "{")} ${k("prop", "name")}${o(":")} ${k("prop", "palette", it)}${o(".")}${k("prop", "name")}${o(",")} ${k("prop", "dark")}${o(":")} ${k("prop", "palette", it)}${o(".")}${k("prop", "type")} ${o("===")} ${k("string", '"dark"')}${o(",")} ${k("prop", "colors")}${o(":")} ${k("func", "JSON")}${o(".")}${k("func", "parse")}${br(3, "(")}${v("base")}${br(3, ")")} ${br(2, "}")}${o(";")}`,
    `${br(1, "}")}`,
    "",
    `${k("type", "@", it)}${k("type", "cached", it)}`,
    `${k("keyword", "class")} ${k("type", "Swatch")} ${k("keyword", "extends")} ${k("type", "Base")} ${br(1, "{")}`,
    `  ${k("keyword", "private")} ${k("prop", "hits")} ${o("=")} ${k("number", "0")}${o(";")}  ${k("comment", "// TODO: expose in status bar", it)}`,
    `${br(1, "}")}`,
  ];
  const activeLine = 9;
  const errorLine = 11;

  const editor = lines.map((l, i) => {
    const n = i + 1, active = n === activeLine;
    const lineBg = active ? c["editor.lineHighlightBackground"] : "transparent";
    let body = l || "&nbsp;";
    if (n === errorLine) body = `<span style="text-decoration:wavy underline ${c["editorError.foreground"]};text-underline-offset:3px">${body}</span>`;
    if (n === 5) body = `<span style="background:${c["editor.selectionBackground"]}">${body}</span>`;
    const indent = l.match(/^ */)[0].length;
    const guides = indent >= 4 ? `<i class="guide" style="left:${12 + 2 * 8.4}px;background:${c["editorIndentGuide.background1"]}"></i>` : "";
    return `<div class="ln" style="background:${lineBg}"><span class="num" style="color:${active ? c["editorLineNumber.activeForeground"] : c["editorLineNumber.foreground"]}">${n}</span><span class="code">${guides}${body}${active ? `<b class="cursor" style="background:${c["editorCursor.foreground"]}"></b>` : ""}</span></div>`;
  }).join("");

  const files = [
    ["src", "folder", 0, null, true],
    ["build.ts", "file", 1, c["gitDecoration.modifiedResourceForeground"], false, "M", true],
    ["palettes.ts", "file", 1, null],
    ["preview.ts", "file", 1, c["gitDecoration.untrackedResourceForeground"], false, "U"],
    ["types.ts", "file", 1, null],
    ["themes", "folder", 0, null, false],
    ["assets", "folder", 0, null, false],
    ["legacy.ts", "file", 0, c["gitDecoration.deletedResourceForeground"], false, "D"],
    ["node_modules", "folder", 0, c["gitDecoration.ignoredResourceForeground"], false],
    ["package.json", "file", 0, c["gitDecoration.modifiedResourceForeground"], false, "M"],
    ["README.md", "file", 0, null],
  ].map(([name, kind, depth, color, open, badge, selected]) => {
    const fg = color || c["sideBar.foreground"];
    const bg = selected ? c["list.activeSelectionBackground"] : "transparent";
    const chev = kind === "folder" ? (open ? "⌄" : "›") : "";
    const icon = kind === "folder" ? "" : `<i class="fi" style="background:${name.endsWith(".ts") ? s.keyword : name.endsWith(".json") ? s.number : s.func}"></i>`;
    return `<div class="row" style="padding-left:${14 + depth * 16}px;background:${bg};color:${fg}"><span class="chev" style="color:${c["icon.foreground"]}">${chev}</span>${icon}<span>${name}</span>${badge ? `<span class="badge" style="color:${fg}">${badge}</span>` : ""}</div>`;
  }).join("");

  const A = (key) => c[`terminal.ansi${key}`];
  const term = [
    `<span style="color:${A("Green")}">➜</span> <span style="color:${A("Cyan")}">adalabs</span> <span style="color:${A("Blue")}">git:(</span><span style="color:${A("Red")}">main</span><span style="color:${A("Blue")}">)</span> <span style="color:${A("Yellow")}">✗</span> npm test`,
    `<span style="color:${A("BrightBlack")}">&gt; vitest run</span>`,
    ` <span style="color:${A("Green")}">✓</span> palettes.test.ts <span style="color:${A("BrightBlack")}">(20 tests)</span> <span style="color:${A("Yellow")}">41ms</span>`,
    ` <span style="color:${A("Red")}">✗</span> build.test.ts <span style="color:${A("BrightBlack")}">&gt;</span> rejects invalid hex <span style="color:${A("Magenta")}">AssertionError</span>`,
    ` <span style="color:${A("BrightBlack")}">Tests</span>  <span style="color:${A("Red")}">1 failed</span> <span style="color:${A("BrightBlack")}">|</span> <span style="color:${A("Green")}">20 passed</span> <span style="color:${A("BrightBlack")}">(21)</span>`,
    `<span style="color:${A("Green")}">➜</span> <span style="color:${A("Cyan")}">adalabs</span> <b class="tcur" style="background:${c["terminalCursor.foreground"]}"></b>`,
  ].join("\n");

  const actIcons = ["M4 5h11M4 10h16M4 15h9", "M10 4a6 6 0 1 1 0 12a6 6 0 0 1 0-12zM15 15l5 5", "M6 4v12M6 16a2 2 0 1 0 0 .1M16 8a2 2 0 1 0 0 .1M16 10c0 4-10 2-10 6", "M6 4l12 8-12 8z", "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"]
    .map((d, i) => `<div class="act" style="border-left:2px solid ${i === 0 ? c["activityBar.activeBorder"] : "transparent"}"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="${i === 0 ? c["activityBar.foreground"] : c["activityBar.inactiveForeground"]}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg></div>`).join("");

  const tab = (name, active, dot) => `<div class="tab" style="background:${active ? c["tab.activeBackground"] : c["tab.inactiveBackground"]};color:${active ? c["tab.activeForeground"] : c["tab.inactiveForeground"]};border-right:1px solid ${c["tab.border"]};${active ? `box-shadow:inset 0 1px 0 ${c["tab.activeBorderTop"]}` : `border-bottom:1px solid ${c["editorGroupHeader.tabsBorder"]}`}"><i class="fi" style="background:${name.endsWith(".ts") ? s.keyword : s.number}"></i>${name}${dot ? `<span style="color:${c["gitDecoration.modifiedResourceForeground"]};margin-left:8px">●</span>` : ""}</div>`;

  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}body{margin:0;width:1280px;height:800px;overflow:hidden;font:13px -apple-system,system-ui,sans-serif;display:grid;grid-template-rows:34px 1fr 24px;background:${c["editor.background"]}}
.title{display:flex;align-items:center;justify-content:center;position:relative;background:${c["titleBar.activeBackground"]};color:${c["titleBar.activeForeground"]};border-bottom:1px solid ${c["titleBar.border"]}}
.lights{position:absolute;left:14px;display:flex;gap:8px}.lights i{width:12px;height:12px;border-radius:50%}
.cc{width:420px;height:22px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;background:${c["commandCenter.background"]};border:1px solid ${c["commandCenter.border"]};color:${c["commandCenter.foreground"]}}
.main{display:grid;grid-template-columns:48px 250px 1fr;min-height:0}
.actbar{background:${c["activityBar.background"]};border-right:1px solid ${c["activityBar.border"]};padding-top:6px}.act{height:48px;display:flex;align-items:center;justify-content:center}
.side{background:${c["sideBar.background"]};border-right:1px solid ${c["sideBar.border"]};color:${c["sideBar.foreground"]}}
.sh{padding:10px 20px;font-size:11px;letter-spacing:.06em;color:${c["sideBarTitle.foreground"]}}
.sec{padding:4px 12px;font-size:11px;font-weight:700;color:${c["sideBarSectionHeader.foreground"]};background:${c["sideBarSectionHeader.background"]};border-top:1px solid ${c["sideBarSectionHeader.border"]}}
.row{display:flex;align-items:center;height:22px;font-size:13px;gap:6px}.chev{width:10px;font-size:13px}.badge{margin-left:auto;margin-right:14px;font-size:11px}
.fi{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:2px;opacity:.9}
.work{display:grid;grid-template-rows:35px 22px 1fr 230px;min-width:0}
.tabs{display:flex;background:${c["editorGroupHeader.tabsBackground"]}}.tabs .fill{flex:1;border-bottom:1px solid ${c["editorGroupHeader.tabsBorder"]}}
.tab{display:flex;align-items:center;gap:6px;padding:0 16px;font-size:13px}
.crumbs{padding:3px 16px;font-size:12px;color:${c["breadcrumb.foreground"]};background:${c["breadcrumb.background"]}}
.editor{background:${c["editor.background"]};padding-top:4px;font:13.5px/21px "SF Mono",Menlo,monospace;overflow:hidden;position:relative}
.ln{display:flex;white-space:pre;height:21px}.num{width:56px;text-align:right;padding-right:22px;flex:none}.code{position:relative}
.guide{position:absolute;top:0;bottom:0;width:1px}
.cursor{display:inline-block;width:2px;height:18px;vertical-align:-3px;margin-left:1px}
.mini{position:absolute;right:14px;top:6px;width:60px;opacity:.55}.mini i{display:block;height:2px;margin:2px 0;border-radius:1px}
.panel{background:${c["panel.background"]};border-top:1px solid ${c["panel.border"]};display:grid;grid-template-rows:34px 1fr}
.ptabs{display:flex;gap:22px;padding:0 20px;align-items:center;font-size:11px;letter-spacing:.05em;color:${c["panelTitle.inactiveForeground"]}}
.ptabs .on{color:${c["panelTitle.activeForeground"]};border-bottom:1px solid ${c["panelTitle.activeBorder"]};padding:8px 0 7px}
.term{margin:0;padding:6px 20px;font:13px/20px "SF Mono",Menlo,monospace;color:${c["terminal.foreground"]};background:${c["terminal.background"]};white-space:pre}
.tcur{display:inline-block;width:8px;height:16px;vertical-align:-3px}
.status{display:flex;align-items:center;gap:16px;padding:0 10px;font-size:12px;background:${c["statusBar.background"]};color:${c["statusBar.foreground"]};border-top:1px solid ${c["statusBar.border"]}}
.remote{background:${c["statusBarItem.remoteBackground"]};color:${c["statusBarItem.remoteForeground"]};padding:0 10px;height:100%;display:flex;align-items:center;margin-left:-10px}
</style></head><body>
<div class="title"><div class="lights"><i style="background:#FF5F57"></i><i style="background:#FEBC2E"></i><i style="background:#28C840"></i></div><div class="cc">⌕ adalabs-terminal</div></div>
<div class="main">
  <div class="actbar">${actIcons}</div>
  <div class="side"><div class="sh">EXPLORER</div><div class="sec">⌄ ADALABS-TERMINAL</div>${files}<div class="sec" style="margin-top:14px">› OUTLINE</div><div class="sec">› TIMELINE</div></div>
  <div class="work">
    <div class="tabs">${tab("build.ts", true, true)}${tab("palettes.ts", false)}${tab("package.json", false)}<div class="fill"></div></div>
    <div class="crumbs">src › build.ts › <span style="color:${s.func}">ƒ</span> buildTheme</div>
    <div class="editor">${editor}<div class="mini">${lines.map((l) => `<i style="width:${Math.min(60, l.replace(/<[^>]+>/g, "").length / 1.6)}px;background:${l ? c["editor.foreground"] : "transparent"}"></i>`).join("")}</div></div>
    <div class="panel"><div class="ptabs"><span>PROBLEMS <span style="background:${c["badge.background"]};color:${c["badge.foreground"]};border-radius:9px;padding:1px 6px">1</span></span><span>OUTPUT</span><span>DEBUG CONSOLE</span><span class="on">TERMINAL</span></div><pre class="term">${term}</pre></div>
  </div>
</div>
<div class="status"><span class="remote">&gt;&lt; ${t.name}</span><span>⎇ main*</span><span><span style="color:${c["editorError.foreground"]}">⊗ 1</span>  <span style="color:${c["editorWarning.foreground"]}">⚠ 0</span></span><span style="margin-left:auto">Ln 9, Col 42</span><span>Spaces: 2</span><span>UTF-8</span><span>TypeScript</span></div>
</body></html>\n`;
}

for (const p of palettes) writeFileSync(join(outDir, `${p.slug}.html`), page(p));
console.log(`wrote ${palettes.length} workbench pages to assets/screenshots/`);
