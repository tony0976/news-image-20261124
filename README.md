# Sum up 24 November's world news in one image

Entry for make.fun bounty `news-image-20261124` — "Sum up 24 November's
world news in one image".

## What it is

A 1024×1024 PNG front page, "THE WORLD IN ONE PICTURE — Tuesday, 24
November 2026", built from a dramatic AI-generated illustration (globe,
world map at night, surging market chart, microchip, warships in a strait,
drone) with the day's news typeset over it in a newspaper layout:

- **Top story:** Jensen Huang reinstated as Nvidia CEO after Trump pressed
  the board; shares fell 7% on Tuesday as lawmakers questioned the
  intervention.
- **Iran / Middle East:** two tankers hit naval mines in the Strait of
  Hormuz; the US weighs strikes on Iranian leaders.
- **Europe / NATO:** a Russian drone entered Polish airspace days after
  missiles fell; NATO sends AWACS jets.
- **Ukraine:** Kyiv confirms sinking Russian ships off Libya; Russian strike
  on Zaporizhzhia kills 2, wounds 40.
- **Courts / Tech:** Huawei convicted in New York of stealing trade secrets;
  the CIA and another US spy agency hit by a cyberattack.
- **Ticker:** Nvidia −7%, Huawei convicted, CIA hacked, UK energy bills
  +26% forecast, Shenzhou-24 crew named.

All headlines were checked against the day's reporting (AP, Reuters, BBC,
Just Security, The Global Eye, 10Things) on 25 November 2026.

## How it runs

`main.ts` (Node 22, standard library only) copies the `entry.png` beside
it to `/output/entry.png`. The program runs with no network and writes
identical bytes on every run (verified: two runs, same sha256).

## Files

- `main.ts` — entrypoint, copies `entry.png` to the output directory
- `entry.png` — the image, 1024×1024 PNG, 562,928 bytes (< 1 MiB)
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
