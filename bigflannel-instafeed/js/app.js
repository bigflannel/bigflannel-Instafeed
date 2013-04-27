/* (c) 2013 bigflannel */
/* This code is licensed under MIT license (see LICENSE.txt for details) */


/* variables for the all pages */
var columnMaxWidth;
var columnMaxHeight;
var imageBorder = 40;
var codeBase = '001';

/* functions for all pages */
function constructor() {
	// do the content column width
	columnMaxWidth = $(window).width() - $("#left-column").width();
	columnMaxHeight = $(window).height();
	$("#right-column").css("width", columnMaxWidth);
	// add and or load the logo
	if (settingsData.logoType == 'text') {
		$('#logo').html('<a href="' + srcPrefix + 'index.php">' + settingsData.logoText + '</a>');
		$('#home').remove();
	} else if (settingsData.logoType == 'graphic') {
		$('#logo').html('<a href="' + srcPrefix + 'index.php"><img id="logo-file" src="' + srcPrefix + settingsData.logoFile + '"></a>');
		$('#home').remove();
	}
	// add additional links
	if (settingsData.hasLink) {
		$('#links').html('<a href="' + settingsData.siteLinkAddress + '">' + settingsData.siteLinkText + '</a>');
	}
	$(window).resize(function windowResized() {
		columnMaxWidth = $(window).width() - $("#left-column").width();
		columnMaxHeight = $(window).height();
		$("#right-column").css("width", columnMaxWidth);
		$(".image-main").css("max-width", columnMaxWidth-imageBorder);
		$(".image-main").css("max-height", columnMaxHeight-imageBorder);
	});
}


/* variables for the slideshow on content pages */
var imageCount;
var imageData;
var totalCount;
var slideshowState = false;


/* functions for the slideshow on content pages */
function slideshowConstructor(imageDataSent,imageCountSent,totalCountSent) {
	imageData = imageDataSent;
	imageCount = imageCountSent;
	totalCount = totalCountSent;
	addContent();
}
function addContent() {
	$("#image").html('<img src="' + imageData[imageCount].images.standard_resolution.url + '" class="image-main">');
	$("#image-caption").html(imageCaptionText(imageData[imageCount].created_time));
	$(".image-main").css("max-width", columnMaxWidth-imageBorder);
	$(".image-main").css("max-height", columnMaxHeight-imageBorder);
}
function slideshowStart() {
	slideshowState = true;
	next();
	loadCounter = setTimeout('next()', 3000);	
}
function slideshowStop() {
	slideshowState = false;
	clearTimeout(loadCounter);
}
function next() {
	imageCount = imageCount + 1;
	if (imageCount == totalCount) {
		imageCount = 0;
	}
	$('#image').fadeOut('fast', 'swing', function() {
	    // animation complete
	    $("#image").html('<img src="' + imageData[imageCount].images.standard_resolution.url + '" class="image-main">');
	    $("#image-caption").html(imageCaptionText(imageData[imageCount].created_time));
	    $(".image-main").css("max-width", columnMaxWidth-imageBorder);
	    $(".image-main").css("max-height", columnMaxHeight-imageBorder);
	    $('#image').css('display', 'block');
	    $("#image-count").text((imageCount+1) + ' of ' + totalCount);
	    if (slideshowState == true) {
	    	clearTimeout(loadCounter);
		    loadCounter = setTimeout('next()', 3000);
		}
	});
}
function previous() {
	imageCount = imageCount - 1;
	if (imageCount <  0) {
		imageCount = totalCount-1;
	}
	$('#image').fadeOut('fast', 'swing', function() {
	    // animation complete
	    $("#image").html('<img src="' + imageData[imageCount].images.standard_resolution.url + '" class="image-main">');
	    $("#image-caption").html(imageCaptionText(imageData[imageCount].created_time));
	    $(".image-main").css("max-width", columnMaxWidth-imageBorder);
	    $(".image-main").css("max-height", columnMaxHeight-imageBorder);
	    $('#image').css('display', 'block');
	    $("#image-count").text((imageCount+1) + ' of ' + totalCount);
	});
}
function imageCaptionText(timestamp) {
	var text = 'Filter: ' + imageData[imageCount].filter + '<br />'
	if (imageData[imageCount].caption != null) {
		text = text + 'Caption: ' +  imageData[imageCount].caption.text + '<br />';
	}
	if (imageData[imageCount].likes.count > 0) {
		text = text + 'Likes: ' + imageData[imageCount].likes.count + '<br />';
	}
	if (imageData[imageCount].comments.count > 0) {
		text = text + 'Comments: ' + imageData[imageCount].comments.count + '<br />';
	}
	if (imageData[imageCount].location != null) {
		text = text + 'Location: ' + imageData[imageCount].location + '<br />';
	}
	var date = new Date(1000*timestamp);
	text = text + 'Date: ' + date.toLocaleString() + '<br />';
	text = text + '<a href="' + imageData[imageCount].link + '">On Instagram</a><br />';
	return text;
}