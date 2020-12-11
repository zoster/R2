basic.showIcon(IconNames.Happy)
TPBot.headlightColor(0x00ffff)
TPBot.setWheels(100, -100)
basic.pause(100)
for (let index = 0; index <= 6; index++) {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
basic.forever(function () {
	
})
