/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will increase the number displayed when button A is pressed.
*/

// Initialize variable cookies.
let cookies: number = 0

// Button A pressed.
input.onButtonPressed(Button.A, function() {
    // Increase cookies by 1 and display.
    cookies += 1
    basic.clearScreen()
    basic.showNumber(cookies)
})

// Button B pressed.
input.onButtonPressed(Button.B, function() {
    // Assign cookies to 0 and display.
    cookies = 0
    basic.clearScreen()
    basic.showNumber(cookies)
})
