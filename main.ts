/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will increase the number displayed when button A is pressed.
*/

// initialize variables
let cookies: number = 0

// Initialize display
basic.showIcon(IconNames.Happy)

// handle button A press
input.onButtonPressed(Button.A, function() {
    // increase cookies by 1
    cookies += 1

    // display cookies
    basic.clearScreen()
    basic.showNumber(cookies)
})

// handle button B press
input.onButtonPressed(Button.B, function() {
    // reset cookies to 0.
    cookies = 0

    // display cookies
    basic.clearScreen()
    basic.showNumber(cookies)
})
