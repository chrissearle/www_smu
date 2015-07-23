#!/bin/sh

for F in `find $1 -name *.jpg -print`; do
  width=`identify -format %w $F`
  if [ $width -gt 1000 ]; then
    echo $F Too big
    convert $F -resize 1000x1000\> $F.new
    rm $F
    mv $F.new $F
  fi
done