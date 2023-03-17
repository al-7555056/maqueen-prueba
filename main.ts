input.onButtonPressed(Button.A, function () {
    Empezar = "on"
    music.playMelody("C5 - - - - - - - ", 120)
    basic.showIcon(IconNames.Happy)
})
let Empezar = ""
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
Empezar = "off"
basic.forever(function () {
    if (Empezar == "on") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(2000)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(5000)
    }
})
