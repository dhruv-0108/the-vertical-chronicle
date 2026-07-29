from PIL import Image, ImageOps
import os

images = ["public/images/1.jpg", "public/images/2.jpg"]
for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            # Try to fix using EXIF orientation
            fixed_img = ImageOps.exif_transpose(img)
            
            # If the image is still landscape (width > height), let's assume it was taken sideways and rotate it
            # But which way? Usually rotating 90 degrees CCW (or CW depending on the standard).
            # Let's print the size to understand.
            print(f"{img_path}: Original size: {img.size}, After EXIF: {fixed_img.size}")
            
            # Save the EXIF fixed version
            fixed_img.save(img_path)
    else:
        print(f"Not found: {img_path}")
