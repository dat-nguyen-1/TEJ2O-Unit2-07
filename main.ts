/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will increase the number displayed when button A is pressed.
*/

// Initialize variables
let cookies: number = 0

// Initialize display
basic.showIcon(IconNames.Happy)

// Handle button A press
input.onButtonPressed(Button.A, function() {
    // Increase cookies by 1
    cookies += 1

    // Display cookies
    basic.clearScreen()
    basic.showNumber(cookies)
})

// Handle button B press
input.onButtonPressed(Button.B, function() {
    // Reset cookies to 0.
    cookies = 0

    // Display cookies
    basic.clearScreen()
    basic.showNumber(cookies)
})
