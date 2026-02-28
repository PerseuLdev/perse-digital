const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replacements for primary (#38b6ff) and accent (#ffde59)

// 1. Raw OKLCH with opacity
css = css.replace(/oklch\(0\.45 0\.18 260 \/ ([\d.]+)%\)/g, (match, op) => `rgba(56, 182, 255, ${op / 100})`);
css = css.replace(/oklch\(0\.60 0\.18 260 \/ ([\d.]+)%\)/g, (match, op) => `rgba(56, 182, 255, ${op / 100})`);
css = css.replace(/oklch\(0\.65 0\.15 245 \/ ([\d.]+)%\)/g, (match, op) => `rgba(255, 222, 89, ${op / 100})`);
css = css.replace(/oklch\(0\.70 0\.15 245 \/ ([\d.]+)%\)/g, (match, op) => `rgba(255, 222, 89, ${op / 100})`);

// 2. Raw OKLCH without opacity
css = css.replace(/oklch\(0\.45 0\.18 260\)/g, '#38b6ff');
css = css.replace(/oklch\(0\.60 0\.18 260\)/g, '#38b6ff');
css = css.replace(/oklch\(0\.65 0\.15 245\)/g, '#ffde59');
css = css.replace(/oklch\(0\.70 0\.15 245\)/g, '#ffde59');

// 3. Update Hover colors
css = css.replace(/oklch\(0\.50 0\.20 260\)/g, '#279ae0'); // Light Hover
css = css.replace(/oklch\(0\.65 0\.20 260\)/g, '#279ae0'); // Dark Hover
// Button hover utility class in dark mode: oklch(0.68 0.20 260)
css = css.replace(/oklch\(0\.68 0\.20 260\)/g, '#279ae0'); 
css = css.replace(/oklch\(0\.38 0\.20 260\)/g, '#279ae0'); // Primary button hover in light mode

// 4. Update Backgrounds & Foregrounds
// Light Mode Back/Fore
css = css.replace(/--background: oklch\(0\.99 0\.002 260\);/g, '--background: #ffffff;');
css = css.replace(/--foreground: oklch\(0\.12 0\.02 260\);/g, '--foreground: #000000;');

// Dark Mode Back/Fore
css = css.replace(/--background: oklch\(0\.10 0\.02 260\);/g, '--background: #000000;');
css = css.replace(/--foreground: oklch\(0\.96 0\.01 260\);/g, '--foreground: #ffffff;');

// 5. Hardcoded popovers & cards to black/white
css = css.replace(/--card: oklch\(1 0 0 \/ 70%\);/g, '--card: rgba(255, 255, 255, 0.7);');
css = css.replace(/--card-foreground: oklch\(0\.12 0\.02 260\);/g, '--card-foreground: #000000;');
css = css.replace(/--card: oklch\(0\.15 0\.02 260 \/ 70%\);/g, '--card: rgba(0, 0, 0, 0.7);');
css = css.replace(/--card-foreground: oklch\(0\.96 0\.01 260\);/g, '--card-foreground: #ffffff;');

css = css.replace(/--popover: oklch\(0\.99 0\.002 260\);/g, '--popover: #ffffff;');
css = css.replace(/--popover-foreground: oklch\(0\.12 0\.02 260\);/g, '--popover-foreground: #000000;');
css = css.replace(/--popover: oklch\(0\.13 0\.02 260\);/g, '--popover: #111111;');
css = css.replace(/--popover-foreground: oklch\(0\.96 0\.01 260\);/g, '--popover-foreground: #ffffff;');

fs.writeFileSync(cssPath, css);
console.log('CSS transformed successfully.');
