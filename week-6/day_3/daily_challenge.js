// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video{
    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

let video1 = new Video('Titanic', 'Raquel', 120,)
video1.watch()
let video2 = new Video('Ratatouille', 'Ezra', 300,)
let arr = [
    {title: 'Titanic', uploader: 'Raquel', time: 30},
    {title: 'Ratatouille', uploader: 'Ezra', time: 10},
    {title: 'Harry Potter', uploader: 'Judith', time: 20},
    {title: 'hgfdsd', uploader: 'Lea', time: 40},
    {title: 'Slikujytre', uploader: 'Elliot', time: 50}
];

let videos = arr.map((item) => {
    return new Video(item.title, item.uploader, item.time);
});

videos.forEach(item => {
    console.log(item.watch);
})


10 אנשים תחתיו 2019-24 2021-24