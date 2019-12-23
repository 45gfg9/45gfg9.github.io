// JavaScript Document
function submittonamediv(){
    $('#namediv').text('Hello, '+$('#fname').val()+' '+$('#lname').val());
}

function alertthemwhattheytyped(){
    console.log('Hohoho');
    alert($('#input1').val);
}

function seconddivonclick(){
    $('#theseconddivinthispage').text('why u click me?');
}
