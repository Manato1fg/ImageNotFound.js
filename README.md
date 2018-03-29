# ImageNotFound.js
Show default image if the image's url is wrong or deleted on server.

## What this can do?
If you don't use<br>
<img src="https://raw.githubusercontent.com/Manato2cc/ImageNotFound.js/master/document/a.png" width="700"><br>
But If you use<br>
<img src="https://raw.githubusercontent.com/Manato2cc/ImageNotFound.js/master/document/b.png" width="700"><br>
Also If you set your own image<br>
<img src="https://raw.githubusercontent.com/Manato2cc/ImageNotFound.js/master/document/c.png" width="700"><br>

## Usage
put imagenotfound.js on your server.
```html
<script type="text/javascript" src="path/to/imagenotfound.js"></script>
<script type="text/javascript">
  //If you wanna use your own image instead of default image.
	ImageNotFound.defaultImageUrl = "document/myNotFoundImage.png";
</script>
```
