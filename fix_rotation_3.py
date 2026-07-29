from PIL import Image
import os

images = ["public/images/1.jpg", "public/images/2.jpg"]
for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            # Current: Face on Right.
            # Target: Face on Top (Upright portrait)
            # Rotate 90 degrees counter-clockwise
            rotated = img.transpose(Image.ROTATE_90)
            rotated.save(img_path)
            print(f"Rotated {img_path} 90 degrees CCW (Face now at Top, Upright)")
    else:
        print(f"Not found: {img_path}")
