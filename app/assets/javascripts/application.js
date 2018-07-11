// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $(document.ready(function(){
//     $("ul").on("click",input[type="checkbox"],function(){
//         $(this).closest("li").togleClass("completed-todo")}}
        

    console.log ("hello world");
   
    var pomodoros= $("#pomodoros").val(); 
    
    var name_of_todo= $("#name_of_todo").val();

    // $(document).ready(console.log("Hello World"));
    
    // $(document).ready($("#add_to_do_button").click(function(){console.log("this works");}))
    
    // $(document).ready(function(){console.log("this works");
    // $("add_to_do_button").click(function(){console.log("this works")})});
    
    
    $(document).ready(function(){
        console.log("hello")
        $("#add_to_do_button").click(function(){
            console.log("button works")
            var name_of_todo= $("#name_of_todo").val()
            var pomodoros= $("#number_of_pomodoros").val()
            console.log(name_of_todo) 
            console.log(pomodoros)
            $("ul").append("<li><input type='checkbox'/>"+name_of_todo+"<span class='pomodoros'>"+pomodoros+"</span></li>");
        })
        $("input[type='checkbox']").click(function(){
            $(this).closest('li').toggleClass('completedtasks')
            console.log("hi")
        })
    })