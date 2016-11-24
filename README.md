Bootstrap Overflow Navs Instructions
====================================

This plugin will pull the contents of the navbar into a bootstrap dropdown if the width of the ul exceeds that of the page.

Twitter Bootstrap 3 is required for this jQuery plugin to work, download it from https://github.com/twbs/bootstrap
This is tested with bootstrap 3.2.2 and reacting to window resizing.
## Getting started

Include jQuery, bootstrap (CSS and Javascript) and the plugin on a page. Then select a nav to apply the plugin to.

Below is the HTML for a bootstrap navbar.

```html

<nav class="navbar navbar-inverse navbar-static-top" id="topnavbar">
<div class="navbar-header">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand" href="/">Home</a>
</div>
<div id="navbar" class="collapse navbar-collapse">
<ul class="nav navbar-nav nav-collapse">
<li class="dropdown"><a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CAD<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="/CAD">CAD</a></li>
<li><a href="/CAD/Autodesk">Autodesk</a></li>
<li><a href="/CAD/Other">Other</a></li>

</ul>
</li>
<li class="dropdown"><a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="/News">News</a></li>
<li><a href="/News/Industry-News">Industry News</a></li>
<li><a href="/News/Interviews">Interviews</a></li>
<li><a href="/News/Blogger">Blogger</a></li>

</ul>
</li>
<li><a href="/CAM">CAM</a></li>
<li><a href="/PLM">PLM</a></li>
<li class="dropdown"><a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">SIM/VR<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="/SIM-VR/Simulation">Simulation</a></li>
<li><a href="/SIM-VR/Glass">Glass</a></li>
<li><a href="/SIM-VR/Oculus">Oculus</a></li>

</ul>
</li>
<li class="dropdown"><a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hardware<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="/Hardware">Hardware</a></li>
<li><a href="/Hardware/NVIDIA">NVIDIA</a></li>
<li><a href="/Hardware/Fujitsu">Fujitsu</a></li>
<li><a href="/Hardware/DELL">DELL</a></li>

</ul>
</li>
<li class="dropdown"><a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Trends<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="/Trends">Trends</a></li>
<li><a href="/Trends/Cloud">Cloud</a></li>
<li><a href="/Trends/IoT">Internet of Things (IoT)</a></li>

</ul>
</li>

<li class="dropdown"><a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Downloads<span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a href="/Downloads">Downloads</a></li>
<li><a href="/Downloads/Demo-Trial">Demo &amp; Trial</a></li>
<li><a href="/Downloads/Free">Free</a></li>
<li><a href="/Downloads/Docs">Docs</a></li>

</ul>
</li>
<li><a href="/Jobs">Jobs</a></li>
</ul>
</div>
</nav>


<script src="jquery.js"></script>
<script src="bootstrap.js"></script>
<script src="bootstrap-overflow-navs.js"></script>

<script>
$(window).on('resize', function () {

    $("#navbar > ").overflowNavs({
        "more": "",
        "parent": ".nav-collapse",
        "override_width": true
    });
});
</script>
```

## Contributing

Anyone is welcome to help improve this plugin




