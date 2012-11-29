jquery.simpleTicker.js
=================================================
Simple ticker plugin using jQuery
=================================================

How to use
---------------------------------------------------------------------
1. Described jquery.simapleTicker.css and jquery.simpleTicker.css as follows :

    
    <pre>
    <link href="/jquery.simpleTicker/jquery.simpleTicker.css" rel="stylesheet">
    <script src="/jquery.simpleTicker/jquery.simpleTicker.js"></script>
    </pre>
    

2. Described target list.

    <pre>
    <div id="ticker" class="ticker">
    <ul>
    <li>testestest1</li>
    <li>testestest2</li>
    <li>testestest3</li>
    <li>testestest4</li>
    <li>testestest5</li>
    </ul>
    </div>
    </pre>

3. Described javascript code as follows
    
    <pre>
    <script>
    $(function(){
      $.simpleTicker($("#ticker"));
    });
    </script>
    </pre>    

Related information
----------------------------------------------------------------------

License
----------------------------------------------------------------------
Copyright (c) 2012 miraoto
Dual licensed under the [MIT license][MIT] and [GPL license][GPL].
[MIT]: http://www.opensource.org/licenses/mit-license.php
[GPL]: http://www.gnu.org/licenses/gpl.html

