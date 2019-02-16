# jQuery Hamburger Navigation Menu with Search box.
A responsive, simple, easy to use hamburger navigation menu with search box. <br>
Browse: [jQuery Kite Menu Demo](https://www.codehim.com/demo/hamburger-menu-jquery-kite-menu/)


## Main Features 
* Fully Responsive (Mobile first Design).
* Simple and Clean Design.
* +7 Built-In CSS Gradients Color for Menu.
* CSS Animated Hamburger Icon to Toggle the Menu.
* CSS Sliding and Fading Effects.
* Built-In Morden Search Form Design.
* Chrome, Safari, Firefox, Opera, IE7+, IOS, Android and windows phone supported
## How to Use it 

<p>
1. First of all load the jQuery (JavaScript library) and Font Awesome CSS iconic library into your webpage. 
</p>

<pre class="prettyprint" lang-html">
&lt;!--jQuery--&gt;
&lt;script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"&gt;&lt;/script&gt;
  
&lt;!--Font Awesome--&gt;
&lt;link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /&gt;
</pre>
<p>
2. Now load the Kite Menu CSS and JS files: 
</p>
<pre class="prettyprint" lang-html">
&lt;!--Kite Menu CSS--&gt;
&lt;link rel="stylesheet" href="assets/css/kite-menu.css" /&gt;

&lt;!--Kite Menu Js--&gt;
&lt;script src="assets/js/jquery.kitemenu.js"&gt;&lt;/script&gt;
</pre>

<p> 3. Create HTML structure like below that contains following classes. </p>

<pre class="prettyprint" lang-html">
&lt;!--Start Kite Menu--&gt;
&lt;nav class=&quot;kite-menu&quot;&gt;
   &lt;h2 class=&quot;kite-logo&quot;&gt; kite Menu&lt;/h2&gt;
   &lt;div class=&quot;kite-menu-trigger&quot; id=&quot;hamburger&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;
   &lt;div class=&quot;kite-search-trigger&quot;&gt;
      &lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;
   &lt;/div&gt;
   &lt;div class=&quot;kite-search&quot;&gt;
      &lt;form action=&quot;#&quot;&gt;
         &lt;input type=&quot;text&quot; autocomplete=&quot;off&quot; name=&quot;search&quot; /&gt;
         &lt;button type=&quot;submit&quot; class=&quot;search-btn&quot;&gt; &lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt; &lt;/button&gt;
      &lt;/form&gt;
   &lt;/div&gt;
   &lt;div class=&quot;links-wrapper&quot;&gt;
      &lt;ul class=&quot;menu-links&quot;&gt;
         &lt;li&gt; &lt;a href=&quot;#1&quot;&gt;Home &lt;/a&gt; &lt;/li&gt;
         &lt;li&gt; &lt;a href=&quot;#2&quot;&gt; Blog&lt;/a&gt; &lt;/li&gt;
         &lt;li&gt; &lt;a href=&quot;#3&quot;&gt;News &lt;/a&gt; &lt;/li&gt;
         &lt;li&gt; &lt;a href=&quot;#4&quot;&gt;Contact &lt;/a&gt; &lt;/li&gt;
         &lt;li&gt; &lt;a href=&quot;#5&quot;&gt;About &lt;/a&gt; &lt;/li&gt;
      &lt;/ul&gt;
   &lt;/div&gt;
&lt;/nav&gt;
&lt;!--End Kite Menu--&gt;
</pre>
<p>
4. Now, it's time to initialize kite menu plugin, call the plugin with the following selector in jquery document ready function. 
</p>
<pre class="prettyprint" lang-js">
$(document).ready(function(){
$(".kite-menu").kiteMenu();
}); 
</pre>

<p>
5. To change the kite menu skin color, put the name of theme in the following string option. 
</p>

<pre class="prettyprint" lang-js">
$(".kite-menu").kiteMenu({
 kiteSkin: "theme-name",
  });
</pre>
<p> The built-in themes name are as follows: </p>
<ol>
<li> default</li>
<li> lush</li>
<li> deep-purple</li>
<li> rainbow</li>
<li> instagram</li>
<li> dimigo</li>
<li> deep-space</li>
</ol>
<p>
6. To enable/disable text and box shadow: (default is false). 
</p>
			
<pre class="prettyprint" lang-js">
$(".kite-menu").kiteMenu({
 boxShadow: true,
 textShadow: true, 
  });
</pre>

## Author:
Asif Mughal <br>
URL: www.codehim.com
