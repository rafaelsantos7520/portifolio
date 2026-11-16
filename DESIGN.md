---
name: Rafael Gomes
description: Brazilian coffee-export sack — oatmeal jute ground, carbon stencil ink, one aniline blue.
colors:
  ink: "#16140F"
  accent: "#1848C3"
  accent-deep: "#0F2E8A"
  jute: "#D6CFC0"
  paper: "#EDE8DC"
  muted: "#5C564C"
  ghost: "rgba(22, 20, 15, 0.38)"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 11vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "0"
  display-lot:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 8vw, 6.5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Atkinson Hyperlegible, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Atkinson Hyperlegible, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  stencil:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  stamp: "2px"
spacing:
  1: "0.5rem"
  3: "2rem"
  4: "3rem"
  section: "7rem"
  sectionMobile: "4rem"
  container: "1.5rem"
  containerMobile: "1.125rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.stencil}"
    rounded: "{rounded.stamp}"
    padding: "0.4rem 0.85rem"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.accent-deep}"
    typography: "{typography.stencil}"
    rounded: "{rounded.stamp}"
    padding: "0.4rem 0.85rem"
  button-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.35rem 0"
  button-nav-hover:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    padding: "0.35rem 0"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "0.55rem 0.7rem"
  button-icon-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.stamp}"
    padding: "0.55rem 0.7rem"
  skip-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    padding: "0.65rem 1rem"
  lot-featured:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-lot}"
    padding: "0 0 1.35rem"
  lot:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "1.1rem 0"
  tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "2.25rem 1.5rem 1.25rem"
    width: "28rem"
---

# Design System: Rafael Gomes

## Overview

**Creative North Star: "The Brazilian Coffee-Export Sack"**

The page is one sack on a dock table. Cool oatmeal jute is the plate — a tiled fiber photograph over a flat oatmeal fill — and every mark is stencil ink pressed into that cloth. Rafael's name is the brand stencil, letters of each word stretched across the full width. His apps are lots stamped at unequal scale. Contact is a paper tag tied on with twine. The whole surface stays in the same material; nothing sits on a second theme, a dark hero, or a card grid.

Density is sparse. Jute shows between marks. Type is either a condensed industrial display (self-hosted Big Shoulders Display, 700–800, uppercase) or Atkinson Hyperlegible prose. Color is carbon ink, oatmeal, sack paper, and a single aniline export blue used as a stencil, never as a wash. Motion is one ink soak on first paint, then snap — lots strike without tweening.

Confirmed visual rejections, from the shipped page and the product brief: purple-on-black Kenzi gradients, Inter or Roboto as brand, identical rounded cards with faint borders, a circular hero avatar, and drop shadows.

**Key Characteristics:**
- Full-bleed oatmeal jute, fiber tiled at 320px
- Carbon stencil ink with one aniline blue
- Name letters spaced as cells across the sack
- Lots ranked by scale, not by equal cards
- 2px dashed ink stitches as section breaks
- Paper contact tag with a twine grommet
- Rectangular inked portrait stamp
- Flat: no shadows; strike and texture do depth

## Colors

A dock-table palette: warm oatmeal cloth, near-black stencil, and one chemical blue.

### Primary
- **Aniline Export Blue** (`accent`): The only accent. Dashed primary action, struck language marks (`TYPESCRIPT`), link hover, `:focus-visible` ring, caret, and text selection. At rest it never fills a large surface.

### Neutral
- **Carbon Stencil Ink** (`ink`): Body text, rules, lot titles, nav, scrollbar thumb, icon-button hover fill.
- **Cool Oatmeal Jute** (`jute`): Page and nav fill under the tiled fiber. Selection text sits on this ground.
- **Sack Paper** (`paper`): Contact tag fill, skip-link text, icon-button hover text.
- **Burlap Tan** (`muted`): Secondary prose ("Peças", stack and contact ledes).
- **Ghost Ink** (`ghost`): Inactive lots during strike — the same ink at 38% opacity.
- **Dock Navy** (`accent-deep`): Hover darkening of the aniline stencil (primary button, tag links).

### Named Rules
**The One Aniline Rule.** Blue is a stencil, not a theme. It marks the action, the struck language, hover, focus, caret, and selection. Ink and jute do everything else. A second brand color (network pinks, GitHub black, leftover Kenzi purple) is out.

## Typography

**Display Font:** Big Shoulders Display (self-hosted woff2, variable 600–800; fallback Arial Narrow, sans-serif)
**Body Font:** Atkinson Hyperlegible (self-hosted woff2, 400 / 400 italic / 700; fallback Georgia, serif)

