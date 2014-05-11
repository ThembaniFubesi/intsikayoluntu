/* 
 Own Appeal: http://own-appeal.com
 */
(function() {
    $(function() {

        /*menu*/
        function MobileMenu(el, body) {
            this.el = el;
            this.parent = body;
            var parentScope = this.parent;
            this.toggleMenu = function(e) {
                e.preventDefault();
                var $this = $(this);
                if (!parentScope.hasClass("menu-open")) {
                    parentScope.addClass("menu-open");
                }
                else {
                    parentScope.removeClass("menu-open");
                }
            }

            this.el.on("click", this.toggleMenu);
        }

        var intsikaMenu = new MobileMenu($("#menuToggle"), $("main"));

        /*menu*/

        function Router(el, navlink) {
            this.el = el;
            this.navlink = navlink;
            var currentItem = null;

            this.goToSection = function(e) {
                e.preventDefault();
                var $el = $(this);
                var ID = "#" + $el.attr("href").replace(serverUrl + "/pages/", "").replace(".php", "");
                var pos = $(ID).offset().top;
                $("html,body").animate({scrollTop: pos}, function() {
                    $(".menu-open").removeClass("menu-open");
                    console.log(currentItem)
                    if (currentItem) {
                        $.address.value(currentItem);
                        setActiveMenu(currentItem);
                        setPageTitle(currentItem);
                        currentItem = null;
                    }
                });
            };

            var setActiveMenu = function(Id) {
                navlink.filter(function() {
                    return $(this).hasClass(Id);
                }).addClass("active").siblings().removeClass("active");
            };

            var updateUrl = function(current) {
                if (!$("html,body").is(':animated')) {
                    currentItem = null;
                    $.address.value(current);
                    setActiveMenu(current);
                    setPageTitle(current);
                }
                else {
                    currentItem = current;
                }
            };

            this.navlink.on("click", this.goToSection);

            this.el.waypoint(function(direction) {
                if (direction === 'down') {
                    updateUrl(this.id);
                }
            }, {offset: '50%'});

            this.el.waypoint(function(direction) {
                if (direction === 'up') {
                    updateUrl(this.id);
                }
            }, {
                offset: function() {
                    // This is the calculation that would give you
                    // "bottom of element hits middle of window"
                    return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
                }
            });
        }

        var intsikaRouter = new Router($("main section article"), $("aside nav a"));
    });
}());