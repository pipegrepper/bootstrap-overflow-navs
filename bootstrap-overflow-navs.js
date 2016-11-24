/* ===================================================
 * bootstrap-overflow-navs.js v0.5-pipegrepper
 * ===================================================
 * Copyright 2012-15 Michael Langford, Evan Owens
 * © 2016 Oliver Kertesz
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This is a fork from  tomiford/bootstrap-overflow-navs (github)
 *
 * This version is especially for Bootstrap 3.2.2 and has not many options.
 * Though it reacts to window resizing and shrinks and expands also
 * on orientation change (tested on Android). The code is much more compact
 * but maybe not the fastest.
 *
 * ========================================================== */

+function ($) {
    $.fn.overflowNavs = function (options) {
        $('.overflow-nav').remove();
        var ul = $(this);
        ul.children('li').each(function () {
            $(this).css('display', 'block');
        });

        var parent = options.parent ? options.parent : ul.parents('.navbar');
        var collapse = $('div.navbar-collapse').length;
        var collapsed = false;
        if (collapse) {
            collapsed = $('.navbar-toggle').is(":visible");
        }
        if (collapsed === false) {
            var parent_width = $(parent).parent().width();
            var dropdown = $('li.overflow-nav', ul);
            if (!dropdown.length) {
                dropdown = $('<li class="overflow-nav dropdown"></li>');
                dropdown.append($('<a class="dropdown-toggle" data-toggle="dropdown" href="#">' + options.more + '<span class="glyphicon glyphicon-menu-down"></span></a>'));
                dropdown.append($('<ul class="dropdown-menu"></ul>'));
            }
            
            var width = $('.navbar-brand').width() + 65; // Some padding
            ul.children('li').each(function () {
                var $this = $(this);
                var $thisouter = Math.ceil($(this).outerWidth());
                width += $thisouter;
                
                if (width >= parent_width) {
                    $this.css('display', 'none');
                    var $li = $this.clone(true);
                    if ($li.find('li:first').length > 0) {
                        dropdown.children('ul.dropdown-menu').append($li.find('li:first').css('display', 'block'));
                    } else {
                        dropdown.children('ul.dropdown-menu').append($li.css('display', 'block'));
                    }
                }
            });

            if (!dropdown.children('ul.dropdown-menu').children().length) {
                dropdown.remove();
            } else {
                if (!ul.children('li.overflow-nav').length) {
                    ul.append(dropdown);
                }
            }
        }
    };

}(window.jQuery);
