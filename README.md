# containsAll
Extend the ability of classList, relList, sandBox and htmlFor to search for many instead of single.


<pre>

&lt;div class="class_one class_two"&gt;

&lt;/di&gt;

</pre>

<pre>

var element = document.getElementById("element_id");
element.classList.containsAll("class_one class_two"); // returns true

</pre>

For Information About DOMTokenList

https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
