---
title: Printing Pac-Man
date: 2017-08-21 08:39 +0200
tags: 3d printing, pac-man, fusion360, simplify3d
category: 3DP
image: result.jpg
---

I was watching a video on [3D Printing Nerd's youtube channel](https://www.youtube.com/channel/UC_7aK9PpYTqt08ERh1MewlQ) where he was printing a Pac-Man ghost (video at the end of this post).

It made me think that it could be fun to do something similar.

Here's what we're making:

![The final result](result.jpg 'The final result')


## Sizes

On the graphic I found on wikipedia - both pac-man and the ghost are 14x14 pixels. That means - equal height and width and since they are symmetrical - depth too. So - the models were based on 5cm in each direction.

## Hanging

The parts are designed to hang. They have a 2mm hole directly thru to allow for this.

There is a small recess at the bottom of each part to give space for a knot - but I didn't use that. I have found that for my printer a 2mm hole is just right to be able to jam a bit of 1.75mm filament in - so I used invisible thread (transparent plastic thread) and just pushed a small filament piece into each hole to hold it. I may glue them in place later - not sure.

## Pac-Man

Pacman is a sphere - so to avoid massive supports I decided to make him in two parts.

Each is a hemisphere with the mouth section removed.

Finally - there are two pegs (with relevant holes in his body) to hold it together. The mouth is angled at 45˚ so it prints OK without supports.

![Pacman parts](pacman.png 'Pacman parts')
![Pacman parts - underside](pacman-underside.png 'Pacman parts - underside')

## Ghost

The ghost is a simpler part - can be printed in one go without supports.

The base has some sharp points - if the first layer or so doesn't lay these down properly - start again - these _need_ to be correct otherwise they will lift and cause a very poor print. I moved the bed level closer than I usually would so that the first layer could only just extrude.

The cuts don't go all the way into the center - this gives a small ring that increases the base area - giving better bed adhesion.

Fill percentage needs to be enough to support the eyes and dome. I used 15% for the straight edge parts and then 30% for the sections with eyes and up to the top.

![Pacman Ghost](ghost.png 'Pacman Ghost')
![Pacman Ghost - underside](ghost-underside.png 'Pacman Ghost - underside')

## Hanger

Lastly - I needed something to hang it from.

The hanger is designed with 8 2mm holes in the ring and one in the center to attach to (I used the same attachment method of pushing the thread through and then shoving a filament piece in - then cutting it flush).

The larger holes are just because it looked boring as a straight ring.

I also took 4 threads from the edge mount holes (every other hole) to go up to a hanging loop (a keyring split ring).

The hanger has an outer diameter of about 175mm - since my build volume is 200x200x180 and I forgot and assumed that the X and Y were 180 :)

![Hanger](hanger.png 'Hanger')

## Still to do

I’m waiting on a cheap battery powered disco ball motor that will allow this to spin at 2 or 3 RPM.

## STL files

* [pacman](Pacman.stl)
* [ghost](PacmanGhost.stl)
* [hanger](PacmanHanger.stl)

## 3D Printing Nerd video

<embed-youtube id="_aTgmC1Ah00"></embed-youtube>
