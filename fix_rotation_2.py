from PIL import Image
import os

images = ["public/images/1.jpg", "public/images/2.jpg"]
for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            # Rotate 90 degrees counter-clockwise to get Face from Bottom to Right
            rotated = img.transpose(Image.ROTATE_90)
            rotated.save(img_path)
            print(f"Rotated {img_path} 90 degrees CCW (back to original landscape)")
    else:
        print(f"Not found: {img_path}")
