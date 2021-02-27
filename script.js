// Dance
let play_dance = document.querySelector('#play_dance');
let recent_volume_dance = document.querySelector('#volume_dance');
let volume_show_dance = document.querySelector('#volume_show_dance');
let slider_dance = document.querySelector('#duration_slider_dance');

// Infinity
let play_infinity = document.querySelector('#play_infinity');
let recent_volume_infinity = document.querySelector('#volume_infinity');
let volume_show_infinity = document.querySelector('#volume_show_infinity');
let slider_infinity = document.querySelector('#duration_slider_infinity');

// Start Again Produce
let play_start_again_produce = document.querySelector('#play_start_again_produce');
let recent_volume_start_again_produce = document.querySelector('#volume_start_again_produce');
let volume_show_start_again_produce = document.querySelector('#volume_show_start_again_produce');
let slider_start_again_produce = document.querySelector('#duration_slider_start_again_produce');

// Incredible
let play_incredible = document.querySelector('#play_incredible');
let recent_volume_incredible = document.querySelector('#volume_incredible');
let volume_show_incredible = document.querySelector('#volume_show_incredible');
let slider_incredible = document.querySelector('#duration_slider_incredible');

// Start Again Acoustic
let play_start_again = document.querySelector('#play_start_again');
let recent_volume_start_again = document.querySelector('#volume_start_again');
let volume_show_start_again = document.querySelector('#volume_show_start_again');
let slider_start_again = document.querySelector('#duration_slider_start_again');


let show_duration = document.querySelector('#show_duration');

let timer;
let Playing_song = false;

//create a audio Element

let track_dance = document.createElement('audio');
let track_infinity = document.createElement('audio');
let track_start_again_produce = document.createElement('audio');
let track_incredible = document.createElement('audio');
let track_start_again = document.createElement('audio');


//All songs list
let All_song = [
	{
		name: "Dance",
		path: "./assets/dance.mp3"
	},
	{
		name: "Infinity",
		path: "./assets/infinity.mp3"
	},
	{
		name: "Start Again Produce",
		path: "./assets/startagainproduce.mp3"
	},
	{
		name: "Incredible",
		path: "./assets/incredible.mp3"
	},
	{
		name: "Start Again Acoustic",
		path: "./assets/startagain.mp3"
	}
];


// All functions


// function load the track
function load_track() {
	clearInterval(timer);
	reset_slider();

	track_dance.src = All_song[0].path;
	track_infinity.src = All_song[1].path;
	track_start_again_produce.src = All_song[2].path;
	track_incredible.src = All_song[3].path;
	track_start_again.src = All_song[4].path;


	track_dance.load();
	track_infinity.load();
	track_start_again_produce.load();
	track_incredible.load();
	track_start_again.load();

	timer = setInterval(range_slider, 1000);

}

load_track();


//mute sound function
function mute_sound(track) {

	if (track == track_dance) {
		track_dance.volume = 0;
		volume_dance.value = 0;
		volume_show_dance.innerHTML = 0;
	}
	if (track == track_infinity) {
		track_infinity.volume = 0;
		volume_infinity.value = 0;
		volume_show_infinity.innerHTML = 0;
	}
	if (track == track_start_again_produce) {
		track_start_again_produce.volume = 0;
		volume_start_again_produce.value = 0;
		volume_show_start_again_produce.innerHTML = 0;
	}
	if (track == track_incredible) {
		track_incredible.volume = 0;
		volume_incredible.value = 0;
		volume_show_incredible.innerHTML = 0;
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

	slider_dance.value = 0;
	slider_infinity.value = 0;
	slider_start_again_produce.value = 0;
	slider_incredible.value = 0;
	slider_start_again.value = 0;
}

// play song
function playsong(track) {

	if (track == track_dance) {
		track.play();
		Playing_song = true;
		play_dance.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if (track == track_infinity) {
		track.play();
		Playing_song = true;
		play_infinity.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if (track == track_start_again_produce) {
		track.play();
		Playing_song = true;
		play_start_again_produce.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if (track == track_incredible) {
		track.play();
		Playing_song = true;
		play_incredible.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
	if (track == track_start_again) {
		track.play();
		Playing_song = true;
		play_start_again.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}
}

//pause song
function pausesong(track) {

	if (track == track_dance) {
		track.pause();
		Playing_song = false;
		play_dance.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
	if (track == track_infinity) {
		track.pause();
		Playing_song = false;
		play_infinity.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
	if (track == track_start_again_produce) {
		track.pause();
		Playing_song = false;
		play_start_again_produce.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
	if (track == track_incredible) {
		track.pause();
		Playing_song = false;
		play_incredible.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
	if (track == track_start_again) {
		track.pause();
		Playing_song = false;
		play_start_again.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
}

// change volume
function volume_change(track) {

	if (track == track_dance) {
		volume_show_dance.innerHTML = recent_volume_dance.value;
		track_dance.volume = recent_volume_dance.value / 100;
	}
	if (track == track_infinity) {
		volume_show_infinity.innerHTML = recent_volume_infinity.value;
		track_infinity.volume = recent_volume_infinity.value / 100;
	}
	if (track == track_start_again_produce) {
		volume_show_start_again_produce.innerHTML = recent_volume_start_again_produce.value;
		track_start_again_produce.volume = recent_volume_start_again_produce.value / 100;
	}
	if (track == track_incredible) {
		volume_show_incredible.innerHTML = recent_volume_incredible.value;
		track_incredible.volume = recent_volume_incredible.value / 100;
	}
	if (track == track_start_again) {
		volume_show_start_again.innerHTML = recent_volume_start_again.value;
		track_start_again.volume = recent_volume_start_again.value / 100;
	}
}

// change slider position 
function change_duration(track) {

	if (track == track_dance) {
		slider_position = track_dance.duration * (slider_dance.value / 100);
		track_dance.currentTime = slider_position;
	}
	if (track == track_infinity) {
		slider_position = track_infinity.duration * (slider_infinity.value / 100);
		track_infinity.currentTime = slider_position;
	}
	if (track == track_start_again_produce) {
		slider_position = track_start_again_produce.duration * (slider_start_again_produce.value / 100);
		track_start_again_produce.currentTime = slider_position;
	}
	if (track == track_incredible) {
		slider_position = track_incredible.duration * (slider_incredible.value / 100);
		track_incredible.currentTime = slider_position;
	}
	if (track == track_start_again) {
		slider_position = track_start_again.duration * (slider_start_again.value / 100);
		track_start_again.currentTime = slider_position;
	}
}


function range_slider() {
	let position = 0;

	// update slider position
	if (!isNaN(track_dance.duration)) {
		position = track_dance.currentTime * (100 / track_dance.duration);
		slider_dance.value = position;
	}

	// function will run when the song is over
	if (track_dance.ended) {
		play_dance.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
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
	if (!isNaN(track_start_again_produce.duration)) {
		position = track_start_again_produce.currentTime * (100 / track_start_again_produce.duration);
		slider_start_again_produce.value = position;
	}

	// function will run when the song is over
	if (track_start_again_produce.ended) {
		play_start_again_produce.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}

	// update slider position
	if (!isNaN(track_incredible.duration)) {
		position = track_incredible.currentTime * (100 / track_incredible.duration);
		slider_incredible.value = position;
	}

	// function will run when the song is over
	if (track_incredible.ended) {
		play_incredible.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
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