"""
Created by: Dat Nguyen
Created on: Mar 2026
This module will increase the number displayed when button A is pressed.
"""

from microbit import *

# initialize variables
cookies = 0

# main loop
while True:
    # handle button inputs
    if button_a.was_pressed():
        # increase cookies by 1
        cookies += 1
    elif button_b.was_pressed():
        # reset cookies to 0
        cookies = 0

    # display cookies
    display.scroll(str(cookies), delay=50)
