angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("calendar.html","<div class=\"show-calendar\"><div class=\"row\"><div class=\"col-offset-8 col-sm-2\"> <a ng-href=\"{{previousPage}}\"> <button class=\"btn btn-primary\">Back to {{ previousPage | backName }}</button></a></div></div><div class=\"row calendar-row\"><div class=\"col-sm-10 col-sm-offset-1\"><div ui-calendar=\"ui-calendar\" ng-model=\"eventSources\"></div></div></div></div>");
$templateCache.put("doll.html","<div class=\"show-doll jumbotron\"><div class=\"row\"><div class=\"col-sm-offset-11 col-sm-1\"><a ng-href=\"{{previousPage}}\"> <button class=\"btn btn-primary\">Back to {{ previousPage | backName }}</button></a></div></div><div class=\"row\"><div class=\"row\"></div><div class=\"row doll-details\"><div class=\"row doll-heading\"> <div class=\"doll-name\"><h2>{{ data.doll.name }}</h2></div><div class=\"join-date\">{{ data.doll.createdAt | date : format : \"fullDate\" }}</div></div><div class=\"row\"><div class=\"col-sm-4\"><img ng-if=\"data.doll.image\" src=\"{{data.doll.image.url}}\" class=\"doll-img\"/><badge badges=\"[]\"></badge></div><div class=\"col-sm-8\"><detail-list details=\"details\"></detail-list><div ng-if=\"data.doll.info &amp;&amp; data.doll.info.biography\" class=\"bio jumbotron\"><h3>bio:</h3><p ng-bind-html=\"data.doll.info.biography\"></p></div><div class=\"doll\"></div></div></div></div><div class=\"row extended-bio\"></div><div class=\"row associated-stuff\"><div class=\"row dolls\"></div><div class=\"row links\"></div></div><div class=\"row gallery\"><div class=\"row\"><div ng-repeat=\"doll in data.doll.gallery\" class=\"col-sm-2\"><div ng-click=\"open(\'lg\', doll)\" ng-style=\"getAvatar(doll.url)\" class=\"doll-pic\">         </div></div></div></div></div></div>");
$templateCache.put("dolls.html","<div class=\"col-sm-12 jumbotron\"><div class=\"row doll-filter-row\"><div class=\"col-sm-6\"><h1>Doll Database</h1></div><div class=\"col-sm-6 filter-col\"><div class=\"row\"><div class=\"input-group\"><div dropdown=\"\" auto-close=\"outsideClick\" class=\"input-group-btn dropdown\"><button type=\"button\" dropdown-toggle=\"\" aria-expanded=\"false\" class=\"btn btn-default dropdown-toggle\">Filter Dolls... <span class=\"caret\"></span></button><ul role=\"menu\" class=\"dropdown-menu\"><li class=\"list-group-item\"><label class=\"label-doll\">Name</label><input ng-model=\"dollFilter.name\"/></li><li class=\"list-group-item\"><label class=\"label-doll\">Owner</label><input ng-model=\"dollFilter.owner.name.full\"/></li><li class=\"list-group-item\"><label class=\"label-doll\">Maker</label><select ng-model=\"dollFilter.maker\"><option value=\"\"></option><option ng-repeat=\"maker in makers\" value=\"{{maker}}\">{{maker}}</option></select></li></ul></div></div></div></div></div><div class=\"row dolls angular\"><div ng-repeat=\"doll_threes in data.dolls\" class=\"row\"><div ng-repeat=\"doll in doll_threes | filter:dollFilter\" class=\"col-sm-3\"><doll-mixin doll=\"doll\"></doll-mixin></div></div></div></div>");
$templateCache.put("links.html","<div class=\"col-sm-8 col-md-9 jumbotron\"><h1>Community Links</h1><div class=\"links angular\"><div ng-repeat=\"link in data.links | filter:linkFilter\" class=\"row\"><link-mixin link=\"link\"></link-mixin></div></div></div><div class=\"col-sm-4 col-md-3 link-filter-col\"><h2>Filter/Search Links</h2><ul style=\"margin-top: 70px;\" class=\"list-group\"><li class=\"list-group-item\"><label class=\"label-link\">Name</label><input ng-model=\"profileFilter.userName\"/></li><li class=\"list-group-item\"><label class=\"label-link\">User</label><input ng-model=\"profileFilter.user.name\"/></li><li class=\"list-group-item\"><label class=\"label-link\">About</label><input ng-model=\"profileFilter.about.brief\"/></li><li class=\"list-group-item\"><label class=\"label-link\">About Two</label><select ng-model=\"profileFilter.about.brief\"><option ng-repeat=\"model in [\'Ipplehouse\', \'Other Guys\']\" value=\"{{model}}\">{{model}}</option></select></li></ul></div>");
$templateCache.put("main.html","<h1>Here is some angular bro!!!</h1><h3>List of Awesome Things</h3><ul class=\"list-group\"><li ng-repeat=\"thing in awesomeThings\" class=\"list-group-item\">{{ thing }}</li></ul><div class=\"row\"><a href=\"#/second\">Second</a></div><div class=\"row\"><a ng-click=\"log.log(\'Link got clicked!\');\">Lets log something...</a></div>");
$templateCache.put("next.html","<h1>Here is some more angular bro!!!</h1><div class=\"row\"><p>Booyah...</p></div>");
$templateCache.put("profile.html","<div class=\"show-profile jumbotron\"><div class=\"row\"><div class=\"col-sm-offset-11 col-sm-1\"><a ng-href=\"{{previousPage}}\"> <button class=\"btn btn-primary\">Back to {{ previousPage | backName }}</button></a></div></div><div class=\"row\"><div class=\"row\"></div><div class=\"row profile-details\"><div class=\"row profile-heading\"> <div class=\"profile-name\"><h2>{{ data.profile.profile.userName }}</h2></div><div class=\"join-date\">Member since {{ data.profile.createdAt | date : format : \"fullDate\" }}</div></div><div class=\"row\"><div class=\"col-sm-4\"><img ng-if=\"data.profile.profile.avatar\" src=\"{{data.profile.profile.avatar.url}}\" class=\"profile-img\"/></div><div class=\"col-sm-8\"><detail-list details=\"details\"></detail-list><div ng-if=\"data.profile.profile.about &amp;&amp; data.profile.profile.about.brief\" class=\"bio jumbotron\"><h3>about me:</h3><p ng-bind-html=\"data.profile.profile.about.brief\"></p></div><div class=\"profile\"></div><badge badges=\"[]\"></badge></div></div></div><div class=\"row extended-bio\"></div><div class=\"row associated-stuff\"><div class=\"row dolls\"><h3 ng-if\"data.dolls=\"ng-if\"data.dolls\">My Dolls</h3><div ng-repeat=\"doll_threes in data.dolls\" class=\"row\"><div ng-repeat=\"doll in doll_threes\" class=\"col-sm-3\"><doll-mixin doll=\"doll\"></doll-mixin></div></div></div><div class=\"row links\"><h3 ng-if\"data.links=\"ng-if\"data.links\">My Links</h3></div></div><div class=\"row gallery\"><div class=\"row\"><div ng-repeat=\"profile in data.profile.gallery\" class=\"col-sm-2\"><div ng-click=\"open(\'lg\', profile)\" ng-style=\"getAvatar(profile.url)\" class=\"profile-pic\">         </div></div></div></div></div></div>");
$templateCache.put("profiles.html","<div class=\"col-sm-8 col-md-9 jumbotron\"><h1>Profiles</h1><div class=\"profiles angular\"><div ng-repeat=\"profile_threes in data.profiles | filter:profileFilter\" class=\"row\"><div ng-repeat=\"profile in profile_threes\" class=\"col-sm-4 col-md-4\"><profile-mixin profile=\"profile\"></profile-mixin></div></div></div></div><div class=\"col-sm-4 col-md-3 profile-filter-col\"><h2>Filter/Search Profiles</h2><ul style=\"margin-top: 70px;\" class=\"list-group\"><li class=\"list-group-item\"><label class=\"label-profile\">Screen Name</label><input ng-model=\"profileFilter.profile.userName\"/></li><li class=\"list-group-item\"><label class=\"label-profile\">Real Name</label><input ng-model=\"profileFilter.name\"/></li><li class=\"list-group-item\"><label class=\"label-profile\">About</label><input ng-model=\"profileFilter.profile.about.brief\"/></li></ul></div>");
$templateCache.put("directives/badge.html","<div ng-if=\"badges\" class=\"badges jumbotron\"><h3>badges:</h3><div class=\"badge-list\"><div ng-repeat=\"badge in badges\" class=\"badge-box\"><a href=\"badge.link\"><img ng-if=\"badge.image\" src=\"badge.image.url\"/></a></div></div></div>");
$templateCache.put("directives/detailList.html","<div class=\"panel ngList\"><div ng-repeat=\"detail in details\" class=\"row\"><div class=\"col-sm-4 detail-key\">{{ detail.key }}</div><div class=\"col-sm-8 detail-val\">{{ detail.val }}</div></div></div>");
$templateCache.put("directives/dollMixin.html","<!-- {{ dollStyle = getAvatar(\"bob\") }}--><div ng-style=\"getAvatar(doll.image.url)\" class=\"doll\"><div class=\"doll-header\"><h2><a ng-href=\"#/dolls/doll/{{doll.slug}}\">{{doll.name}}</a></h2></div></div>");
$templateCache.put("directives/linkMixin.html","<div class=\"link\"><div class=\"row link-header\"><div class=\"col-sm-offset-1 col-sm-4\"><h2>{{link.title}}<small ng-if=\"link.owner\" class=\"lead text-muted\">   \nOwned by <a ng-href=\"#/profiles/profile/{{link.owner.slug}}\">{{link.owner.userName}}</a></small></h2></div></div><div class=\"row\"><div class=\"link-body col-sm-offset-2\"><p ng-if=\"link.description\">{{link.description}}</p><a ng-href=\"{{link.link}}\">{{link.link}}</a><p ng-if=\"link.keywords\">{{link.keywords}}</p></div></div></div>");
$templateCache.put("directives/profileMixin.html","<div class=\"profile\"> <div class=\"profile-header\"><h2><a ng-href=\"#/profiles/profile/{{profile.slug}}\">{{thisIsMine ? \"Me\" : profile.profile.userName}}</a></h2></div><div class=\"profile-body\"><img ng-if=\"profile.profile.avatar\" width=\"100px\" height=\"100px\" src=\"{{profile.profile.avatar.url}}\" class=\"img pull-right\"/><div ng-if=\"profile.profile.about.brief\" ng-bind-html=\"profile.profile.about.brief\" class=\"read-more\"></div></div></div>");
$templateCache.put("widgets/filter_popup.html","<div class=\"input-group\"><ul><li class=\"list-group-item\"><label class=\"label-doll\">Name</label><input ng-model=\"dollFilter.name\"/></li><li class=\"list-group-item\"><label class=\"label-doll\">Owner</label><input ng-model=\"dollFilter.owner.name.full\"/></li><li class=\"list-group-item\"><label class=\"label-doll\">Maker</label><select ng-model=\"dollFilter.maker\"><option value=\"\"></option><option ng-repeat=\"maker in makers\" value=\"{{maker}}\">{{maker}}</option></select></li></ul></div>");
$templateCache.put("widgets/modal.html","<div class=\"doll-gallery-modal\"><div class=\"modal-body\"><img src=\"{{doll.url}}\" class=\"img\"/></div></div>        ");}]);