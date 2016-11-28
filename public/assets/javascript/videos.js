//this array will contain the videos that i will need to get trought
//when you click on the button you will disply the next video and text

var alientoVideos = [
	{
	url:'assets/videos/1raaliento.mp4',
	parraph:"Colquese en posición de rodillas, al tiempo que lleva sus manos a los lados de la cintura y tome aire llevándolo al abdomen inferior. Siéntese en los talones al tiempo que estira sus brazos al frente de su cara como si sostuviera una caja entre la palma de las manos, llevando los dedos de las manos abiertos y separados.Al tiempo que se coloca de rodillas, expira el aire suavemente",
	id: "video1"
	},{
	url:'assets/videos/1daaliento.mp4',
	parraph:"Colquese en posición de rodillas, al tiempo que lleva sus manos a los lados de la cintura y tome aire llevándolo al abdomen inferior. Siéntese en los talones al tiempo que estira sus brazos al frente de su cara como si sostuviera una caja entre la palma de las manos, llevando los dedos de las manos abiertos y separados.Al tiempo que se coloca de rodillas, expira el aire suavemente",
	id: "video1"
	},{
	url:'assets/videos/3raaliento.mp4',
	parraph:"Colquese en posición de rodillas, al tiempo que lleva sus manos a los lados de la cintura y tome aire llevándolo al abdomen inferior. Siéntese en los talones al tiempo que estira sus brazos al frente de su cara como si sostuviera una caja entre la palma de las manos, llevando los dedos de las manos abiertos y separados.Al tiempo que se coloca de rodillas, expira el aire suavemente",
	id: "video1"
	}];




	//this will create an on click function
	$("#startLlaves").on("click", function() {

			//and will hide the intro <p> and <button>
			$("#paraLlaves").hide(); 
			$('#startLlaves').hide();
			$('#videoButtons').show();
			//console.log('here');


			$("#buttonVidOne").click(function(){

				var videoOne = ('#videoUno');
				videoOne.attr("src", alientoVideos[0].url);

		    	$('#videoUno').append(videoOne); // Added the button to the HTML
		    		});
			});



		
			/*$('#picgallery').html('');
			for (var i = 0; i < pictureArr.length; i++){
			
			var pictureDiv=$("<div>");//create a new div
			pictureDiv.addClass('col-lg-3 col-md-4 col-xs-6 thumb')//add respective boostrap class


			var a = $("<a>");//create a <a> tag
			a.addClass('thumbnail');//class added
			//a.attr("href","#");//add attribute that will make this <a> responsive

			var p = $('<p>');
			p.text(pictureArr[i].name);

			var picture = $("<img>");
		    picture.addClass('img-responsive'); // Added a class 
		    picture.attr("id", pictureArr[i].id);
		    picture.attr("src",pictureArr[i].url); // Added a data-attribute

		    a.append(picture);
		    pictureDiv.prepend(p)
		    pictureDiv.append(a)

		    $('#picgallery').prepend(pictureDiv); // Added the button to the HTML

		


	}
});
*/