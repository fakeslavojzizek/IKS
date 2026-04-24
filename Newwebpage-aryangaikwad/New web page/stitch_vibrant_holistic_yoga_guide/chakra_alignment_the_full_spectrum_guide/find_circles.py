import cv2
import numpy as np
import sys
import json

def extract_logos(image_path):
    img = cv2.imread(image_path)
    if img is None:
        print("Error loading image")
        sys.exit(1)
        
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # The image has a white background. Wait, the original chart has gray alternating backgrounds for the rows?
    # Some rows have white #FFF, some have light gray #F5F5F5.
    
    # Let's find large colored circles.
    # We can run HoughCircles.
    circles = cv2.HoughCircles(
        gray,
        cv2.HOUGH_GRADIENT,
        dp=1,
        minDist=50,
        param1=50,
        param2=30,
        minRadius=30,
        maxRadius=150
    )
    
    results = []
    if circles is not None:
        circles = circles[0, :]
        for x, y, r in circles:
            results.append({"x": float(x), "y": float(y), "r": float(r)})
            
    print(json.dumps(results))

extract_logos('chakra_chart.png')
