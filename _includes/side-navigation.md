<div id="sidebar" class="col-xs-12 col-md-3">
    <aside class="layout-sidebar-first au-body" role="complementary">
        <div>
            <nav class="side-nav" role="navigation" aria-labelledby="block-mainnavigation-3-menu" id="block-mainnavigation-3">
                
                {% for item in site.data.navigation %}
                {% if item.subitems != null %}
                <ul class="child-menu">
                    {% for item in item.subitems %}
                    <li class="{{ item.title }} page-link-child {% if item.url == page.url %}active{% endif %}"><a href="{{ item.url }}"><span>{{ item.title }}</span></a></li>
                    {% endfor %}
                </ul>
                {% endif %}
                {% endfor %}
            </nav>
        </div>
    </aside>
</div>