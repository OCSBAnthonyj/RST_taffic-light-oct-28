radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -65) {
        YELLOW()
        basic.pause(5000)
    }
})
function crosswalk () {
    if (red == true) {
        basic.showIcon(IconNames.StickFigure)
        music.playMelody("C5 - A - C5 - A - ", 120)
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function RED () {
    red = true
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    green = true
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function YELLOW () {
    yellow = true
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let yellow = false
let green = false
let range: neopixel.Strip = null
let red = false
let strip: neopixel.Strip = null
radio.setGroup(193)
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
basic.forever(function () {
    radio.sendNumber(0)
})
basic.forever(function () {
    GREEN()
    basic.pause(10000)
    YELLOW()
    basic.pause(5000)
    RED()
    basic.pause(10000)
})
