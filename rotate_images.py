from PIL import Image
import os

images = ["public/images/1.jpg", "public/images/2.jpg"]
for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            # The images are rotated 90 degrees counter-clockwise
            # So we rotate 90 degrees clockwise (which is -90 or 270)
            rotated = img.transpose(Image.ROTATE_270)
            rotated.save(img_path)
            print(f"Rotated {img_path}")
    else:
        print(f"Not found: {img_path}")
