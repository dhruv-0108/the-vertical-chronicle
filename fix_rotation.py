from PIL import Image
import os

images = ["public/images/1.jpg", "public/images/2.jpg"]
for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            # Rotate 180 degrees to fix the orientation
            rotated = img.transpose(Image.ROTATE_180)
            rotated.save(img_path)
            print(f"Rotated {img_path} 180 degrees")
    else:
        print(f"Not found: {img_path}")
