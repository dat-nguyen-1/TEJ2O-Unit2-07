"""
Created by: Dat Nguyen
Created on: Mar 2026
This module will increase the number displayed when button A is pressed.
"""

from microbit import *

# initialize variables
cookies = 0

# initialize display
display.clear()
display.show(Image.HAPPY)

# main loop
while True:
    # handle button inputs
    if button_a.was_pressed():
        # increase cookies by 1 and display cookies
        cookies += 1
        display.scroll(str(cookies))
    elif button_b.was_pressed():
        # reset cookies to 0 and display cookies
        cookies = 0
        display.scroll(str(cookies))
