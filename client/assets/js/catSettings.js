
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 56,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
    $('#dnabody').html(defaultDNA.headColor);
    $('#dnamouth').html(defaultDNA.mouthColor);
    $('#dnaeyes').html(defaultDNA.eyesColor);
    $('#dnaears').html(defaultDNA.earsColor);
    
    $('#dnashape').html(defaultDNA.eyesShape)
    $('#dnadecoration').html(defaultDNA.decorationPattern)
    $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
    $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
    $('#dnaanimation').html(defaultDNA.animation)
    $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthandBelly(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    earsAndPaw(colors[dna.earsColor],dna.earsColor)
    $('#earcolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decorationpattern').val(dna.decorationPattern)
    decorationMidColor(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#decorationmid').val(dna.decorationMidcolor)
    decorationSidesColor(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#decorationsides').val(dna.decorationSidescolor)
    animationVariation(dna.animation)
    $('#animation1').val(dna.animation)

    $("#eyeShapeGroup").hide();
    $("#decoGroup").hide();
    $('#midDecoGroup').hide();
    $('#sideDecoGroup').hide();
    $("#animGroup").hide();

    
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#mouthcolor').change(()=>{
  var colorVal = $('#mouthcolor').val()
  mouthandBelly(colors[colorVal],colorVal)
})

$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val()
  eyeColor(colors[colorVal],colorVal)
})

$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earsAndPaw(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
  var shape = parseInt($('#eyeshape').val())
  eyeVariation(shape) 
})

$('#decorationpattern').change(()=>{
  var pattern = parseInt($('#decorationpattern').val())
  decorationVariation(pattern) 
})

$('#decorationmid').change(()=>{
  var colorVal = $('#decorationmid').val()
  decorationMidColor(colors[colorVal],colorVal)
})

$('#decorationsides').change(()=>{
  var colorVal = $('#decorationsides').val()
  decorationSidesColor(colors[colorVal],colorVal) 
})

$('#animation1').change(()=>{
  var animationVal = parseInt($('#animation1').val())
  animationVariation(animationVal) 
})


$('#btnColorsTab').click(()=>{
  $("#headGroup").show()
  $("#mouthGroup").show()
  $("#eyesGroup").show()
  $("#earsGroup").show()

  $("#eyeShapeGroup").hide();
  $("#decoGroup").hide();
  $('#midDecoGroup').hide();
  $('#sideDecoGroup').hide();
  $("#animGroup").hide();
})


$('#btnAttributesTab').click(()=>{
  $('#headGroup').hide();
  $('#mouthgroup').hide();
  $('#eyesGroup').hide();
  $('#earsGroup').hide();

  $('#eyeShapeGroup').show();
  $('#decoGroup').show();
  $('#midDecoGroup').show();
  $('#sideDecoGroup').show();
  $("#animGroup").show();
})

$('#random').click(()=>{
  var bodycolor = Math.floor(Math.random() * 89) + 10;
  headColor(colors[bodycolor],bodycolor)
  $("#bodycolor").val(bodycolor)

  var mouthcolor = Math.floor(Math.random() * 89) + 10;
  mouthandBelly(colors[mouthcolor],mouthcolor)
  $("#mouthcolor").val(mouthcolor)

  var eyecolor = Math.floor(Math.random() * 89) + 10;
  eyeColor(colors[eyecolor],eyecolor)
  $("#eyecolor").val(eyecolor)

  var earcolor = Math.floor(Math.random() * 89) + 10;
  earsAndPaw(colors[earcolor],earcolor)
  $("#earcolor").val(earcolor)

  var eyevar = Math.floor(Math.random() * (7 - 1 + 1) + 1);
  eyeVariation(eyevar)
  $("#eyeshape").val(eyevar)

  var decovar = Math.floor(Math.random() * (7 - 1 + 1) + 1);
  decorationVariation(decovar)
  $("#decorationpattern").val(decovar)

  var decMidVar = Math.floor(Math.random() * 89) + 10;
  decorationMidColor(colors[decMidVar],decMidVar)
  $("#decorationmid").val(decMidVar)

  var decSideVar = Math.floor(Math.random() * 89) + 10;
  decorationSidesColor(colors[decSideVar],decSideVar)
  $("#decorationsides").val(decSideVar)

  var anim = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  animationVariation(anim)
  $("#animation1").val(anim)
})

$('#reset').click(() => {
  renderCat(defaultDNA)  
})
