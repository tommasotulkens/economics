---
layout: page
title: Teaching
eyebrow: "Courses and supervision"
heading: "Teaching"
lede: "I teach a research seminar in public economics and supervise bachelor and master theses at the Erasmus School of Economics."
permalink: /teaching/
---

<ul class="courses">
  {%- for c in site.data.teaching %}
  <li>
    <article class="course">
      {%- if c.code %}<p class="course__code">{{ c.code }}</p>{% endif %}
      <h2 class="course__title">{{ c.title }}</h2>
      {%- if c.meta %}<p class="course__meta">{{ c.meta }}</p>{% endif %}
      {%- if c.description %}<p class="course__desc">{{ c.description }}</p>{% endif %}

      <div class="materials">
        <p class="materials__label">Materials</p>
        <ul class="materials__list">
        {%- if c.materials and c.materials.size > 0 -%}
          {%- for m in c.materials %}
          <li>
            <a class="material" href="{{ m.file | relative_url }}">
              {%- include icon.html name="doc" class="material__icon" -%}
              <span class="material__name">{{ m.name }}</span>
              <span class="material__tag">{{ m.tag | default: "PDF" }}</span>
            </a>
          </li>
          {%- endfor -%}
        {%- else -%}
          <li><span class="material material--empty">
            {%- include icon.html name="doc" class="material__icon" -%}
            <span class="material__name">Course materials will be posted here.</span>
          </span></li>
        {%- endif -%}
        </ul>
      </div>
    </article>
  </li>
  {%- endfor %}
</ul>

<div class="note">
  <p>
    Students taking one of my courses should use <strong>Canvas</strong> for the
    complete and up-to-date material. What is posted here is the subset that is
    useful publicly. Questions are welcome at
    <a href="#" data-mailto="{{ site.author.email | escape }}">{{ site.author.email | escape }}</a>.
  </p>
</div>
