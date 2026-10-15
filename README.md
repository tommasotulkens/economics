# tommasotulkens.github.io/economics

Personal academic website of Tommaso Tulkens. Jekyll site, hosted on GitHub Pages.
Pushing to `main` rebuilds and republishes the site — there is nothing else to run.

**Live:** <https://tommasotulkens.github.io/economics/>

---

## How the site is put together

Content lives in **YAML data files**, not in HTML. To change what appears on a page
you almost always edit a file in `_data/` — you should never have to touch a layout.

```
_data/papers.yml      research output      → /research/ (and the homepage)
_data/teaching.yml    courses + materials  → /teaching/
_data/media.yml       press & opinion      → /other/
_data/people.yml      coauthor websites    → links on coauthor names
_config.yml           title, nav, email, affiliations

files/papers/         PDFs of papers and slides
files/teaching/       PDFs handed out in courses
files/CV_tulkens.pdf  the CV linked from the homepage and footer

_layouts/  _includes/  assets/css/main.css   the design — rarely needs editing
```

---

## Uploading a PDF for one of your courses

Two steps. Both can be done entirely in the browser on github.com.

### 1. Put the PDF in the repository

**In the browser** — open [`files/teaching/`](files/teaching), click
**Add file → Upload files**, drag the PDF in, and click **Commit changes**.

**From your machine** — copy it into the folder and push:

```bash
cp ~/Dropbox/.../my-slides.pdf files/teaching/public-sector-lecture-2.pdf
git add files/teaching/public-sector-lecture-2.pdf
git commit -m "Add lecture 2 slides"
git push
```

Name files in lower case with hyphens and no spaces — `public-sector-lecture-2.pdf`,
not `Lecture 2 (final) v3.pdf`. Spaces and accents break links.

### 2. Add one entry to `_data/teaching.yml`

Find the course and add a line under its `materials:` list:

```yaml
- code: "FEB13065"
  title: "Seminar Economics of the Public Sector"
  ...
  materials:
    - name: "Q&A session slides"
      file: "/files/teaching/public-sector-qa.pdf"
      tag: "PDF"
    - name: "Lecture 2 slides"            # ←  new
      file: "/files/teaching/public-sector-lecture-2.pdf"
      tag: "PDF"
```

- `name` — what the visitor reads.
- `file` — the path, always starting with `/files/teaching/`. Do **not** put the
  `/economics` prefix in front; Jekyll adds it.
- `tag` — the small grey label on the right. Optional, defaults to `PDF`.

Commit, and about a minute later the link is live. A course with no materials yet
shows a neutral “Course materials will be posted here.” line rather than an empty gap.

### Adding a whole new course

Append a new block to `_data/teaching.yml`:

```yaml
- code: "FEB12345"
  title: "Name of the course"
  meta: "Master · Erasmus School of Economics · Block 2"
  description: >-
    Two or three sentences on what the course covers.
  materials:
    - name: "Syllabus"
      file: "/files/teaching/name-syllabus.pdf"
```

---

## Adding a paper, a working paper PDF, or slides

Put PDFs in `files/papers/`, then edit `_data/papers.yml`:

```yaml
- title: "Title of the paper"
  coauthors: ["A. Coauthor", "B. Coauthor"]   # → "with A. Coauthor and B. Coauthor"
  status: "Work in progress"      # small label above the title
  year: 2026
  paper:  "/files/papers/short-name-paper.pdf"    # → "Working paper" button
  slides: "/files/papers/short-name-slides.pdf"   # → "Slides" button
  abstract: >-
    The abstract. Indent every line by two spaces; blank lines are not allowed
    inside a `>-` block.
```

Every field except `title` is optional, and each one controls a button:

| Field        | What appears                                                     |
|--------------|------------------------------------------------------------------|
| `abstract`   | an **Abstract** button that folds the text open                   |
| `paper`      | a **Working paper** button that downloads the PDF                 |
| `slides`     | a **Slides** button that downloads the PDF                        |
| `on_request` | `true` → a muted “Draft available on request” chip instead of a dead link |

Coauthor names link to their websites when the name is listed in
`_data/people.yml` (one `"Name": "https://..."` line per person, spelled exactly as
in `coauthors:`). A name not listed there simply shows as plain text.

Papers appear in the order they are listed, and the same list feeds the short
research preview on the homepage.

---

## Other common edits

- **Navigation labels and order** — the `nav:` block in `_config.yml`.
- **Email address** — `author.email` in `_config.yml`, written with `<at>` instead
  of `@` (e.g. `name<at>domain.nl`) so it is never shown whole; it updates the homepage,
  the footer and the teaching page at once.
- **A new CV** — overwrite `files/CV_tulkens.pdf`, keeping the filename.
- **Colours and type** — the `:root` block at the top of `assets/css/main.css`.
  Light and dark palettes are both defined there.

---

## Previewing locally (optional)

```bash
gem install --user-install jekyll:3.9.5 jekyll-seo-tag jekyll-sitemap
~/.gem/ruby/2.6.0/bin/jekyll serve
```

Then open <http://localhost:4000/economics/>.
