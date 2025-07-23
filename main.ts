makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.Off)
makerbit.showStringOnLcd1602("MakerBit", makerbit.position1602(LcdPosition1602.Pos1), 9)
basic.pause(2000)
makerbit.clearLcd1602()
basic.forever(function () {
	
})
