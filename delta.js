
feather.replace()
$(document).ready(function(){
    $(document).on("contextmenu", function(e) {
        return false;
    });
    $(document).keydown(function(event) {
        if (event.keyCode == 123 || (event.ctrlKey && event.keyCode == 85) || (event.ctrlKey && event.shiftKey && event.keyCode == 73 || event.keyCode == 116)) {
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            return false; //Prevent from ctrl+shift+i
        }    });
    tippy('[title]', {
				arrow: false,
				delay: 0,
				duration: 0,
				distance: 45,
				maxWidth: 300,
				followCursor: true,
				allowHTML: true,
                theme: 'custom',
				ignoreAttributes: true,
        content(reference) {
            const title = reference.getAttribute('title');
            reference.removeAttribute('title');
            return title;
        },
    });
});    
$(document).ready(function() {
    $(".home-link").hover(
      function () {
         $(".home-title").css('opacity' , '1');
        },
        function () {
         $(".home-title").css('opacity' , '0');
        });
    $(".talk-link").hover(
      function () {
         $(".talk-title").css('opacity' , '1');
        },
        function () {
         $(".talk-title").css('opacity' , '0');
        });
    $(".links-link").hover(
      function () {
         $(".links-title").css('opacity' , '1');
        },
        function () {
         $(".links-title").css('opacity' , '0');
        });
    $(".archive-link").hover(
      function () {
         $(".archive-title").css('opacity' , '1');
        },
        function () {
         $(".archive-title").css('opacity' , '0');
        });
    });
    $('#scrolltop').click(function() {
        $('body, html').animate({scrollTop:0}, 1500);
    });
    $('.talk-link').click(function() {
        $('#posts-inner,#link-menu').hide();
        $('#nav-menu,#back-link').show();
    });
    $('.links-link').click(function() {
        $('#posts-inner,#nav-menu').hide();
        $('#link-menu,#back-link').show();
    });
    $('#back-link').click(function() {
        $('#link-menu,#nav-menu,#back-link').hide();
        $('#posts-inner').show();
    });
$('#scrolltop').hide(); 
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 0 ) { 
            $('#scrolltop').show(); } 
            else { $('#scrolltop').hide();} 
});
	var $container = $('#posts');
	$container.find('.note-count').each(function() {
		var n = $(this).html().split(' ')[0].replace(/,/g, '');
		if (n > 999) {
			n = Math.floor(n / 100) / 10;
			$(this).text(n + 'k notes');
		} else if (n > 1 && n <= 999) {
			$(this).text(n + ' notes');
		} else if (n <= 0) {
			$(this).css('display' , 'none');
		} else {
			$(this).text(n + ' note');
		}
	});
$(document).ready(function() {
	$(".time-ago").timeAgo({
		time: "short",
		spaces: false,
		words: false,
		prefix: "",
		suffix: " ago",
	});
	// minimal soundcloud player Â© shythemes.tumblr
	$(document).ready(function() {
		var color = 'var(--accent)'; // color of play button (hex)
		$('.soundcloud_audio_player').each(function() {
			$(this).attr({
				src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1],
				height: 116,
				width: '100%'
			});
		});
	});

});
npfPhotosets(".post", {
	rowClass: "npf_row",
	imageContainerClass: "tmblr-full",
	generatedPhotosetContainerClass: "npf_photoset",
	imageClass: "npf_image",
	includeCommonPhotosets: true,
	useTumblrLightbox: false,
	insertGalleryIndicator: false,
	galleryIndicatorClass: "npf_gallery_indicator",
	galleryIndicatorContent: "<img src='image_url'>",
	photosetMargins: "5"
});

function gatherData(images, arr) {
	for (let i = 0; i < images.length; i++) {
		let currentData = {
			"width": images[i].getAttribute('data-width'),
			"height": images[i].getAttribute('data-height'),
			"low_res": images[i].getAttribute('data-lowres'),
			"high_res": images[i].getAttribute('data-highres')
		};
		arr.push(currentData);
	}
}
function getIndex(elem) {
	let i = 0;
	while ((elem = elem.previousElementSibling) != null) i++;
	return i;
}
function lightbox(elem) {
	let currentPhotoset = elem.parentNode;
	let photosetPhotos = currentPhotoset.getElementsByTagName('div');
	let data = [];
	gatherData(photosetPhotos, data);
	Tumblr.Lightbox.init(data, getIndex(elem) + 1);
}
$(document).ready(function() {
customAudio({
	post: ".post",
	default: false,
	pauseAll: true,
	playButton: "<i data-feather='play' style='margin-right:-2px;'></i>",
	pauseButton: "<i data-feather='pause'></i>",
	errorIcon: "<i data-feather='loader'></i>",
	hideInfoIfError: true,
	callAfterLoad: () => {
		feather.replace();
	},
});});