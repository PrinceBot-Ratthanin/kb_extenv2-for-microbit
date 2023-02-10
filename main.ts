input.onButtonPressed(Button.A, function () {
    KB_ExtenV2.digitalWrite(KB_ExtenV2.digitalPort.D2, 0)
})
input.onButtonPressed(Button.B, function () {
    KB_ExtenV2.digitalWrite(KB_ExtenV2.digitalPort.D2, 1)
})
basic.forever(function () {
    serial.writeLine("" + (KB_ExtenV2.analogRead(KB_ExtenV2.analogPort.A2)))
    KB_ExtenV2.ServoRun(KB_ExtenV2.servoPort.S1, 80)
    KB_ExtenV2.digitalWrite(KB_ExtenV2.digitalPort.D2, 0)
    KB_ExtenV2.MotorRun(motorSEL.M1, motorDIR.Forward, 50)
    KB_ExtenV2.MotorRun(motorSEL.M2, motorDIR.Reverse, 50)
    basic.pause(1000)
    KB_ExtenV2.ServoRun(KB_ExtenV2.servoPort.S1, 120)
    KB_ExtenV2.digitalWrite(KB_ExtenV2.digitalPort.D2, 1)
    KB_ExtenV2.MotorRun(motorSEL.M1, motorDIR.Reverse, 50)
    KB_ExtenV2.MotorRun(motorSEL.M2, motorDIR.Forward, 50)
    basic.pause(1000)
})
