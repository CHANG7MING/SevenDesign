#!/usr/bin/env node

import { mkdir } from "node:fs/promises";
import process from "node:process";

function readArgs(argv) {
  const options = {
    url: "http://127.0.0.1:3000/",
    out: "artifacts/visual-qa",
    path: "/",
  };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--url") options.url = argv[++index];
    else if (value === "--out") options.out = argv[++index];
    else if (value === "--path") options.path = argv[++index];
    else if (value === "--help") {
      console.log(
        "Usage: capture-playwright.mjs [--url URL] [--path /route] [--out DIR]",
      );
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${value}`);
    }
  }
  return options;
}

const options = readArgs(process.argv.slice(2));
let playwright;
try {
  playwright = await import("playwright");
} catch {
  console.error(
    "Playwright is not installed. Install it in the host project or run this script through the project's Playwright tool.",
  );
  process.exit(2);
}

await mkdir(options.out, { recursive: true });
const browser = await playwright.chromium.launch({ headless: true });
const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];
const captures = [];

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const target = new URL(options.path, options.url).toString();
    await page.goto(target, { waitUntil: "networkidle" });
    const screenshot = `${options.out}/${viewport.name}.png`;
    await page.screenshot({ path: screenshot, fullPage: true });
    captures.push({ ...viewport, url: target, screenshot });
    await page.close();
  }

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const target = new URL(options.path, options.url).toString();
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(target, { waitUntil: "networkidle" });
    const screenshot = `${options.out}/${viewport.name}-reduced-motion.png`;
    await page.screenshot({ path: screenshot, fullPage: true });
    captures.push({
      ...viewport,
      reducedMotion: true,
      url: target,
      screenshot,
    });
    await page.close();
  }
} finally {
  await browser.close();
}

console.log(
  JSON.stringify(
    {
      route: options.path,
      output: options.out,
      viewports: captures,
      findingsReport: `${options.out}/report.json`,
    },
    null,
    2,
  ),
);
