// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require underscore
//= require backbone
//= require sample_app
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

$(document).on('click', 'a#new_user_link',function(e){
	e.preventDefault();
	$.ajax({
		url: 'users/new',
		dataType: 'script'
	})
})

$(document).on('submit', 'form#new_user', function(e){
	e.preventDefault();
	$.ajax({
		url: '/users',
		type: 'post',
		data: $('form#new_user').serialize(),
		dataType: 'script'
	})
})