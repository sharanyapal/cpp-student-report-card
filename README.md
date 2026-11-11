# Student Report Card

> **Turning marks into an organized academic record.**

**Classic console C++** · **Student records** · **Algorithm & state practice**

---

## The program

Create student reports with grades calculated from five subjects.

**Explore:** Inspect student record entry, grade calculations and report output.

## Files

| Path | Purpose |
|:--|:--|
| [`Turbo C++ DOS`](./Turbo%20C++%20DOS) | Additional project resources |
| [`Visual C++ 2010`](./Visual%20C++%202010) | Additional project resources |
| [`docs`](./docs) | Additional project resources |
| [`run-in-browser.html`](./run-in-browser.html) | Additional project resources |


## Running it

Read the C++ entry point in the source file, then compile using an appropriate C++ toolchain. Some original source variants target Turbo C++/DOS and may need compatibility adjustments before modern compilation.

## What to study

- Input validation and console output.
- State transitions and termination conditions.
- Porting older compiler-specific code without changing game or business rules.

## Usage boundary

This is an educational console program. Use invented data for testing, not personal records or real financial information.

<details><summary><strong>Original project guide (preserved)</strong></summary>

# Student Report Card

Create student reports with grades calculated from five subjects.

## Run in your browser (no setup)

**Open [`run-in-browser.html`](run-in-browser.html)** or double-click [`docs/index.html`](docs/index.html) after extracting the repository. You can also deploy the `docs/` folder to any static host.

> The browser playground is an independently written **JavaScript adaptation** of this repository's original C++ logic. It is not a C++ interpreter or WebAssembly binary. Original C++ sources are retained unchanged, and the HTML, CSS and JS demo is immediately usable offline.

### Static GitHub Pages

Go to **Settings → Pages → Build and deployment → Deploy from a branch**; choose `main` and `/docs`, then Save. Your site's intended address is `https://sharanyapal.github.io/cpp-student-report-card/` after GitHub confirms a successful deployment.

The previous WebAssembly GitHub Actions workflow is not required for this standalone browser build. The included bulk upload script removes just that previous demo workflow and the superseded `web/` adapter from the **eight named repositories**, without deleting other project files.

### Original C++ source

- [Visual C++ 2010/student-report-card-project.cpp](Visual%20C%2B%2B%202010/student-report-card-project.cpp)
- All other historical C++, data and document files are kept unchanged.

### Browser features

- Interactive terminal-style output with keyboard input, restart, and downloadable transcript
- Games follow the original scoring, turns and rule logic
- Data apps use `localStorage` for records within the same browser, replacing local `.DAT` files; records can be cleared explicitly
- Files: `docs/index.html`, `docs/style.css`, `docs/terminal.js`, `docs/program.js`

### Note

This repository contains archived, third-party classroom-style C++ examples from a previously supplied collection. Review attribution and redistribution rights before publishing as your own original work.

</details>

---

<sub>Browse [all C++ and engineering repositories](https://github.com/sharanyapal?tab=repositories).</sub>