**Character:** Condensed industrial condensed marks against a hyperlegible book face. The display is a stencil; the body is a readable tag note. They do not trade jobs.

### Hierarchy
- **Display** (800, `clamp(3.25rem, 11vw, 7.5rem)`, line-height 0.82; mobile `clamp(2.85rem, 18vw, 3.75rem)` / 0.84): The name. Uppercase. Tracking is 0; each letter is its own cell, `space-between` across the sack.
- **Display lot** (800, `clamp(2.4rem, 8vw, 6.5rem)`, line-height 0.86): Featured project title (MotorsShop). Uppercase. Outranks the other lots by size.
- **Headline** (800, `clamp(2rem, 4.5vw, 3.25rem)`, line-height 1.05, tracking `-0.03em`): Section marks (`COMPOSIÇÃO`, `VAMOS CONVERSAR`). Uppercase.
- **Title** (700, `clamp(1.5rem, 3vw, 2.25rem)`, line-height 1.15, tracking `-0.025em`): Secondary lot names. Uppercase. Contact row labels use a 1.15rem / `-0.02em` cut of the same voice.
- **Body** (400, 1.0625rem, line-height 1.65): Bio and lot descriptions. Bio measure is 68ch; shorter ledes sit at 42–48ch.
- **Label** (400, 0.9375rem, line-height 1.55): Supporting copy, nav links (nav links also 700). Language marks are display-face, 0.95rem, 700, tracking `0.04em`, uppercase, in aniline when struck.
- **Stencil** (800, 1.15rem, tracking `0.08em`): Primary action (`FALE COMIGO`). Uppercase display face.
- **Stack mark** (700, `clamp(1.35rem, 2.6vw, 2rem)`, tracking `-0.03em`): Composition strip. Uppercase display face, nowrap.
- **Nav logo** (800, 1.35rem / 1.15rem mobile, tracking `-0.03em`): Uppercase display face in the hem.

Headings use `text-wrap: balance`. Links underline with offset `0.22em`.

### Named Rules
**The Name Spread Rule.** The given name is not tracked out. Each glyph is a stencil cell; the row justifies across the full sack with `space-between`.

**The Two-Voice Rule.** Big Shoulders Display (700–800, uppercase) for marks, lots, and the primary stencil. Atkinson Hyperlegible for prose. Do not swap, and do not introduce a third family.

## Layout

The sack is full-bleed. Content lives in a centered column (`max-width` 76rem, 48rem at the tablet query) with horizontal inset 1.5rem (1.125rem on mobile). Theme space steps in use: 0.5rem, 2rem, 3rem, section 7rem / 4rem mobile. One-off insets (0.85, 1.1, 1.25, 1.35rem) cluster around those steps; they are not a second scale.

Breakpoints in the theme: 400px (`mobileLittle`), 991px (`mobile`), 1300px (`tablet`). The nav collapses to a hem + icon at 991px. Lots stack to one column there. Contact becomes a single column with the tag under the heading.

Fixed hem is dashed along its bottom; the header clears it with 6.25rem top padding (5.5rem mobile). Sections after the hero (`Composição`, `Vamos conversar`) open with a 2px dashed ink stitch. Lots sit in a 1.4fr / 1fr grid with 3rem column gap; the featured lot spans both columns. Stack is a wrapping strip (`gap` 0.85rem 1.75rem), not a card grid. Contact is a two-column band (lede | tag) with 3.5rem gap.

Scroll margin on in-page targets is 5rem so the hem does not cover headings.

## Elevation & Depth

The system is flat. There are no `box-shadow`s. Depth is the tiled jute fiber (320×320px repeat of `src/public/static/img/texture/jute.png`), ink density (struck vs ghost lots), and the paper tag sitting on the cloth with a drawn twine and grommet.

### Named Rules
**The Flat Sack Rule.** Surfaces do not lift. No drop shadow, no hard offset shadow, no halo. If something must recede, drop it to ghost ink. If something must come forward, raise type size or restore full ink.

## Shapes

Controls take a 2px stamp-radius (`rounded.stamp`) — close to a cut stencil, not a pill. Lots, the nav hem, and the paper tag are square. The portrait is a rectangular inked stamp (`rafael-stamp.png`, 8.5rem / 4.75rem mobile, `object-fit: cover`), not a circle.

Borders are 2px. Dashed 2px ink is a section stitch; solid 2px ink is a lot rule or the tag outline; 1px solid ink divides rows inside the tag. The primary action is 2px dashed aniline.

