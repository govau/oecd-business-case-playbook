<nav class="au-main-nav au-main-nav--dark" aria-label="main">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div id="main-nav-default" class="au-main-nav__content">
          <button
            aria-controls="main-nav-default"
            aria-expanded="false"
            class="au-main-nav__toggle au-main-nav__toggle--open"
            onClick="return AU.mainNav.Toggle( this )">
            Menu
          </button>
          <div class="au-main-nav__menu">
            <div class="au-main-nav__menu-inner">
              <div class="au-main-nav__focus-trap-top"></div>
              <button
                aria-controls="main-nav-default"
                class="au-main-nav__toggle au-main-nav__toggle--close"
                onClick="return AU.mainNav.Toggle( this )">
                Close
              </button>
            


<ul id="main-nav" class="au-link-list">
{% for item in site.menus.header %}
  <li class="page-link-parent menu-item-{{ loop.index }} {% if item.url == page.url %}active{% endif %}">
    <a href="{{ item.url }}">{{ item.title }}</a>
    {% if item.children %}
      <ul class="sub-menu">
      {% for item in item.children %}
        <li class="page-link-child menu-item-{{ loop.index }} {% if item.url == page.url %}active{% endif %}">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
      </ul>
    {% endif %}
  </li>
{% endfor %}
</ul>


              <div class="au-main-nav__focus-trap-bottom"></div>
            </div>
          </div>
          <div
            class="au-main-nav__overlay"
            aria-controls="main-nav-default"
            onClick="return AU.mainNav.Toggle( this )">
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>







