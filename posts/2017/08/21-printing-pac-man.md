---
title: Printing Pac-Man
date: 2017-08-21 08:39 +0200
tags: 3d printing, pac-man, fusion360, simplify3d
category: 3D Printing
image: result.jpg
intro: A pacman hanging mobile - why not
---

I was watching a video on [3D Printing Nerd's youtube channel](https://www.youtube.com/channel/UC_7aK9PpYTqt08ERh1MewlQ) where he was printing a Pac-Man ghost (video at the end of this post).

It made me think that it could be fun to do something similar.

Here's what we're making:

<figure class="figure w-100 text-center">
  <img class="figure-img img-fluid rounded" src="/images/posts/2017/08/result.jpg" title="The final result" alt="The final result"/>
  <figcaption class="figure-caption">The final result</figcaption>
</figure>

## Sizes

On the graphic I found on wikipedia - both pac-man and the ghost are 14x14 pixels. That means - equal height and width and since they are symmetrical - depth too. So - the models were based on 5cm in each direction.

## Hanging

The parts are designed to hang. They have a 2mm hole directly thru to allow for this.

There is a small recess at the bottom of each part to give space for a knot - but I didn't use that. I have found that for my printer a 2mm hole is just right to be able to jam a bit of 1.75mm filament in - so I used invisible thread (transparent plastic thread) and just pushed a small filament piece into each hole to hold it. I may glue them in place later - not sure.

## Pac-Man

Pacman is a sphere - so to avoid massive supports I decided to make him in two parts.

Each is a hemisphere with the mouth section removed.

Finally - there are two pegs (with relevant holes in his body) to hold it together. The mouth is angled at 45˚ so it prints OK without supports.

<figure class="figure w-100 text-center">
  <img class="figure-img img-fluid rounded" src="/images/posts/2017/08/pacman.png" title="Pacman parts" alt="Pacman parts"/>
  <figcaption class="figure-caption">Pacman parts</figcaption>
</figure>

<figure class="figure w-100 text-center">
  <img class="figure-img img-fluid rounded" src="/images/posts/2017/08/pacman-underside.png" title="Pacman parts - underside" alt="Pacman parts - underside"/>
  <figcaption class="figure-caption">Pacman parts - underside</figcaption>
</figure>

## Ghost

The ghost is a simpler part - can be printed in one go without supports.

The base has some sharp points - if the first layer or so doesn't lay these down properly - start again - these _need_ to be correct otherwise they will lift and cause a very poor print. I moved the bed level closer than I usually would so that the first layer could only just extrude.

The cuts don't go all the way into the center - this gives a small ring that increases the base area - giving better bed adhesion.

Fill percentage needs to be enough to support the eyes and dome. I used 15% for the straight edge parts and then 30% for the sections with eyes and up to the top.

<figure class="figure w-100 text-center">
  <img class="figure-img img-fluid rounded" src="/images/posts/2017/08/ghost.png" title="Pacman ghost" alt="Pacman ghost"/>
  <figcaption class="figure-caption">Pacman ghost</figcaption>
</figure>

<figure class="figure w-100 text-center">
  <img class="figure-img img-fluid rounded" src="/images/posts/2017/08/ghost-underside.png" title="Pacman ghost - underside" alt="Pacman ghost - underside"/>
  <figcaption class="figure-caption">Pacman ghost - underside</figcaption>
</figure>

## Hanger

Lastly - I needed something to hang it from.

The hanger is designed with 8 2mm holes in the ring and one in the center to attach to (I used the same attachment method of pushing the thread through and then shoving a filament piece in - then cutting it flush).

The larger holes are just because it looked boring as a straight ring.

I also took 4 threads from the edge mount holes (every other hole) to go up to a hanging loop (a keyring split ring).

The hanger has an outer diameter of about 175mm - since my build volume is 200x200x180 and I forgot and assumed that the X and Y were 180 :)

<figure class="figure w-100 text-center">
  <img class="figure-img img-fluid rounded" src="/images/posts/2017/08/hanger.png" title="Hanger" alt="Hanger"/>
  <figcaption class="figure-caption">Hanger</figcaption>
</figure>

## Still to do

I’m waiting on a cheap battery powered disco ball motor that will allow this to spin at 2 or 3 RPM.

## STL files

- [pacman](Pacman.stl)
- [ghost](PacmanGhost.stl)
- [hanger](PacmanHanger.stl)

## 3D Printing Nerd video

<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/_aTgmC1Ah00" title="Pac-man Ghost" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
