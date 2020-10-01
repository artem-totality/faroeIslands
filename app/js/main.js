$('.getting__slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    infinite: true,
    // autoplay: 500,
    // slidesToScroll: 4,
});

const controls = [
    'play-large', // The large play button in the center
    // 'restart', // Restart playback
    // 'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    // 'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    // 'mute', // Toggle mute
    'volume', // Volume control
    // 'captions', // Toggle captions
    // 'settings', // Settings menu
    // 'pip', // Picture-in-picture (currently Safari only)
    // 'airplay', // Airplay (currently Safari only)
    // 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
    'fullscreen' // Toggle fullscreen
];

const players = Plyr.setup('.js-player', { controls });

$('.menu__btn').on('click', function(){
    $('.header .menu__list > ul').slideToggle();
  });