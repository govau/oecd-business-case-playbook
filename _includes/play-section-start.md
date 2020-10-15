{% if include.section-title == "playDescription" %}
<div class="row">
	<div class="col-xs-12">
		<div class="feature-container">
			<h2 id="{{include.section-title}}">Play description</h2>


{% elsif include.section-title == "keyActivities" %}
<div class="row">
	<div class="col-xs-12">
		<div class="feature-container">
			<h2 id="{{include.section-title}}">Key activities</h2>



{% elsif include.section-title == "questionsToConsider" %}
<div class="row">
	<div class="col-xs-12">
		<div class="feature-container">
			<h2 id="{{include.section-title}}">Questions to consider</h2>



{% elsif include.section-title == "resources" %}
<div class="row">
<div class="col-xs-12">
	<div class="feature-container">
		<h2 id="{{include.section-title}}">Resources</h2>
 			<div class="links-list">


{% elsif include.section-title == "introduction" %}
<div class="row">
	<div class="col-xs-12">
		<div class="play-intro">


{% else %}
<div class="row">
	<div class="col-xs-12">
		<div class="">
{% endif %}





                