<!DOCTYPE HTML>
<html>
<head>
    <title>Index of <%= indexName %></title>
</head>
<body>
    <h1>Index of <%= indexName %></h1>
    <ul>
        <li><a href="../">Parent Directory</a></li>
        <% fileList.forEach(function(file) { %>
        <li><a href="<%= indexName + file %>"> <%= file %></a></li>
        <% }); %>
    </ul>
</body>
</html>
