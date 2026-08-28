---
layout: page
title: Writing
eyebrow: "Opinion and press"
heading: "Writing"
lede: "Pieces written for a general audience, translating economic research into the public debate."
permalink: /other/
---

<ul class="entries">
  {%- for m in site.data.media %}
  <li>
    <article class="entry">
      <p class="entry__meta">
        <span class="entry__outlet">{{ m.outlet }}</span>
        <span>{{ m.year }}</span>
        {%- if m.language %}<span class="entry__lang">{{ m.language }}</span>{% endif %}
      </p>
      <h2 class="entry__title"><a href="{{ m.url }}" rel="noopener">{{ m.title }}</a></h2>
      {%- if m.description %}<p class="entry__desc">{{ m.description }}</p>{% endif %}
    </article>
  </li>
  {%- endfor %}
</ul>
