/**
 * Custom blocks
 */
//% weight=100 color=#0fbc41 icon=""
namespace gigabitDisplay {
    /**
* makes the gigabit display the same as the micro:bit
     */
    //% blockId="mirrorDisp" block="mirror display on gigaBit"
    export function mirrorDisplayOnGigabit(): void {
        let item = neopixel.create(DigitalPin.P16, 25, NeoPixelMode.RGB)
        control.inBackground(function () {
            while (true) {
                for (let i = 0; i <= 25 - 1; i++) {
                    if (led.point(4 - i % 5, i / 5)) {
                        item.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
                    } else {
                        item.setPixelColor(i, neopixel.colors(NeoPixelColors.Black))
                    }
                }
                basic.pause(10)
                let brightness = led.brightness()
                item.setBrightness(brightness)
                item.show()
            }
        })
    }

    /**
* makes the gigabit display the same as the micro:bit on selected pin
     */
    //% blockId="mirrorDispAdvanced" block="mirror display on gigaBit connected to pin $pinSelect" advanced=true
    export function mirrorDisplayOnGigabitAdvanced(pinSelect: DigitalPin): void {
        let item = neopixel.create(pinSelect, 25, NeoPixelMode.RGB)
        control.inBackground(function () {
            while (true) {
                for (let i = 0; i <= 25 - 1; i++) {
                    if (led.point(4 - i % 5, i / 5)) {
                        item.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
                    } else {
                        item.setPixelColor(i, neopixel.colors(NeoPixelColors.Black))
                    }
                }
                basic.pause(10)
                let brightness = led.brightness()
                item.setBrightness(brightness)
                item.show()
            }
        })
    }

}