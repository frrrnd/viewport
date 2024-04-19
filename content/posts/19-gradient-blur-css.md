---
title: "Blur progressivo em CSS"
author: joeydi
date: 2023-11-09T13:31:54-03:00
draft: false
type: "post"
layout: "single"
tags: ['Web', 'CSS']
source: "X"
source_link: "https://twitter.com/joeydi/status/1721938227261583846"
media: "/uploads/twitter.com_UooDyFlPWPRs969T.mp4"
media_type: "video"
---

Os CSS é apenas um `backdrop-filter` e um `mask-image`:

```css
.blur {
  backdrop-filter: blur(40px);
  mask-image: linear-gradient(to bottom, transparent 25%, black 75%);
}
```

Por: [@joeydi](https://twitter.com/joeydi/status/1721938227261583846).