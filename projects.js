var slidesListOne = ['LINES1.jpg', 'LINES2.jpg', 'L3.jpg', 'L4.jpg', 'L5.jpg', 'L6.jpg', 
'L7.jpg', 'L8.jpg', 'L9.jpg', 'L10.jpg'];

var slidesListTwo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 
'14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', 
'29', '30', '31', '32', '33', '34', '35', '36', '37', '38'];

var slidesListThree = ['33', '94', '125', '10', '14', '15', '18', '19', '21', '30', '83', '88', 
'153', '155', '1', '2', '3', '4', '5', '6', '7', '8', 
'11', '12', '13', '16', '17', '20', '22', '23', '24', '25', '26', '28', '29', 
'31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '46', 
'47', '48', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', 
'63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', 
'79', '80', '82', '84', '85', '86', '87', '89', '90', '91', '92', 
'95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', 
'109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', 
'122', '123', '124', '126', '127', '128', '129', '130', '131', '132', '133', 
'135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', 
'148', '150', '151', '156', '157', '158', '159', '160', 
'161', '163', '164', '165', '166', '167', '170', '171', '172', '173', 
'174', '175', '177', '178', '180', '181', '182', '183', '184', '185', '186', 
'187', '188', '189', '190', '191', '192', '193', '195', '196', '176', '179', '194', '162', '9'];

var slidesListFour = ['1', '2', '3', '4', '5', '6'];

var slidesListFive = ['1', '2', '3', '4', '5', '6', '7', '8'];

var slidesListSix = ['1', '2', '3', '4']

var slidesListSeven = ['1', '2', '3', '4'];

var currentSlideIndex = 0;
var slideShowOne = document.getElementById('slideShowOne');
var slideShowOneCount = document.getElementById('slideShowOneCount');
var currentSlideOneCount;

var currentSlideIndexTwo = 0;
var slideShowTwo = document.getElementById('slideShowTwo');
var slideShowTwoCount = document.getElementById('slideShowTwoCount');
var currentSlideTwoCount;

var currentSlideIndexThree = 0;
var slideShowThree = document.getElementById('slideShowThree');
var slideShowThreeCount = document.getElementById('slideShowThreeCount');
var currentSlideThreeCount;

var currentSlideIndexFour = 0;
var slideShowFour = document.getElementById('slideShowFour');
var slideShowFourCount = document.getElementById('slideShowFourCount');
var currentSlideFourCount;

var currentSlideIndexFive = 0;
var slideShowFive = document.getElementById('slideShowFive');
var slideShowFiveCount = document.getElementById('slideShowFiveCount');
var currentSlideFiveCount;

var currentSlideIndexSix = 0;
var slideShowSix = document.getElementById('slideShowSix');
var slideShowSixCount = document.getElementById('slideShowSixCount');
var currentSlideSixCount;

var currentSlideIndexSeven = 0;
var slideShowSeven = document.getElementById('slideShowSeven');
var slideShowSevenCount = document.getElementById('slideShowSevenCount');
var currentSlideSevenCount;

var switchImageOne = document.getElementById('switchImageOne');
var switchNameOne = document.getElementById('colorOne');

var switchImageTwo = document.getElementById('switchImageTwo');
var switchNameTwo = document.getElementById('colorTwo');


function slideChangeOne(side){
    if(side === 'left'){
        if(currentSlideIndex === 0){
            currentSlideIndex = 9;
        }
        else{
            currentSlideIndex--;
        }
    }
    else{
        if(currentSlideIndex === 9){
            currentSlideIndex = 0;
        }
        else{
            currentSlideIndex++;
        }
    }
    slideShowOne.src = "Assets/" + slidesListOne[currentSlideIndex];
    currentSlideOneCount = currentSlideIndex + 1;
    slideShowOneCount.innerHTML = currentSlideOneCount;
}

function slideChangeTwo(side){
    if(side === 'left'){
        if(currentSlideIndexTwo === 0){
            currentSlideIndexTwo = 37;
        }
        else{
            currentSlideIndexTwo--;
        }
    }
    else{
        if(currentSlideIndexTwo === 37){
            currentSlideIndexTwo = 0;
        }
        else{
            currentSlideIndexTwo++;
        }
    }
    slideShowTwo.src = "Assets/Slideshow/" + slidesListTwo[currentSlideIndexTwo] + '.jpeg';
    currentSlideTwoCount = currentSlideIndexTwo + 1;
    slideShowTwoCount.innerHTML = currentSlideTwoCount;
}


