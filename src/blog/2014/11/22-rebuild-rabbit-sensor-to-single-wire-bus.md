---
title: Rebuild rabbit sensor to single wire bus
date: 2014-11-22 12:42 CET
tags: rabbits, arduino, DS18B20
series: Rabbit Hutch/Run
image: circuit.png
---

OK - so I decided to move the arduino end of the temperature sensor to the other end of the connection - that is indoors.

This means that I use the ethernet cable as a simple onewire bus wire - not as an ethernet cable - and also means that I don't have to
have the arduino in a weatherproof box.

So the circuit design now looks like this:

![Circuit diagram](circuit.png 'Circuit diagram')

And soldered up - you can see the red/black power, blue (LED) and yellow (1wire bus) hookup wires that go to the arduino and the end of the network wire heading off to the sensors. The sensors themselves are connected in parallel with the sensor wire connected to blue, the ground to blue/white and the power to brown. No other wires in the ethernet cable are in use.

![Wired up](breadboard.jpg 'Wired up')

### Code

All updated [on github](https://github.com/chrissearle/rabbit-temperatures)