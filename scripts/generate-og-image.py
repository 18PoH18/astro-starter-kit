#!/usr/bin/env python3
"""Generate opengraph-image.png (1200x630) for the Everfrost demo site.

Everfrost palette: deep navy #0E2A42, ice aqua #2B9EB3, frost white #F7FBFC.
Fonts: Liberation Serif (Lexend substitute) + Liberation Sans (Inter substitute).

Output: public/og-image.png
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

# ── Canvas ────────────────────────────────────────────────────────────────────
W, H = 1200, 630
BG = (14, 42, 66)              # #0E2A42 deep navy
PANEL = (247, 251, 252)        # #F7FBFC frost white
ACCENT = (43, 158, 179)        # #2B9EB3 ice aqua
DARK = (14, 42, 66)            # #0E2A42 (matches BG for cohesion)
MUTED = (90, 122, 138)         # #5A7A8A muted ice blue
WHITE = (255, 255, 255)
ICE_LIGHT = (183, 223, 236)   # #B7E0EC lighter aqua for detail

# ── Fonts ─────────────────────────────────────────────────────────────────────
FONT_DIR = Path("/usr/share/fonts/truetype/liberation")
DISP = ImageFont.truetype(str(FONT_DIR / "LiberationSerif-Regular.ttf"), 104)
DISP_BOLD = ImageFont.truetype(str(FONT_DIR / "LiberationSerif-Bold.ttf"), 104)
BODY = ImageFont.truetype(str(FONT_DIR / "LiberationSans-Regular.ttf"), 44)
BODY_BOLD = ImageFont.truetype(str(FONT_DIR / "LiberationSans-Bold.ttf"), 44)
SMALL = ImageFont.truetype(str(FONT_DIR / "LiberationSans-Regular.ttf"), 30)
SMALL_BOLD = ImageFont.truetype(str(FONT_DIR / "LiberationSans-Bold.ttf"), 30)


def text_size(text: str, font: ImageFont.FreeTypeFont) -> tuple[int, int]:
    bbox = font.getbbox(text)
    return int(bbox[2] - bbox[0]), int(bbox[3] - bbox[1])


def wrap_text(text: str, font: ImageFont.FreeTypeFont, max_width: int,
              draw: ImageDraw.ImageDraw) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        test = " ".join(current + [word])
        w, _ = text_size(test, font)
        if w <= max_width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_centered(draw: ImageDraw.ImageDraw, text: str,
                  font: ImageFont.FreeTypeFont, y: int,
                  color: tuple[int, int, int]) -> int:
    w, h = text_size(text, font)
    x = (W - w) // 2
    draw.text((x, y), text, font=font, fill=color)
    return y + h


# ── Canvas setup ──────────────────────────────────────────────────────────────
img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# ── Decorative background accents ─────────────────────────────────────────────

# Subtle frost-grid lines (very low opacity via thin strokes)
for i in range(0, W, 80):
    draw.line([(i, 0), (i, H)], fill=ICE_LIGHT, width=1)
for j in range(0, H, 80):
    draw.line([(0, j), (W, j)], fill=ICE_LIGHT, width=1)

# Radial glow behind the title area (aqua, soft)
for r in range(280, 50, -10):
    alpha = int(255 * (1 - r / 280) * 0.18)
    draw.ellipse([W // 2 - r, H // 2 - r // 2,
                  W // 2 + r, H // 2 + r // 2],
                 outline=(43, 158, 179), width=1)

# Top accent bar (ice aqua, thin)
draw.rectangle([0, 0, W, 6], fill=ACCENT)

# Subtle bottom reflection band
draw.rectangle([0, H - 120, W, H], fill=(14, 42, 66))
draw.rectangle([0, H - 120, W, H - 114], fill=ACCENT)

# ── Left panel: brand name ────────────────────────────────────────────────────
panel_right = int(W * 0.30)
draw.rectangle([0, 0, panel_right, H], fill=PANEL)

# Decorative concentric rings on the panel (Everfrost frost motif)
cx, cy = panel_right // 2, H // 2 - 50
for r in [55, 85, 115, 145]:
    draw.ellipse([cx - r, cy - r, cx + r, cy + r],
                 outline=ACCENT, width=2)

# Business name
name_y = 130
draw_centered(draw, "Everfrost", DISP_BOLD, name_y, DARK)

# Tagline (wrapped)
taglines = wrap_text("Crafted with care, built for clarity.",
                     BODY, panel_right - 80, draw)
ty = name_y + 120
for line in taglines:
    draw_centered(draw, line, BODY, ty, MUTED)
    ty += 52

# Meta at bottom of panel
meta_y = H - 120
draw_centered(draw, "proof of concept", SMALL, meta_y, MUTED)
draw_centered(draw, "demo", SMALL_BOLD, meta_y + 40, ACCENT)

# ── Right side: headline ──────────────────────────────────────────────────────
headline = "A clean\nmodern\ncold-aesthetic\ndemo site."
hl_y = 80
for line in headline.split("\n"):
    draw_centered(draw, line, DISP_BOLD, hl_y, PANEL)
    hl_y += 105

# Subheadline
subhead = ("A proof-of-concept site built with a config-driven "
           "Astro + Tailwind kit. "
           "No third-party bloat. Just clean design.")
for line in wrap_text(subhead, BODY, W - 180, draw):
    draw_centered(draw, line, BODY, hl_y + 20, PANEL)
    hl_y += 50

# ── CTA pill (bottom right) ───────────────────────────────────────────────────
cta_text = "Explore"
cta_w, cta_h = text_size(cta_text, BODY_BOLD)
cta_w += 48
cta_h += 24
cta_x = W - cta_w - 60
cta_y = H - cta_h - 70
draw.rounded_rectangle(
    [cta_x, cta_y, cta_x + cta_w, cta_y + cta_h],
    radius=cta_h // 2, fill=ACCENT)
cta_tx = cta_x + (cta_w - text_size(cta_text, BODY_BOLD)[0]) // 2
cta_ty = cta_y + (cta_h - text_size(cta_text, BODY_BOLD)[1]) // 2 - 6
draw.text((cta_tx, cta_ty), cta_text, font=BODY_BOLD, fill=WHITE)

# ── Save ──────────────────────────────────────────────────────────────────────
out = Path(__file__).resolve().parent.parent / "public" / "og-image.png"
out.parent.mkdir(parents=True, exist_ok=True)
img.save(out, "PNG")
print(f"Wrote {out} ({W}x{H})")
