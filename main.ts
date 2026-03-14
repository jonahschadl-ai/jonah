// Roboter Projekt
// Autor: Jonah Schadl
// Datum: 2024-06-15

input.onButtonPressed(Button.A, function () {
    basic.showString("Achtung")
    TobbieII.forward()
    basic.pause(5000)
    TobbieII.stopwalk()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Zurück")
    TobbieII.backwards()
    basic.pause(5000)
    TobbieII.stopwalk()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Dreh");
    TobbieII.();
    basic.pause(2000);
    TobbieII.stopwalk();
})
input.onGesture(Gesture.ScreenUp, function () {
    music.play(music.createSoundExpression(
        WaveShape.Noise,
        2381,
        2044,
        246,
        82,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    basic.showString("Hey!")
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showString("Gut!")
        basic.pause(1000)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showString("hi")
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
turtle.forward(10)
