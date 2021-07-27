<!DOCTYPE html>

<html>

<body>

<h2>Creating an Object from a JSON String</h2>

<p id="name"></p>

<p id="city"></p>

<p id="age"></p>

<script>

    const txt = {"question":"John", "answer1":30, "answer2":"New York"}" const obj = JSON.parse(txt);

    document.getElementById("ques").innerHTML = obj.name

    document.getElementById("city").innerHTML = obj.city

    document.getElementById("age").innerHTML

</script>

</body> </html>

= obj.age