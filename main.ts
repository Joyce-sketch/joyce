basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showString("Welcome!")
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(5000)
    }
})