The only circle is the tag grommet: 0.85rem, 2px ink stroke, jute fill, sitting on a 2px ink twine.

### Named Rules
**The Cut Stamp Rule.** Corners are 2px on controls and nowhere else as a roundness scale. Paper, lots, and the portrait stay square. A circle is a hole, not an avatar.

**The Stitch Break Rule.** Sections divide on a 2px dashed ink rule, not on a background band, a card, or a shadow.

## Components

### Buttons
- **Shape:** 2px stamp-radius, 2px stroke.
- **Primary (stencil):** Transparent fill, 2px dashed aniline, stencil type, padding 0.4rem 0.85rem. Hover keeps the fill empty and darkens stroke and type to dock navy. Used once in the hem: `Fale comigo`.
- **Nav link:** Transparent, no stroke, Atkinson 700, padding 0.35rem 0. Hover turns type aniline.
- **Icon (menu):** Transparent, 2px solid ink, padding 0.55rem 0.7rem. Hover fills ink and flips type to paper.
- **Focus:** 2px solid aniline outline, offset 3px, on every control.
- **State timing:** 120ms ease-out on color and border only.

### Cards / Containers
Lots are not cards. They are stamp blocks on the sack: no fill, no radius, no shadow. Featured: no top rule, display-lot title, language mark in aniline. Secondary: 2px solid ink hairline above, title-size name. Internal rhythm is 0.5–0.9rem between language, blurb, and links.

The contact tag is the one contained object: paper fill, 2px solid ink, square, max-width 28rem, padding 2.25rem 1.5rem 1.25rem, plus the twine/grommet drawn above.

### Navigation
Fixed hem, same jute fill and fiber as the page, 2px dashed ink along the bottom, padding 0.85rem 0 1rem, z-index 40. Left: uppercase display logo. Right: Início, Projetos, Origem, Contato, then the dashed aniline stencil. Mobile (≤991px): logo + icon button; open menu stacks links full width with the stencil last. Escape closes it.

### Skip link
Aniline fill, paper type, 700, padding 0.65rem 1rem. Parked above the viewport; `:focus` drops it to 1rem from the top.

### Signature: Lot list
All three lots are present. Hovering or focusing the list ghosts every article to `ghost`; the hovered or focused article returns to ink and its language mark to aniline. `transition: none` — snap, not tween.

### Signature: Composition strip
Tech names in display face, uppercase, inline with 22px library icons, wrapping. Hover turns a mark aniline. No chips, no tiles.

### Signature: Paper tag
Twine (2px × 1.35rem ink) and grommet above a square paper panel. Rows are WhatsApp / E-mail / LinkedIn: display label, aniline action link, 1px ink dividers (2px on the first). Link hover: dock navy.

### Signature: Portrait stamp
Small rectangular raster (`src/public/static/img/stamp/rafael-stamp.png`) beside the role line, not a round avatar and not a hero.

### Signature: Stitch
`hr` or section `border-top`: 2px dashed ink, no fill.

Browser chrome is themed from the same tokens: selection aniline on jute, caret aniline, scrollbar 10px with jute track and ink thumb.

## Do's and Don'ts

### Do:
- **Do** tile the jute fiber at 320px over the oatmeal ground on page and hem.
- **Do** spread the name as individual uppercase letters across the sack width.
- **Do** break sections with a 2px dashed ink stitch.
- **Do** rank work by scale: one featured display-lot, the others sharing a 1.4fr / 1fr row.
- **Do** keep the primary action a dashed aniline stencil, empty at rest.
- **Do** put contact on a square paper tag with twine and grommet.
- **Do** strike lots by ink density, snap, with a 2px aniline focus box (offset 3px).
- **Do** honor `prefers-reduced-motion`: drop the 600ms soak (`cubic-bezier(0.16, 1, 0.3, 1)` from 0.45 opacity + 4px blur) and keep scroll instant.

### Don't:
- **Don't** introduce a second accent or revive Kenzi purple-on-black.
- **Don't** wrap lots, stack marks, or contacts in identical rounded cards.
- **Don't** use a circular avatar; the portrait is a rectangular stamp.
- **Don't** add drop shadows or hard offset shadows.
- **Don't** fill the primary action, and don't tween the lot strike.
- **Don't** park a kicker or eyebrow above a heading; the name carries itself, and the bio sits beside the stamp.
- **Don't** set Inter, Roboto, or another system grotesque as the display or body voice.
