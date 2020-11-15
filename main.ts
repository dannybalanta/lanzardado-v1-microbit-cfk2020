let valor_dado = 0
basic.forever(function () {
    valor_dado = 0
    if (input.isGesture(Gesture.Shake)) {
        valor_dado = randint(1, 6)
        basic.pause(500)
    }
    basic.showNumber(valor_dado)
})
