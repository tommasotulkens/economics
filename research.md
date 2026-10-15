---
layout: page
title: Research
eyebrow: "Papers and projects"
heading: "Research"
lede: "I use large administrative datasets and quasi-experimental designs to study how place, policy and opportunity shape labour market and criminal behaviour."
permalink: /research/
---

<section class="section">
  <h2 class="section__title">Research interests</h2>
  <ul class="chips">
    <li><span class="chip">Crime economics</span></li>
    <li><span class="chip">Labour economics</span></li>
    <li><span class="chip">Housing &amp; neighbourhoods</span></li>
    <li><span class="chip">Economic history</span></li>
    <li><span class="chip">Applied microeconometrics</span></li>
  </ul>
</section>

<section class="section">
  <h2 class="section__title">Work in progress</h2>
  <p class="section__note">Drafts are preliminary — please do not cite or circulate without asking first.</p>

  <ul class="papers">
    {%- for p in site.data.papers %}
    <li>{% include paper.html paper=p uid=forloop.index %}</li>
    {%- endfor %}
  </ul>
</section>
