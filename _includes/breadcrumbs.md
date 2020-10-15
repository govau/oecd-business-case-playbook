<nav id="breadcrumbs" class="au-breadcrumbs" aria-label="breadcrumb">
	<ul class="au-link-list au-link-list--inline">
	<li>
		<a href="{{  site.baseurl  }}/">Home</a>
	</li>

	{% capture page_urls %}{{  page.url | remove: "/index.html"  }}{% endcapture %}
	{% capture domain %}{{ site.baseurl }}{% endcapture %}
	{% assign splitted_url_parts = page_urls | split: '/' %}
	{% for url_part in splitted_url_parts %}
		{% if url_part == domain %}
			{% capture previous_url %}{{ site.baseurl }}{% endcapture %}
		{% else %}
			{% if forloop.last == false %}
				<li>
					<a href="{{ previous_url }}/{{ url_part }}">{{ url_part }}</a>
				</li>
				{% capture previous_url %}{{ previous_url }}/{{ url_part }}{% endcapture %}
			{% else %}
				{% if page.title %}
					{% capture last_breadcrumb %}{{ page.title }}{% endcapture %}
				{% else %}
					{% capture last_breadcrumb %}{{ url_part | remove: ".html" }}{% endcapture %}
				{% endif %}
				<li>
					<a href="{{ previous_url }}/{{ url_part }}">{{ last_breadcrumb }}</a>
				</li>
			{% endif %}
		{% endif %}
	{% endfor %}
</ul>
</nav>

