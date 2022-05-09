{% include head.md %}

<body class="au-grid">
    <nav class="au-skip-link " aria-label="skip links navigation"><a class="au-skip-link__link " href="#main-nav">Skip to navigation</a><a class="au-skip-link__link " href="#content">Skip to content</a></nav>
    <div class="header-wrapper">
        <header class="au-grid au-header au-header--dark">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 decommission-msg-container">
                        <div class="au-body au-page-alerts au-page-alerts--warning">
                            The Australian Government Business Case Playbook site has been decommissioned and will be taken down from 31 May 2022. For further information please contact <a href="mailto:info@dta.gov.au">info@dta.gov.au</a>.
                        </div>
                    </div>
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
        {{ content }}
    </main>
    {% include footer.md %}