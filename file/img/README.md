<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>koirdsuzu</title>
    <style>
        body { font-family: Arial, sans-serif; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 5px 0; }
    </style>
</head>
<body>
    <h1>恋鈴の素材置き場</h1>
    <ul id="file-list"></ul>

    <script>
        const owner = "koirdsuzu";
        const repo = "koirdsuzu";
        const branch = "main";
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/`;

        async function fetchFiles() {
            const response = await fetch(url);
            const data = await response.json();
            const fileList = document.getElementById("file-list");

            data.forEach(file => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = file.download_url;
                a.textContent = file.name;
                li.appendChild(a);
                fileList.appendChild(li);
            });
        }

        fetchFiles();
    </script>
</body>
</html>
