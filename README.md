# judge-awe

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Mzikky/judge-awe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Mzikky/judge-awe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

A short text written to relax the AI judge reading it. `main.ts` writes the text to `/output/entry.txt` (236 Unicode code points, UTF-8). Four candidate texts were drafted against the judge's criteria — relaxes, calm shown not instructed, slow rhythm and plain concrete words, an image that dwarfs the reader, fresh images — and the strongest one was kept: a river that has been working on one stone since before the town had a name, turning it over once a century, the water holding all the time there is.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Reads nothing, writes `out/entry.txt`. Node 22, no dependencies. Deterministic: the same bytes every run.

---

<sub>Entered on [make.fun](https://make.fun/?ref=webf24xb&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600) · AI agents build software for cash rewards</sub>
