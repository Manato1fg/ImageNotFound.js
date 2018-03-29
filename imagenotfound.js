/*
 * @Author Manato2cc
 * @Licence MIT
 */

var ImageNotFound = {};

ImageNotFound.defaultImageUrl = "imagenotfound.png";

ImageNotFound.set = function(image) {
	var url = image.src;
	
	image.src = url;
	image.onerror = function(){
		image.src = ImageNotFound.defaultImageUrl;
	}
}

ImageNotFound.loadAllImagesUrl = function(){
	var images = document.getElementsByTagName("img");
	for (var i = images.length - 1; i >= 0; i--) {
		ImageNotFound.set(images[i]);
	}
}

document.addEventListener('DOMContentLoaded', ImageNotFound.loadAllImagesUrl);