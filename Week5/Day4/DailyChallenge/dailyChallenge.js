// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

class Video {
    constructor(title,uploader,time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    };

    watch(){
        return `${this.uploader} watched all ${this.time} seconds of "${this.title}"!`;
    }
}

// Instantiate a new Video instance and call the watch() method.

const catVideo = new Video('Oh This Funny Cats','Jules',60);
console.log(catVideo.watch());

// Instantiate a second Video instance with different values.

const natureVideo = new Video('Top-5 Waterfalls','Mike',180);
console.log(natureVideo.watch());

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

const videosData = [
    {
    'title': 'Return of the Lion King',
    'uploader': 'Andrey',
    'time': 120
    },
    {
    'title': 'Boiled Eggs Secrets',
    'uploader': 'Maya',
    'time': 240
    },
    {
    'title': 'Homemade Hummus',
    'uploader': 'Rebecca',
    'time': 600
    },
    {
    'title': 'Best series on Netflix',
    'uploader': 'Bob',
    'time': 280
    },
    {
    'title': 'CommandLine CheatSheet: Windows',
    'uploader': 'Frank',
    'time': 480
    }];

const videos = videosData.map((data) => new Video(data.title, data.uploader, data.time));
console.log(videos);