$(document).keydown(function(hhh){
	key=parseInt(hhh.keyCode);//强转键值
	var zz =document.getElementById("mymusic");//获取audio的id
	// var sy =search(zh,)//获取zh中的索引
	function checkAdult(age) {
	    return age == key;
	}
	var sy = zh.findIndex(checkAdult)
	zz.src=music_url[sy];//通过索引找到音乐路径
})
var zh=[
		90,88,67,86,66,78,77,
		65,83,68,70,71,72,74,
		81,87,69,82,84,89,85
		]
var music_url=[
	'./gq_music/-/c-.mp3',
	'./gq_music/-/d-.mp3',
	'./gq_music/-/e-.mp3',
	'./gq_music/-/f-.mp3',
	'./gq_music/-/g-.mp3',
	'./gq_music/-/a-.mp3',
	'./gq_music/-/b-.mp3',
	
	'./gq_music/-1/c-1.mp3',
	'./gq_music/-1/d-1.mp3',
	'./gq_music/-1/e-1.mp3',
	'./gq_music/-1/f-1.mp3',
	'./gq_music/-1/g-1.mp3',
	'./gq_music/-1/a-1.mp3',
	'./gq_music/-1/b-1.mp3',
	
	'./gq_music/-2/c-2.mp3',
	'./gq_music/-2/d-2.mp3',
	'./gq_music/-2/e-2.mp3',
	'./gq_music/-2/f-2.mp3',
	'./gq_music/-2/g-2.mp3',
	'./gq_music/-2/a-2.mp3',
	'./gq_music/-2/b-2.mp3'
];