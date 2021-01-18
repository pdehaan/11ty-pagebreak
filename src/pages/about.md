---
title: It's All About Me
pagination:
  data: about
  size: 1
  alias: section
permalink: "/about/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
layout: layouts/base.liquid
---

You are on page number {{ pagination.pageNumber | plus: 1 }}.

Permalink: {{ page.url | url }}

<main>

  {{ section }}

</main>

---

```
{{ page | stringify }}
```
