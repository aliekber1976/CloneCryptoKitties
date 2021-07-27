
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthandBelly(color,code) {
    $('.cat__mouth-contour, .cat__tail, .cat__chest_inner ').css('background', '#' + color)  //This changes the color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.cat__eye').find('span').css('background', '#' + color)  //This changes the color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earsAndPaw(color,code) {
    $('.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right, .cat__paw-left_inner, .cat__paw-right_inner').css('background', '#' + color)  //This changes the color of the cat
    $('#earscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function decorationMidColor(color,code) {
    $('.cat__head-dots').css('background', '#' + color)  //This changes the color of the cat
    $('#midcolorcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function decorationSidesColor(color,code) {
    $('.cat__head-dots_first, .cat__head-dots_second').css('background', '#' + color)  //This changes the color of the cat
    $('#sidecolorcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the body color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('shiny')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyeName').html('i dont know yet')
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyeName').html('help me')
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyeName').html('hyptonize')
            eyesType5()
            break
        case 7:
            normalEyes()
            $('#eyeName').html('dont tell anyone')
            eyesType6()
            break
        default:
            console.log("Not 1 or 2")
            break    
    }   
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            normaldecoration()
            $('#decorationName').html('Basic')
            break

        case 2:
            normaldecoration()
            $('#decorationName').html('i dont know')
            normaldecoration1()
            break

        case 3:
            normaldecoration()
            $('#decorationName').html('how you want')
            normaldecoration2()
            break

        case 4:
            normaldecoration()
            $('#decorationName').html('not sure')
            normaldecoration3()
            break

        case 5:
            normaldecoration()
            $('#decorationName').html('oo different')
            normaldecoration4()
            break

        case 6:
            normaldecoration()
            $('#decorationName').html('pyscho')
            normaldecoration5()
            break

        case 7:
            normaldecoration()
            $('#decorationName').html('vallah ich nicht')
            normaldecoration6()
            break

        default:
            console.log("Not 1 or 2")
            break 
    }
}

function animationVariation(num) {
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            $('#animationName').html('Basic')
            animationtype()
            break

        case 2:
            $('#animationName').html('i dont know')
            animationtype1()
            break

        case 3:
            $('#animationName').html('how you want')
            animationtype2()
            break

        case 4:
            $('#animationName').html('hungry')
            animationtype3()
            break

        case 5:
            $('#animationName').html('oo different')
            animationtype4()
            break

        case 6:
            $('#animationName').html('cutie')
            animationtype5()
            break
    }
}
//animation functions
async function animationtype() {
    resetAnimation();
    await $("#head").addClass("movingHead");
}

async function animationtype1() {
    resetAnimation();
    await $("#midDot").addClass("movingMidDot");
}

async function animationtype2() {
    resetAnimation();
    await $("#tail").addClass("movingTail");
}

async function animationtype3() {
    resetAnimation();
    await $("#leftEar").addClass("movingSingleEarLeft");
}

async function animationtype4() {
    resetAnimation();
    await $("#rightEar").addClass("movingSingleEarRight");
}

async function animationtype5() {
    resetAnimation();
}

//reset animations
function resetAnimation(){
     $("#head").removeClass("movingHead");
     $("#midDot").removeClass("movingMidDot");
     $("#tail").removeClass("movingTail");
     $("#leftEar").removeClass("movingSingleEarLeft");
     $("#rightEar").removeClass("movingSingleEarRight");
}




// eyes functions
async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function eyesType1() {
    await $('.cat__eye').find('span').css('border-top', '15px solid')
}

async function eyesType2() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')
}

async function eyesType3() {
    await $('.cat__eye').find('span').css('border-left', '10px solid')
}

async function eyesType4() {
    await $('.cat__eye').find('span').css('border-right', '10px solid')
}

async function eyesType5() {
    await $('.cat__eye').find('span').css('border-top', '8px solid')
    await $('.cat__eye').find('span').css('border-bottom', '8px solid')
    await $('.cat__eye').find('span').css('border-left', '8px solid')
    await $('.cat__eye').find('span').css('border-right', '8px solid')
}

async function eyesType6() {
    await $('.cat__eye').find('span').css('border-bottom', '7px solid')
    await $('.cat__eye').find('span').css('border-left', '7px solid')
    await $('.cat__eye').find('span').css('border-right', '7px solid')
}

//decoration functions

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "13px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "24px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normaldecoration1() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "45px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "30px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normaldecoration2() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "33px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normaldecoration3() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "67px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normaldecoration4() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "19px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normaldecoration5() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "55px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normaldecoration6() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "80px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
