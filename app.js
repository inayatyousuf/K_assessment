
const firstSno = document.querySelector('.sno1')
const firstSongTitle = document.querySelector('.first_song_title')
const firstSingerName = document.querySelector('.singer')
const firstAlbum = document.querySelector('.album1')
const firstDate = document.querySelector('.date1');
const ratingOne = document.querySelector('.rating1')

const secondSno = document.querySelector('.sno2')
const secondSongTitle =  document.querySelector('.second_song_title')
const secondSingerName =  document.querySelector('.singerTwo')
const secondAlbum = document.querySelector('.album2')
const secondDate = document.querySelector('.date2');
const ratingTwo = document.querySelector('.rating2')

const thirdSno = document.querySelector('.sno3')
const thirdSongTitle =  document.querySelector('.third_song_title')
const thirdSingerName = document.querySelector('.singerThree')
const thirdAlbum = document.querySelector('.album3')
const thirdDate = document.querySelector('.date3');
const ratingThree= document.querySelector('.rating3')

const fourthSno = document.querySelector('.sno4')
const fourthSongTitle = document.querySelector('.fourth_song_title')
const fourthSingerName = document.querySelector('.singerFour')
const fourAlbum = document.querySelector('.album4')
const fourDate = document.querySelector('.date4');
const ratingFour = document.querySelector('.rating4')

fetch('./data/mock.json')
.then(resp => resp.json())
.then(data => fetchedData(data))

function fetchedData(results){
    firstSno.textContent=results[0].sno;
    firstSongTitle.textContent=results[0].title;
    firstSingerName.textContent=results[0].singer;
    firstAlbum.textContent=results[0].Album;
    firstDate.textContent = results[0].date;
    ratingOne.textContent = results[0].rating;

    secondSno.textContent=results[1].sno
    secondSongTitle.textContent=results[1].title
    secondSingerName.textContent=results[1].singer
    secondAlbum.textContent=results[1].Album;
    secondDate.textContent = results[1].date;
    ratingTwo.textContent = results[1].rating;

    thirdSno.textContent=results[2].sno
    thirdSongTitle.textContent=results[2].title
    thirdSingerName.textContent=results[2].singer
    thirdAlbum.textContent=results[2].Album;
    thirdDate.textContent = results[2].date;
    ratingThree.textContent = results[2].rating;

    fourthSno.textContent=results[3].sno
    fourthSongTitle.textContent=results[3].title
    fourthSingerName.textContent=results[3].singer
    fourAlbum.textContent=results[3].Album;
    fourDate.textContent = results[3].date;
    ratingFour.textContent = results[3].rating;

}


// i am not using any loop here for simplicity.