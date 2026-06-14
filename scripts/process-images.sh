#!/usr/bin/env bash
# Builds web-ready service gallery images and wide hero backgrounds from the
# raw "Website Images" source folders.
#  - Crops the bottom 6% of every gallery image to strip phone watermarks
#    ("Shot on Galaxy S25 Ultra") and resizes to a sensible web width.
#  - Generates wide, cover-cropped hero backgrounds for each page.
set -euo pipefail

ROOT="/Users/saralidonni/Documents/JC_Bricklaying"
SRC="$ROOT/Website Images"
OUT="$ROOT/public/images"

gallery_one() {
  # $1 = source file, $2 = destination file
  ffmpeg -y -loglevel error -i "$1" \
    -vf "crop=in_w:in_h*0.94:0:0,scale='min(1500,iw)':-1" \
    -q:v 3 "$2"
}

hero_one() {
  # $1 = source file, $2 = destination file (wide cover crop, no watermark)
  ffmpeg -y -loglevel error -i "$1" \
    -vf "scale=1920:900:force_original_aspect_ratio=increase,crop=1920:820" \
    -q:v 3 "$2"
}

# slug -> "dir:count dir:count ..."
build_service() {
  local slug="$1"; shift
  local dest="$OUT/services/$slug"
  mkdir -p "$dest"
  rm -f "$dest"/*.jpg 2>/dev/null || true
  local idx=1
  for pair in "$@"; do
    local dir="${pair%%::*}"
    local count="${pair##*::}"
    local n=0
    while IFS= read -r f; do
      [ "$n" -ge "$count" ] && break
      printf -v num "%02d" "$idx"
      gallery_one "$f" "$dest/$num.jpg"
      idx=$((idx+1)); n=$((n+1))
    done < <(find "$SRC/$dir" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | sort)
  done
  echo "$slug: $((idx-1)) images"
}

build_service outdoor-fireplaces-pizza-ovens "p04-fireplaces_pizza-ovens::20"
build_service block-retaining-walls "p05-retaining-walls_retaining::8" "p05-retaining-walls_blockwork::9" "p05-retaining-walls_feature-piers::3"
build_service remedial-brickwork "p06-remedial_crack-stitching::13" "p06-remedial_rising-damp::6"
build_service custom-mortar-matching "p07-mortar-matching::18"
build_service heritage-brickwork-restoration "p08-heritage-restoration::20"
build_service feature-walls-front-fences "p08b-feature-walls_feature-entrance::9" "p08b-feature-walls_bluestone::8" "p08b-feature-walls_feature-brickwork::3"
build_service new-builds-architectural-brickwork "p07b-new-builds_architectural::8" "p07b-new-builds_multi-unit::6" "p07b-new-builds_internal-feature::4" "p07b-new-builds_built-in-seating::2"

echo "--- heroes ---"
mkdir -p "$OUT/hero"
first_in() { find "$SRC/$1" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) | sort | sed -n "${2:-1}p"; }

hero_one "$(first_in p07b-new-builds_architectural 3)" "$OUT/hero/home.jpg"
hero_one "$ROOT/public/images/hero/jamie-laying-brick.jpg" "$OUT/hero/about.jpg"
hero_one "$(first_in p07b-new-builds_architectural 1)" "$OUT/hero/services.jpg"
hero_one "$(first_in p04-fireplaces_pizza-ovens 1)" "$OUT/hero/contact.jpg"
hero_one "$(first_in p08b-feature-walls_bluestone 1)" "$OUT/hero/gallery.jpg"
hero_one "$(first_in p08-heritage-restoration 1)" "$OUT/hero/faq.jpg"
hero_one "$(first_in p07b-new-builds_multi-unit 1)" "$OUT/hero/areas.jpg"

for slug in outdoor-fireplaces-pizza-ovens block-retaining-walls remedial-brickwork custom-mortar-matching heritage-brickwork-restoration feature-walls-front-fences new-builds-architectural-brickwork; do
  hero_one "$OUT/services/$slug/01.jpg" "$OUT/hero/service-$slug.jpg"
done

echo "done"
