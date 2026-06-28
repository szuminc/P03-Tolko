from PIL import Image, ImageDraw
import math, os, sys

def draw_icon(size):
    img = Image.new('RGBA', (size, size), (11, 11, 11, 255))
    d = ImageDraw.Draw(img, 'RGBA')
    s = size / 512
    cx = size / 2

    # Subtle ring
    r = 216 * s
    d.ellipse([cx - r, cx - r, cx + r, cx + r],
              outline=(200, 255, 87, 30), width=max(1, round(3.5 * s)))

    # Figure
    acc  = (200, 255, 87, 255)
    lw   = max(2, round(32 * s))
    head_cy = 132 * s
    head_r  = 52 * s

    def line(x1, y1, x2, y2):
        d.line([(x1, y1), (x2, y2)], fill=acc, width=lw)
        for x, y in [(x1, y1), (x2, y2)]:
            d.ellipse([x - lw/2, y - lw/2, x + lw/2, y + lw/2], fill=acc)

    # Head
    d.ellipse([cx - head_r, head_cy - head_r, cx + head_r, head_cy + head_r], fill=acc)

    # Torso
    line(cx, 184 * s, cx, 325 * s)

    # Arms (shoulder at 240s, tips at 148s)
    sy = 240 * s
    line(cx, sy, cx - 164 * s, 148 * s)
    line(cx, sy, cx + 164 * s, 148 * s)

    # Joint dots at shoulder and hip
    for (jx, jy) in [(cx, sy), (cx, 325 * s)]:
        jr = 16 * s
        d.ellipse([jx - jr, jy - jr, jx + jr, jy + jr], fill=acc)

    # Legs
    hy = 325 * s
    line(cx, hy, cx - 136 * s, 466 * s)
    line(cx, hy, cx + 136 * s, 466 * s)

    return img

out_dir = os.path.join(os.path.dirname(__file__), '..', 'icons')
for size in (512, 192):
    img = draw_icon(size)
    path = os.path.join(out_dir, f'icon-{size}.png')
    img.save(path, 'PNG')
    print(f'Saved {path}')
print('Done.')
