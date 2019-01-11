const displayQuestion = () => {
    const display = document.getElementById('meetupsQuestion');
    if (display.style.display == 'block'){
            display.style.display = 'none';
    }else{
            display.style.display = 'block';
    }
};
// document.getElementById("meetupQh").onclick = () => {
//         mainForm.removeChild(questionfield);
//     }
const comment = () => {
    const text = document.getElementById('meetupscomment');
    if (text.style.display == 'block') {
            text.style.display = 'none';  } 
            else {
           text.style.display = 'block';  
    }
};

// delete meetup
const deletemeetup = () => {
        let deletediv = document.getElementById('adminmeetupfeedDL');
        deletediv.remove();   
};