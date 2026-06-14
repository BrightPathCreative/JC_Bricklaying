#!/usr/bin/env bash
set -e
SRC="/Users/saralidonni/Documents/JC_Bricklaying/Website Images"
mk(){ # folder out cols rows
  ffmpeg -y -loglevel error -pattern_type glob -i "$SRC/$1/*.jpg" \
   -frames:v 1 -filter_complex "scale=300:300:force_original_aspect_ratio=increase,crop=300:300,tile=${3}x${4}:padding=4:color=white" "/tmp/imgtest/$2" 2>/dev/null || true
  echo "$2"; }
mk "p04-fireplaces_pizza-ovens" fireplaces.png 5 5
mk "p07b-new-builds_architectural" architectural.png 6 5
mk "p08b-feature-walls_feature-entrance" entrance.png 6 5
mk "p08b-feature-walls_bluestone" bluestone.png 5 4
