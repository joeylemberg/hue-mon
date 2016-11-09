/* webcam snapshot code from copied from https://davidwalsh.name/demo/camera.php */
		// Put event listeners into place

			window.addEventListener("DOMContentLoaded", function() {
				// Grab elements, create settings, etc.
	            var canvas = document.getElementById('rider-camera-film');
	            var context = canvas.getContext('2d');
	            var video = document.getElementById('video');
	            var mediaConfig =  { video: true };
	            var errBack = function(e) {
	            	console.log('An error has occurred!', e);
	            };

				// Put video listeners into place
	            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	                navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
	                    video.src = window.URL.createObjectURL(stream);
	                    video.play();
	                });
	            }

	            /* Legacy code below! */
	            else if(navigator.getUserMedia) { // Standard
					navigator.getUserMedia(mediaConfig, function(stream) {
						video.src = stream;
						video.play();
					}, errBack);
				} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
					navigator.webkitGetUserMedia(mediaConfig, function(stream){
						video.src = window.webkitURL.createObjectURL(stream);
						video.play();
					}, errBack);
				} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
					navigator.mozGetUserMedia(mediaConfig, function(stream){
						video.src = window.URL.createObjectURL(stream);
						video.play();
					}, errBack);
				}


				// Trigger photo take
		//		document.getElementById('snap-photo').addEventListener('click', function() {
					//context.drawImage(video, 0, 0, 640, 480);
window.snapPhoto = function() {
					var canvas = document.getElementById('rider-camera-film');
					//TODO

					var w = video.videoWidth;
					var h = video.videoHeight;
					canvas.width = w;
					canvas.height = h;
					context.drawImage(video,0,0,w,h);
					//var scale = 360/ h;

					//query the dom elements to determine the correct size/position for the video
				//	context.drawImage(video,-(w-300)/2*scale,0, w*scale, h*scale);

				///	context.drawImage(video, -200, 0, 640, 480);
					//(video.width - 200)
				///});
			};
			}, false);
