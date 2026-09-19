#!/usr/bin/env python3
"""Generate a proper multi-size favicon.ico (Windows icon) from the
Everfrost favicon design: deep navy square with ice-aqua rounded rect.

Pillow's ICO saver embeds multiple resolutions when you pass them via
the `sizes` kwarg on save(). Each (w,h) tuple becomes a separate entry
in the ICO container that Windows/browsers pick from based on context."""

from PIL import Image, ImageDraw

sizes = [16, 32, 48]
images = []

for size in sizes:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # Deep navy background (#0E2A42)
    d.rectangle([0, 0, size - 1, size - 1], fill=(14, 42, 66, 255))
    # Ice-aqua rounded rect inset by ~16% (#2B9EB3)
    inset = int(size * 0.16)
    radius = int(size * 0.22)
    d.rounded_rectangle(
        [inset, inset, size - inset - 1, size - inset - 1],
        radius=radius,
        fill=(43, 158, 179, 255),
    )
    images.append(img)

# Write a multi-size ICO: the first image is the "default" and the
# `sizes` list tells Pillow to embed all listed resolutions.
images[0].save(
    "public/favicon.ico",
    format="ICO",
    sizes=[(img.width, img.height) for img in images],
)
print("Wrote public/favicon.ico (multi-size ICO)")

# Verify: reopen and enumerate frames. ICO files can store multiple
# images; n_frames tells us how many resolutions are embedded.
im = Image.open("public/favicon.ico")
n = getattr(im, "n_frames", 1)
print(f"ICO has {n} embedded frame(s):")
for i in range(n):
    im.seek(i)
    print(f"  frame {i}: {im.size[0]}x{im.size[1]} {im.mode}")
