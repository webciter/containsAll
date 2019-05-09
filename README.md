# containsAll
Extend the ability of classList, relList, sandBox and htmlFor to search for many instead of single values


<pre>

&lt;div class="class_one class_two"&gt;

&lt;/div&gt;

</pre>

<pre>

var element = document.getElementById("element_id");
element.classList.containsAll("class_one class_two"); // returns true

</pre>

<h2>Installation</h2>

<pre>
npm i dom_token_list-functions-contains_all
</pre>

For Information About DOMTokenList

https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
