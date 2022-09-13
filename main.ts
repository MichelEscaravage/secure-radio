input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        radio.sendString(Message)
        basic.showString(Message)
        if (Continue < 1) {
            break;
        }
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Continue = 0
})
let Continue = 0
let Message = ""
radio.setGroup(80)
Message = "Hi Michel!"
Continue = 1
