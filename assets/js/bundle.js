---
layout: none
---

{% for file in site.js.files %}

{% assign file_index = forloop.index %}

/* START {{ file }} {% for i in (1..100) %}{{ file_index }}{% endfor %} */

{% include_relative {{ file }} %}

/* END {{ file }} {% for i in (1..100) %}{{ file_index }}{% endfor %} */

{% endfor %}