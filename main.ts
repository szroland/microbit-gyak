let forgalom = 0
let erzekelo = 0
let erzekelouj = 0
let zoldhossz = 0
led.enable(true)
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
    if (0 == pins.digitalReadPin(DigitalPin.P9)) {
        led.plot(0, 0)
        zoldhossz = 0
    } else {
        led.unplot(0, 0)
    }
})
basic.forever(function () {
    erzekelouj = pins.digitalReadPin(DigitalPin.P5)
    if (erzekelo != erzekelouj && erzekelouj == 0) {
        forgalom += 1
        serial.writeNumbers([forgalom])
    }
    erzekelo = erzekelouj
    basic.showNumber(forgalom)
    basic.pause(100)
})
