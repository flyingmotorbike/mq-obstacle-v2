let n = 0
let direction = 0
let distance = 0
DFRobotMaqueenPlusV2.init()
DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
DFRobotMaqueenPlusV2.setBrightness(100)
let R = 0
let G = 1
let B = 2
let P = 3
let S = false
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (input.soundLevel() > 50) {
        S = !(S)
        if (S == true) {
            music.playTone(523, music.beat(BeatFraction.Whole))
            distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
            direction = randint(1, 2)
            if (distance < 30 && distance != 0) {
                music.ringTone(988)
                if (direction == 1) {
                    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
                    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
                    basic.pause(1000)
                }
                if (direction == 2) {
                    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
                    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
                    basic.pause(1000)
                }
            } else {
                music.ringTone(494)
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 50)
            }
        } else {
            music.playTone(262, music.beat(BeatFraction.Whole))
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
        }
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.pause(200)
    }
})
basic.forever(function () {
    if (R <= 3) {
        DFRobotMaqueenPlusV2.setIndexColor(R, 0xff0000)
        R += 1
    } else {
        R = 0
    }
    if (G <= 3) {
        DFRobotMaqueenPlusV2.setIndexColor(G, 0x00ff00)
        G += 1
    } else {
        G = 0
    }
    if (B <= 3) {
        DFRobotMaqueenPlusV2.setIndexColor(B, 0x007fff)
        B += 1
    } else {
        B = 0
    }
    if (P <= 3) {
        DFRobotMaqueenPlusV2.setIndexColor(P, 0xff00ff)
        P += 1
    } else {
        P = 0
    }
    n += 1
    basic.pause(1000)
})
