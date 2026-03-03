input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.stopAllSounds()
    basic.clearScreen()
})
basic.forever(function () {
    if (input.soundLevel() > 200) {
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 200), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.pause(395)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
