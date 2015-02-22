#!/bin/sh

mkdir -p original
mkdir -p converted

for FILE in *jpg; do
	echo $FILE
	convert $FILE -resize 1000x1000\> converted/$FILE
done

cd converted

for FILE in *jpg; do
	mv ../$FILE ../original/$FILE
	mv $FILE ../$FILE
done

cd ..

rmdir converted
