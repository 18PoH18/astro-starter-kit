import sys
from PIL import Image

images = {
    "public/logo.png": (1200, 630),
    "public/logo-icon.png": (120, 120),
    "public/logo-full.png": (512, 512),
    "public/favicon.png": (48, 48),
    "public/favicon-32.png": (32, 32),
    "public/favicon-16.png": (16, 16),
}

print("=== PNG verification ===")
for path, expected_size in images.items():
    try:
        with Image.open(path) as im:
            mode = im.mode
            fmt = im.format
            size = im.size
            status = "✓" if size == expected_size else "✗ SIZE MISMATCH"
            print(f"  {status} {path}: {size[0]}x{size[1]} {mode} {fmt}")
    except Exception as e:
        print(f"  ✗ {path}: ERROR - {e}")
