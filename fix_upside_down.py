from PIL import Image
import os

images = ["public/images/2.jpg", "public/images/20260727_223746.jpg", "public/images/3.jpg"]
for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            # The user says they are upside down, so we rotate 180 degrees to make them upright
            rotated = img.transpose(Image.ROTATE_180)
            rotated.save(img_path)
            print(f"Rotated {img_path} 180 degrees to fix upside down")
    else:
        print(f"Not found: {img_path}")