function slideChangeThree(side){
    if(side === 'left'){
        if(currentSlideIndexThree === 0){
            currentSlideIndexThree = 184;
        }
        else{
            currentSlideIndexThree--;
        }
    }
    else{
        if(currentSlideIndexThree === 184){
            currentSlideIndexThree = 0;
        }
        else{
            currentSlideIndexThree++;
        }
    }
    slideShowThree.src = "Assets/Photos/" + slidesListThree[currentSlideIndexThree] + '.jpeg';
    currentSlideThreeCount = currentSlideIndexThree + 1;
    slideShowThreeCount.innerHTML = currentSlideThreeCount;
}

function slideChangeFour(side){
    if(side === 'left'){
        if(currentSlideIndexFour === 0){
            currentSlideIndexFour = 5;
        }
        else{
            currentSlideIndexFour--;
        }
    }
    else{
        if(currentSlideIndexFour === 5){
            currentSlideIndexFour = 0;
        }
        else{
            currentSlideIndexFour++;
        }
    }
    slideShowFour.src = "Assets/Digital Art/" + slidesListFour[currentSlideIndexFour] + '.png';
    currentSlideFourCount = currentSlideIndexFour + 1;
    slideShowFourCount.innerHTML = currentSlideFourCount;
}

function slideChangeFive(side){
    if(side === 'left'){
        if(currentSlideIndexFive === 0){
            currentSlideIndexFive = 7;
        }
        else{
            currentSlideIndexFive--;
        }
    }
    else{
        if(currentSlideIndexFive === 7){
            currentSlideIndexFive = 0;
        }
        else{
            currentSlideIndexFive++;
        }
    }
    slideShowFive.src = "Assets/Still Life/" + slidesListFive[currentSlideIndexFive] + '.jpeg';
    currentSlideFiveCount = currentSlideIndexFive + 1;
    slideShowFiveCount.innerHTML = currentSlideFiveCount;
}

function slideChangeSix(side){
    if(side === 'left'){
        if(currentSlideIndexSix === 0){
            currentSlideIndexSix = 3;
        }
        else{
            currentSlideIndexSix--;
        }
    }
    else{
        if(currentSlideIndexSix === 3){
            currentSlideIndexSix = 0;
        }
        else{
            currentSlideIndexSix++;
        }
    }
    slideShowSix.src = "Assets/Hand/" + slidesListSix[currentSlideIndexSix] + '.jpeg';
    currentSlideSixCount = currentSlideIndexSix + 1;
    slideShowSixCount.innerHTML = currentSlideSixCount;
}

function slideChangeSeven(side){
    if(side === 'left'){
        if(currentSlideIndexSeven === 0){
            currentSlideIndexSeven = 3;
        }
        else{
            currentSlideIndexSeven--;
        }
    }
    else{
        if(currentSlideIndexSeven === 3){
            currentSlideIndexSeven = 0;
        }
        else{
            currentSlideIndexSeven++;
        }
    }
    slideShowSeven.src = "Assets/Figures/" + slidesListSeven[currentSlideIndexSeven] + '.jpeg';
    currentSlideSevenCount = currentSlideIndexSeven + 1;
    slideShowSevenCount.innerHTML = currentSlideSevenCount;
}

function switchImage(argument){
    if(argument === 'one'){
        if(switchNameOne.innerHTML == 'Green'){
            switchNameOne.innerHTML = 'Purple';
            switchImageOne.src = 'Assets/Room Purple.jpeg';
        }
        else{
            switchNameOne.innerHTML = 'Green';
            switchImageOne.src = 'Assets/Room Green.jpeg';
        }
    }
    else{
        if(switchNameTwo.innerHTML == 'Orange'){
            switchNameTwo.innerHTML = 'Purple';
            switchImageTwo.src = 'Assets/Flowers Purple.jpeg';
        }
        else{
            switchNameTwo.innerHTML = 'Orange';
            switchImageTwo.src = 'Assets/Flowers Orange.jpeg';
        }
    }
}