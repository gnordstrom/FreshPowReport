angular.module('FreshPowReport').directive('navbarDir', function() {
	return {
		template: `
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					  <span class="sr-only">Toggle navigation</span>
					  <span class="icon-bar"></span>
					  <span class="icon-bar"></span>
					  <span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" ui-sref="home">FreshPowReport</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a ui-sref="home" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Ski Resorts <span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><a ui-sref="alpinemeadows">CA - Alpine Meadows</a></li>
								<li><a ui-sref="bearvalley">CA - Bear Valley</a></li>
								<li><a ui-sref="dodgeridge">CA - Dodge Ridge</a></li>
								<li><a ui-sref="heavenly">CA - Heavenly</a></li>
								<li><a ui-sref="homewood">CA - Homewood</a></li>
								<li><a ui-sref="kirkwood">CA - Kirkwood</a></li>
								<li><a ui-sref="mammoth">CA - Mammoth</a></li>
								<li><a ui-sref="mountainhigh">CA - Mountain High</a></li>
								<li><a ui-sref="mtbaldy">CA - Mt. Baldy</a></li>
								<li><a ui-sref="northstar">CA - Northstar</a></li>
								<li><a ui-sref="sierra">CA - Sierra-at-Tahoe</a></li>
								<li><a ui-sref="squawvalley">CA - Squaw Valley</a></li>
								<li><a ui-sref="sugarbowl">CA - Sugar Bowl</a></li>
								<li class="divider"></li>
								<li><a ui-sref="a-basin">CO - Arapahoe Basin</a></li>
								<li><a ui-sref="aspen">CO - Aspen</a></li>
								<li><a ui-sref="beavercreek">CO - Beaver Creek</a></li>
								<li><a ui-sref="breckenridge">CO - Breckenridge</a></li>
								<li><a ui-sref="buttermilk">CO - Buttermilk</a></li>
								<li><a ui-sref="coppermountain">CO - Copper Mountain</a></li>
								<li><a ui-sref="eldora">CO - Eldora</a></li>
								<li><a ui-sref="keystone">CO - Keystone</a></li>
								<li><a ui-sref="loveland">CO - Loveland</a></li>
								<li><a ui-sref="monarch">CO - Monarch Mountain</a></li>
								<li><a ui-sref="powderhorn">CO - Powderhorn</a></li>
								<li><a ui-sref="purgatory">CO - Purgatory</a></li>
								<li><a ui-sref="steamboatsprings">CO - Steamboat Springs</a></li>
								<li><a ui-sref="telluride">CO - Telluride</a></li>
								<li><a ui-sref="vail">CO - Vail</a></li>
								<li><a ui-sref="winterpark">CO - Winter Park</a></li>
								<li class="divider"></li>
								<li><a ui-sref="klappen">SWE - Kläppen</a></li>
								<li class="divider"></li>
								<li><a ui-sref="alta">UT - Alta</a></li>
								<li><a ui-sref="brianhead">UT - Brian Head</a></li>
								<li><a ui-sref="brighton">UT - Brighton</a></li>
								<li><a ui-sref="deervalley">UT - Deer Valley</a></li>
								<li><a ui-sref="eaglepoint">UT - Eagle Point</a></li>
								<li><a ui-sref="nordicvalley">UT - Nordic Valley</a></li>
								<li><a ui-sref="parkcity">UT - Park City</a></li>
								<li><a ui-sref="powdermountain">UT - Powder Mountain</a></li>
								<li><a ui-sref="snowbasin">UT - Snowbasin</a></li>
								<li><a ui-sref="snowbird">UT - Snowbird</a></li>
								<li><a ui-sref="solitude">UT - Solitude</a></li>
								<li><a ui-sref="sundance">UT - Sundance</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		`,
		restrict: 'EA'
	}
});
