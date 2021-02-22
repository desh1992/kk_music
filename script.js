let play_thrive = document.querySelector('#play_thrive');
let play_infinity = document.querySelector('#play_infinity');
let play_start_again = document.querySelector('#play_start_again');
let recent_volume_thrive = document.querySelector('#volume_thrive');
let volume_show_thrive = document.querySelector('#volume_show_thrive');
let recent_volume_infinity = document.querySelector('#volume_infinity');
let volume_show_infinity = document.querySelector('#volume_show_infinity');
let recent_volume_start_again = document.querySelector('#volume_start_again');
let volume_show_start_again = document.querySelector('#volume_show_start_again');
let slider_thrive = document.querySelector('#duration_slider_thrive');
let slider_infinity = document.querySelector('#duration_slider_infinity');
let slider_start_again = document.querySelector('#duration_slider_start_again');
let show_duration = document.querySelector('#show_duration');

let timer;
let Playing_song = false;

//create a audio Element
let track_thrive = document.createElement('audio');
let track_infinity = document.createElement('audio');
let track_start_again = document.createElement('audio');


//All songs list
let All_song = [
	{
		name: "Thrive",
		path: "./assets/Thrive.mp3"
	},
	{
		name: "Infinity",
		path: "./assets/Infinity.mp3"
	},
	{
		name: "Start Again",
		path: "./assets/Startagain.mp3"
	},
	{
		name: "fourth song",
		path: "music/song4.mp3"
	},
	{
		name: "fifth song",
		path: "music/song5.mp3"
	}
];


// All functions


// function load the track
function load_track() {
	clearInterval(timer);
	reset_slider();

	track_thrive.src = All_song[0].path;
	track_infinity.src = All_song[1].path;
	track_start_again.src = All_song[2].path;
	// title.innerHTML = All_song[index_no].name;
	// track_image.src = All_song[index_no].img;
	// artist.innerHTML = All_song[index_no].singer;
	track_thrive.load();
	track_infinity.load();
	track_start_again.load();

	timer = setInterval(range_slider, 1000);
	// total.innerHTML = All_song.length;
	// present.innerHTML = index_no + 1;
}

load_track();


//mute sound function
function mute_sound(track) {
	if (track == track_thrive) {
		track_thrive.volume = 0;
		volume_thrive.value = 0;
		volume_show_thrive.innerHTML = 0;
	}
	if (track == track_infinity) {
		track_infinity.volume = 0;
		volume_infinity.value = 0;
		volume_show_infinity.innerHTML = 0;
	}
	if (track == track_start_again) {
		track_start_again.volume = 0;
		volume_start_again.value = 0;
		volume_show_start_again.innerHTML = 0;
	}

}


// checking.. the song is playing or not
function justplay(track) {
	if (Playing_song == false) {
		playsong(track);

	} else {
		pausesong(track);
	}
}


// reset song slider
function reset_slider() {
	slider_thrive.value = 0;
	slider_infinity.value = 0;
	slider_start_again.value = 0;
}

// play song
function playsong(track) {
	if (track == track_thrive) {
		track.play();
		Playing_song = true;
		play_thrive.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if (track == track_infinity) {
		track.play();
		Playing_song = true;
		play_infinity.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if (track == track_start_again) {
		track.play();
		Playing_song = true;
		play_start_again.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

//pause song
function pausesong(track) {
	if (track == track_thrive) {
		track.pause();
		Playing_song = false;
		play_thrive.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
	if (track == track_infinity) {
		track.pause();
		Playing_song = false;
		play_infinity.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
	if (track == track_start_again) {
		track.pause();
		Playing_song = false;
		play_start_again.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
}

// change volume
function volume_change(track) {
	if (track == track_thrive) {
		volume_show_thrive.innerHTML = recent_volume_thrive.value;
		track_thrive.volume = recent_volume_thrive.value / 100;
	}
	if (track == track_infinity) {
		volume_show_infinity.innerHTML = recent_volume_infinity.value;
		track_infinity.volume = recent_volume_infinity.value / 100;
	}
	if (track == track_start_again) {
		volume_show_start_again.innerHTML = recent_volume_start_again.value;
		track_start_again.volume = recent_volume_start_again.value / 100;
	}
}

// change slider position 
function change_duration(track) {
	if (track == track_thrive) {
		slider_position = track_thrive.duration * (slider_thrive.value / 100);
		track_thrive.currentTime = slider_position;
	}
	if (track == track_infinity) {
		slider_position = track_infinity.duration * (slider_infinity.value / 100);
		track_infinity.currentTime = slider_position;
	}
	if (track == track_start_again) {
		slider_position = track_start_again.duration * (slider_start_again.value / 100);
		track_start_again.currentTime = slider_position;
	}
}


function range_slider() {
	let position = 0;

	// update slider position
	if (!isNaN(track_thrive.duration)) {
		position = track_thrive.currentTime * (100 / track_thrive.duration);
		slider_thrive.value = position;
	}


	// function will run when the song is over
	if (track_thrive.ended) {
		play_thrive.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}

	// update slider position
	if (!isNaN(track_infinity.duration)) {
		position = track_infinity.currentTime * (100 / track_infinity.duration);
		slider_infinity.value = position;
	}


	// function will run when the song is over
	if (track_infinity.ended) {
		play_infinity.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}

	// update slider position
	if (!isNaN(track_start_again.duration)) {
		position = track_start_again.currentTime * (100 / track_start_again.duration);
		slider_start_again.value = position;
	}


	// function will run when the song is over
	if (track_start_again.ended) {
		play_start_again.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
}