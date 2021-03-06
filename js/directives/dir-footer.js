angular.module('FreshPowReport').directive('footerDir', function() {
	return {
		template: `
		<hr style="color: black; width: 80%; margin-bottom: 10px;">
		<div class="footerbox">
			<p>Created by <a href='#'><span id="footerName">Gustav Nordstrom</span></a> - 2016</p>
			<div class="icons">
				<a href="https://www.facebook.com/gustav.nordstrom.3">
					<div class="icon"><i class="fa fa-facebook" aria-hidden="true"></i></div>
				</a>
				<a href="https://github.com/gnordstrom">
					<div class="icon"><i class="fa fa-github" aria-hidden="true"></i></div>
				</a>
				<a href="https://www.instagram.com/gusnordstrom/">
					<div class="icon"><i class="fa fa-instagram" aria-hidden="true"></i></div>
				</a>
				<a href="https://www.linkedin.com/in/gustav-nordstrom-1113bb42">
					<div class="icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i></div>
				</a>
				<a href="https://twitter.com/gusnordstrom">
					<div class="icon"><i class="fa fa-twitter" aria-hidden="true"></i></div>
				</a>
			</div>
		</div>

		`,
		restrict: 'EA'
	}
});
