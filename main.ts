let zoldhossz = 0
let gyalogosok = 0
let forgalom = 0
let forgalom_uj = 0
let forgalom_regi = 0
pins.onPulsed(DigitalPin.P9, PulseValue.High, function () {
    zoldhossz = 0
    gyalogosok += 1
})
input.onButtonPressed(Button.B, function () {
    forgalom = 0
    gyalogosok = 0
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    zoldhossz = 5
    while (zoldhossz > 0) {
        zoldhossz += -1
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
    forgalom_uj = pins.digitalReadPin(DigitalPin.P5)
    if (forgalom_regi != forgalom_uj && forgalom_uj == 0) {
        forgalom += 1
    }
    forgalom_regi = forgalom_uj
    basic.pause(10)
})
basic.forever(function () {
    serial.writeNumbers([forgalom, gyalogosok])
    basic.pause(1000)
})
