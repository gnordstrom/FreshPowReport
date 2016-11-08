angular.module('FreshPowReport').directive('carouselDir', function() {
	return {
		template: `
		<div class="top-box">
			<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
			  <!-- Indicators -->
			  <ol class="carousel-indicators">
				 <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
				 <li data-target="#carousel-example-generic" data-slide-to="1"></li>
				 <li data-target="#carousel-example-generic" data-slide-to="2"></li>
				 <li data-target="#carousel-example-generic" data-slide-to="3"></li>
				 <li data-target="#carousel-example-generic" data-slide-to="4"></li>
				 <li data-target="#carousel-example-generic" data-slide-to="5"></li>
				 <li data-target="#carousel-example-generic" data-slide-to="6"></li>
			  </ol>

			  <!-- Wrapper for slides -->
			  <div class="carousel-inner" role="listbox">
				 <div class="item active">
					<img src="assets/photos/travis_rice_art_flight_140907.jpg" alt="...">
					<div class="carousel-caption">
					  <a href="https://gnordstrom.github.io/RedDevils/#/"><i class="fa fa-pied-piper" style="color: steelblue;" aria-hidden="true"></i></a>
					</div>
				 </div>
				 <div class="item">
					<img src="assets/photos/sunset.jpg" alt="...">
					<div class="carousel-caption"></div>
				 </div>
				 <div class="item">
				  <img src="assets/photos/f26eccc7d307aea5cdcd1d50e1681e03.jpg" alt="...">
				  <div class="carousel-caption"></div>
				</div>
				 <div class="item">
					<img src="assets/photos/powspray.jpeg" alt="...">
					<div class="carousel-caption"></div>
				 </div>
				<div class="item">
				  <img src="assets/photos/Snowboard-Photo-Jan-Scherrer-Sunset-Kitzsteinhorn-by-Vernon-Deck.jpg" alt="...">
				  <div class="carousel-caption"></div>
				</div>
				<div class="item">
				  <img src="assets/photos/starwars.png" alt="...">
				  <div class="carousel-caption"></div>
				</div>
				<div class="item">
				  <img src="assets/photos/winter-snowboard-pictures-snow-wallpaper-wallpapers-wallwuzz-hd-wallpaper-14104.jpg" alt="...">
				  <div class="carousel-caption"></div>
				</div>
			  </div>

			  <!-- Controls -->
			  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
				 <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				 <span class="sr-only">Previous</span>
			  </a>
			  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
				 <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				 <span class="sr-only">Next</span>
			  </a>
			</div>
		</div>
		`,
		restrict: 'EA'
	}
});
