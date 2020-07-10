let myYouTubeVideo = {
    title: 'Objects in javascript',
    video: '15',
    videoCreator: 'Deepak Rai',
    videoDescription: 'this is a video description and a long one',
    videoTopic: function () {
        console.log('javascript for absolute beginers')
    },
    thisFunction() { // another way to declare function
        console.log(this.video)  // using this keyword to access object's element
    }
}

console.log(myYouTubeVideo);
myYouTubeVideo.videoTopic();
myYouTubeVideo.thisFunction();

console.log(`Hey new video on ${myYouTubeVideo.title} by ${myYouTubeVideo.videoCreator}`);
