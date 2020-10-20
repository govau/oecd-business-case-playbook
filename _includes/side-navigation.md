<div id="sidebar" class="col-xs-12 col-md-3">
    <aside class="layout-sidebar-first au-body" role="complementary">
        <div>
            <nav class="side-nav" role="navigation" aria-labelledby="block-mainnavigation-3-menu" id="block-mainnavigation-3">
                
 
<ul class="child-menu">
{% for item in site.menus.side %}
    <li class="{{ item.title }} page-link-child {% if item.url == page.url %}active{% endif %}">
        <a href="{{ item.url }}"><span>{{ item.title }}</span></a>
    </li>
    
    {% if item.children %}
      <ul class="child-menu">
      {% for item in item.children %}
        <li class="{{ item.title }} page-link-child {% if item.url == page.url %}active{% endif %}">
            <a href="{{ item.url }}"><span>{{ item.title }}</span></a>
        </li>
      {% endfor %}
      </ul>
    {% endif %}
  </li>
{% endfor %}
</ul>






            </nav>
        </div>
    </aside>
</div>