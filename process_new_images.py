from PIL import Image, ImageOps
import os
import shutil

src_dir = "Images"
dest_dir = "public/images"

# Clean up old images in public/images
for old_file in os.listdir(dest_dir):
    os.remove(os.path.join(dest_dir, old_file))

# Process new images
for filename in os.listdir(src_dir):
    if filename.endswith(".jpg"):
        src_path = os.path.join(src_dir, filename)
        dest_path = os.path.join(dest_dir, filename)
        
        with Image.open(src_path) as img:
            # Apply EXIF rotation if any
            fixed_img = ImageOps.exif_transpose(img)
            
            width, height = fixed_img.size
            print(f"Processing {filename}: Size {width}x{height}")
            
            # If width > height, it's landscape. The user wants them UPRIGHT.
            # To make a landscape image upright, we usually rotate 90 degrees CCW (or CW depending on the photo).
            # Let's rotate 90 degrees CCW as a default guess for phone landscape photos.
            if width > height:
                print(f"  -> Landscape detected. Rotating to portrait.")
                fixed_img = fixed_img.transpose(Image.ROTATE_90)
                
            fixed_img.save(dest_path)
            print(f"Saved to {dest_path}")
