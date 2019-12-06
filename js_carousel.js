

$('.owl-carousel-list').owlCarousel({
	nav: true,
	dots: true,
	autoplay:false,
	// lazyLoad: true,
	navText : ['<i class="icon-angle-left" aria-hidden="true"></i>','<i class="icon-angle-right" aria-hidden="true"></i>'],
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			margin:10
		},
		680: {
			items:2,
			margin:20,
		},
		930: {
			items:3,
			margin:20,
		},
		1500:{
			items:4,
			margin:20,
		}, 
		1920:{
			autoWidth: true,
			margin: 20,
		}
	},
	
});

$('.owl-carousel-EFCC').owlCarousel({
	nav: true,
	dots: false,
	autoplay:false,
	//lazyLoad: true,
	navText : ['<i class="icon-angle-left" aria-hidden="true"></i>','<i class="icon-angle-right" aria-hidden="true"></i>'],
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
		},
		580:{
			 items: 2,
		},
		820: {
			items:3,
		},
		1030:{
			items:4,
		},
		1200:{
			autoWidth: true,
			margin: 10,
		},
		// 1480:{
		// 	autoWidth: true, 
		// 	margin:20,
		// }, 
	},
	
});


$('.owl-carousel-title-product').owlCarousel({
	autoWidth: true,
});


$('.owl-carousel-brandname').owlCarousel({
	//lazyLoad: true,
	dots: false,
	loop: true,
	responsiveClass:true,
	navText : ['<i class="icon-angle-left" aria-hidden="true"></i>','<i class="icon-angle-right" aria-hidden="true"></i>'],
	nav: true,
	responsive:{
		320: {
			items:2,
		},
		576: {
			items:4,
		},
		768: {
			items:5,
		},
		992:{
			items:6,
		},
	},
	
});



// Thiết lập thời gian đích mà ta sẽ đếm
var countDownDate = new Date("Dec 30, 2019 19:00:01").getTime();


//timeLeft1
// cập nhập thời gian sau mỗi 1 giây
var x = setInterval(function timeLeft1() {

	// Lấy thời gian hiện tại
	var now = new Date().getTime();

	// Lấy số thời gian chênh lệch
	var distance = countDownDate - now;

	// Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// HIển thị chuỗi thời gian
	document.getElementById("day1").innerHTML = days;
	document.getElementById("hour1").innerHTML = hours;
	document.getElementById("min1").innerHTML = minutes;
	document.getElementById("sec1").innerHTML = seconds;

	// Nếu thời gian kết thúc, ẩn time out
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("timeLeft1").style.display = 'none';	
	}
}, 1000);

//timeleft2
var x = setInterval(function timeLeft2() {

	// Lấy thời gian hiện tại
	var now = new Date().getTime();

	// Lấy số thời gian chênh lệch
	var distance = countDownDate - now;

	// Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// HIển thị chuỗi thời gian
	document.getElementById("day2").innerHTML = days;
	document.getElementById("hour2").innerHTML = hours;
	document.getElementById("min2").innerHTML = minutes;
	document.getElementById("sec2").innerHTML = seconds;

	// Nếu thời gian kết thúc, ẩn time out
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("timeLeft2").style.display = 'none';	
	}
}, 1000);


//timeleft3
var x = setInterval(function timeLeft3() {

	// Lấy thời gian hiện tại
	var now = new Date().getTime();

	// Lấy số thời gian chênh lệch
	var distance = countDownDate - now;

	// Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// HIển thị chuỗi thời gian
	document.getElementById("day3").innerHTML = days;
	document.getElementById("hour3").innerHTML = hours;
	document.getElementById("min3").innerHTML = minutes;
	document.getElementById("sec3").innerHTML = seconds;

	// Nếu thời gian kết thúc, ẩn time out
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("timeLeft3").style.display = 'none';	
	}
}, 1000);


//timeleft4
var x = setInterval(function timeLeft2() {

	// Lấy thời gian hiện tại
	var now = new Date().getTime();

	// Lấy số thời gian chênh lệch
	var distance = countDownDate - now;

	// Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// HIển thị chuỗi thời gian
	document.getElementById("day4").innerHTML = days;
	document.getElementById("hour4").innerHTML = hours;
	document.getElementById("min4").innerHTML = minutes;
	document.getElementById("sec4").innerHTML = seconds;

	// Nếu thời gian kết thúc, ẩn time out
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("timeLeft4").style.display = 'none';	
	}
}, 1000);