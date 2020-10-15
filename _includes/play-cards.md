<div class="row">
    <ul class="play-cards au-card-list au-card-list--matchheight">
        {% for play in site.plays %}

        <li class="col-sm-4 col-xs-6">
            <div class="au-card {{play.label}} au-body au-card--shadow au-card--clickable">
                        <div class="label {{play.label}}">{{play.label}}</div>
                <div class="icon-play-card">
                    <span class="fa-stack fa-2x icon-play">
                        <i class="fas fa-circle fa-stack-2x {{play.label}}"></i>
                        <i class="fas fa-{{ play.icon }}  fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="au-card__inner">
                    <h3 class="au-card__title"><a class="au-card--clickable__link" href="{{ play.url }}">{{ play.title }}</a></h3>
                </div>
            </div>
        </li>
        {% endfor %}
    </ul>
</div>