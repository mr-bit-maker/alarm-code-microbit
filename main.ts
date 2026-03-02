basic.forever(function () {
    if (input.soundLevel() > 200) {
        basic.showString("ARE YOU A BAD GUY??????!!!!!")
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showString("YOU ARE STEALING!!!!!")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showString("HOW DARE YOU!!!!!")
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.lightLevel() > 300) {
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        music.play(music.stringPlayable("C5 C A A E G G C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showString("ur caught")
    } else {
        basic.clearScreen()
    }
})
