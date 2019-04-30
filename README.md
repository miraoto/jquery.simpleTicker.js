# jquery.simpleTicker.js

Simple ticker plugin using jQuery.


## Usage

1.Described jquery.simapleTicker.css and jquery.simpleTicker.css as follows :

``` html
<link href="/jquery.simpleTicker/jquery.simpleTicker.css" rel="stylesheet">
<script src="/jquery.simpleTicker/jquery.simpleTicker.js"></script>
```

2.Described target list.

``` html
<div id="ticker" class="ticker">
<ul>
<li>testestest1</li>
<li>testestest2</li>
<li>testestest3</li>
<li>testestest4</li>
<li>testestest5</li>
</ul>
</div>
```

3.Described javascript code as follows

``` html
<script>
$(function(){
  $.simpleTicker($("#ticker"));
});
</script>
```

Please check the demo/demo.html for details.

## jQuery Support

It has been tested on the following versions

- 1.8.3
- 2.2.4
- 3.4.0


Related information
----------------------------------------------------------------------
- [簡単なjquery tickerプラグインを作ってみた。 - ミラボ](http://log.miraoto.com/2012/12/708/)
- [jQueryを利用した簡単なニュースティッカー - サンプルとか](http://sample.miraoto.com/detail/20/)


License
----------------------------------------------------------------------
Copyright (c) 2012-2018 miraoto
Dual licensed under the [MIT license][MIT] and [GPL license][GPL].

[MIT]: http://www.opensource.org/licenses/mit-license.php
[GPL]: http://www.gnu.org/licenses/gpl.html

