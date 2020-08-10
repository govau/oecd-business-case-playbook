{% for c in site.plays %}
{% if c.title == page.title %}
  {% assign thisPost = c %}
  {% if forloop.index == 1 %}
    {% assign prevflag = 0 %}
    {% assign nextflag = 1 %}
  {% elsif forloop.index == forloop.length %}
    {% assign prevflag = 1 %}
    {% assign nextflag = 0 %}
  {% else %}
    {% assign prevflag = 1 %}
    {% assign nextflag = 1 %}
  {% endif %}
{% endif %}
{% endfor %}

{% for c in site.plays %}
  {% if c.title == page.title %}
    {% assign prevflag = 0 %}
  {% endif %}
  {% if prevflag == 1 %}
    {% assign prevPost = c %}
    {% assign page.previous = c %}
  {% endif %}
{% endfor %}

{% if nextflag == 1 %}
  {% for c in site.plays %}
    {% if foundPost == 1 %}
      {% assign getNext = 1 %}
    {% endif %}
    {% if c.title == page.title %}
      {% assign foundPost = 1 %}
    {% endif %}
    {% if getNext == 1%}
      {% assign nextPost = c %}
      {% assign page.next = c %}
      {% assign foundPost = 0 %}
      {% assign getNext = 0 %}
    {% endif %}
  {% endfor %}
{% endif %}
<div class="row">
<div class="pagination col-xs-12">
    {% if prevPost.url %}
    <a class="prev" rel="prev" href="{{ prevPost.url }}">
        <span><i class="fa fa-chevron-left" aria-hidden="true"></i> {{ prevPost.title }}</span>
    </a>
    {% endif %}
    {% if nextPost.url %}
    <a class="next" rel="next" href="{{ nextPost.url }}">
        <span>{{ nextPost.title }} <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
    </a>
    {% endif %}
</div>
</div>