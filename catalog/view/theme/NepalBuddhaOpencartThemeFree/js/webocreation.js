$(document).ready(function () {
	$('#searchicon').on('click', function (event) {
		$('#search').addClass('open');
		$('#search  > input[type="search"]').focus();
	});
	$('#search, #search button.close').on('click keyup', function (event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});
	/* Search */
	$('#search input[name=\'search\']').parent().find('button').on('click', function () {
		var url = $('base').attr('href') + 'index.php?route=product/search';

		var value = $('#search input[name=\'search\']').val();

		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}

		location = url;
	});

	$('#search input[name=\'search\']').on('keydown', function (e) {
		if (e.keyCode == 13) {
			$('#search input[name=\'search\']').parent().find('button').trigger('click');
		}
	});
	
	console.log('yah');
/* 	var x = document.getElementsByClassName('price');
	for (var i = 0; i < x.length; i++) {
		myprice = x[i].innerText;
		var priceVND = '';
		for (var z = 1; z < myprice.length; z++){
			if(myprice[z] != '.'){
				priceVND += myprice[z];
			}
			else{
				break;
			}
		}
		priceVND += 'đ';
		x[i].innerText = priceVND;
	} */
/* 	
	var y = document.getElementById('cart-total');
	textCartTotal = y.innerText[0] + ' item(s)';
	y.innerText =textCartTotal;
	
	var para = document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);

	var element = document.getElementById("cart-total");
	element.appendChild(para); */
	
	
/* 	var a = document.getElementsByClassName('text-right');
	console.log(a[6]);
	for (var i = 0; i < a.length; i++) {
		
		myprice_a = a[i].innerText;
		var priceVND_a = '';
		if(myprice_a[0] == '$')
		{
			for (var z = 1; z < myprice_a.length; z++){
				
				
				if(myprice_a[z] != '.'){
					priceVND_a += myprice_a[z];
				}
				else{
					break;
				}
			}
		}
		priceVND_a += 'đ';
		a[i].innerText = priceVND_a;
		//console.log(priceVND_a);
	}

 */
	

});
