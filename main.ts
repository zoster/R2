basic.showIcon(IconNames.Happy)
TPBot.headlightColor(0xff9da5)
basic.forever(function () {
    music.playMelody("C5 A B G A F G E ", 480)
    TPBot.setWheels(100, 0)
    basic.pause(5000)
    music.stopAllSounds()
    TPBot.stopCar()
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
})
