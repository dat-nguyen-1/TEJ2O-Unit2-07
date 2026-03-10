"""
Created by: Dat Nguyen
Created on: Mar 2026
This module will increase the number displayed when button A is pressed.
"""

from microbit import *

# Initialize variables.
cookies = 0

# Main loop.
while True:
    # Handle the rising edge of button inputs.
    if button_a.was_pressed():
        # Increments cookies by 1 and display.
        cookies += 1
        display.scroll(str(cookies), delay=50)
    elif button_b.was_pressed():
        # Reset cookies to 0 and display.
        cookies = 0
        display.scroll(str(cookies), delay=50)
