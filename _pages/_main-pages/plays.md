---
layout: content-page
title: Plays
---
<style>
    #content > span.icon-play {display:none;}
</style>


<p>Developing a business case is not a linear process. You will need to refer to each Play at multiple points as you draft and refine your business case.</p>
<p>Each Play consists of four parts:</p>
<ul>
<li>A <strong>description</strong> of the purpose and key steps in the Play.</li>
<li>A description of the <strong>key activities</strong> for the Play.</li>
<li><strong>Questions</strong> to help you consider the issues.</li>
<li><strong>Links</strong> to further information and resources, such as examples of how other countries tackle the components of the Play.</li>
</ul>
<h2>Explore the Plays</h2>
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