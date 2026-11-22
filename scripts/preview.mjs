// Renders assets/preview.html: a swatch sheet of every theme with a code sample.
// Screenshot it (e.g. headless Chrome) to produce assets/preview.png.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { palettes } from "./palettes.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const card = (p) => {
  const s = p.syntax;
  const c = (color, text) => `<span style="color:${color}">${text}</span>`;
  const code = [
    `${c(s.comment, "// " + p.blurb.toLowerCase().replace(/\.$/, ""))}`,
    `${c(s.keyword, "export async function")} ${c(s.func, "render")}${c(s.op, "(")}${c(s.prop, "<i>theme</i>")}${c(s.op, ":")} ${c(s.type, "Theme")}${c(s.op, ") {")}`,
    `  ${c(s.keyword, "const")} ${c(p.fg, "size")} ${c(s.op, "=")} ${c(s.number, "20")}${c(s.op, ";")}`,
    `  ${c(s.keyword, "return")} ${c(p.fg, "ui")}${c(s.op, ".")}${c(s.func, "paint")}${c(s.op, "(")}${c(s.string, `"${p.slug}"`)}${c(s.op, ", /")}${c(s.regex, "\\w+")}${c(s.op, "/);")}`,
    `${c(s.op, "}")}`,
  ].join("\n");
  const swatches = [p.accent, s.keyword, s.func, s.type, s.string, s.number, p.ansi.red]
    .map((x) => `<i style="background:${x}"></i>`).join("");
  return `<div class="card" style="background:${p.bg};border-color:${p.border}">
  <div class="bar" style="background:${p.bg2};border-color:${p.border}">
    <b style="color:${p.fgStrong}">${p.name}</b><span class="sw">${swatches}</span>
  </div>
  <pre style="color:${p.fg}">${code}</pre>
  <div class="term" style="background:${p.bg};border-color:${p.border};color:${p.fg}"><span style="color:${p.ansi.green}">➜</span> <span style="color:${p.ansi.cyan}">~/app</span> <span style="color:${p.ansi.blue}">git:(</span><span style="color:${p.ansi.red}">main</span><span style="color:${p.ansi.blue}">)</span> <span style="color:${p.ansi.yellow}">npm</span> test</div>
</div>`;
};

const dark = palettes.filter((p) => p.type === "dark").map(card).join("\n");
const light = palettes.filter((p) => p.type === "light").map(card).join("\n");

writeFileSync(join(root, "assets", "preview.html"), `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;padding:28px;background:linear-gradient(90deg,#0b0b0c 50%,#efeae0 50%);font-family:-apple-system,system-ui,sans-serif;width:1544px}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.col{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.card{border:1px solid;border-radius:12px;overflow:hidden;box-shadow:0 6px 18px #0003}
.bar{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid;font-size:13px}
.sw i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-left:4px}
pre{margin:0;padding:10px 12px 6px;font:11.5px/1.55 "SF Mono",Menlo,monospace;white-space:pre}
.term{margin:0 12px 10px;padding:5px 8px;border-top:1px dashed;font:11px "SF Mono",Menlo,monospace}
</style></head><body><div class="cols"><div class="col">${dark}</div><div class="col">${light}</div></div></body></html>\n`);
console.log("wrote assets/preview.html");
