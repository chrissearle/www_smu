---
title: Using the Spektrum DX6i radio with the Blade Nano QX
date: 2014-05-29 14:57 +0200
tags: quadcopter, blade, dx6i, spektrum
category: RC
image: QX-Main.jpg
---

So I finally got irritated enough with the radio that comes with the Blade Nano QX RTF (MLP4DSM) that I grabbed a Spektrum DX6i instead.

The Blade Nano QX manual says that you need to following configuration for the DX6i:

* Acro mode (not heli)
* Flaps switch should set NORM FLAP to Down 20 (this is for switching the QX in and out of agility mode)
* Elev D/R and Ail D/R should be at 70% for low rate and 100% for high rate (this gives you a slightly less manic quad when learning)

So - I programmed up the following:

### Type and Name

    Setup List > Model Type > Acro
    Setup List > Model Name > NANO QX

### D/R & Expo

    Adjust List > D/R Expo > AILE 0 70%
    Adjust List > D/R Expo > ELEV 0 70%

Both of these switch to 100% when you flick the respective switch. I guess I could also set a low rate for rudder here if I wanted - but I couldn't be bothered - yawing isn't too bad.

### Flaps

    Adjust List > Flaps > NORM FLAP > Down 20

Now this says to toggle in and out of agility mode - move the flaps switch from 0 to 1 and back. This appears to work - the LED on the QX switches from blue to red and back.

**But** - when in agility mode - it *stops responding to the pitch/roll stick*.

Horizon Hobby support suggested resetting the radio program and starting again - which I did - same result.

Just on a whim - I changed the flaps from NORM FLAP Down 20 to LAND FLAP Down 20 - and this appears to work just fine.

I've queried this with Horizon - will get an answer in about a week I guess - based on how long they took last time.

### Settings

So - the config I'm running looks like:

![Main Screen](QX-Main.jpg 'Main Screen')
![Adjust List > D/R Expo](QX-DR-Expo.jpg 'Adjust List > D/R Expo')
![Adjust List > Flaps](QX-Flaps.jpg 'Adjust List > Flaps')

