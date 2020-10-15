{% include head.md %}

<body class="au-grid">
    <nav class="au-skip-link " aria-label="skip links navigation"><a class="au-skip-link__link " href="#main-nav">Skip to navigation</a><a class="au-skip-link__link " href="#content">Skip to content</a></nav>
    <div class="alpha-bar">
        <div class="au-body container-fluid">
            <div class="col-12">
                <p>
                    <span class="alpha-text">Alpha</span>
                    This playbook is under active development and your feedback will help us improve it.
                </p>
            </div>
        </div>
    </div>
    <div class="header-wrapper">
        <header class="au-grid au-header au-header--dark">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <a class="au-header__brand" href="/index.html">
                            <img class="au-header__brand-image imgheader" alt="Insert alternate text here" src="/assets/img/header-logo-agov.png">
                            <div class="au-header__text">
                                <h1 class="au-header__heading calib-font"><b>Digital Transformation Agency</b></h1>
                                <div class="au-header__subline calib-font">Business case playbook</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        {% include navigation.md %}
    </div>
    <main class="page-wrapper au-body">
        <div id="content" class="container-fluid">
            {% include breadcrumbs.md %}
            <h1>{{page.title}}</h1>
            {{ content }}
        </div>
    </main>
    {% include footer.md %}