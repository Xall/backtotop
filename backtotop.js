window.addEvent('domready', function() {
    var body = $$('body')[0];
    // Button container with text and link to top
    var container = new Element('a',{
        html: '^<br>Back to top',
        href: '#',
    });
    // Set ID for css and MooTools 1.2.5 compatibility
    container.set('id', 'backtotop');
    // Hide on Pageload
    container.fade('hide');
    // Inject button before the closing body tag
    container.inject(body);

    // EVENT - Fade out on click
    container.addEvent('click', function () {
        container.fade('out');
    });

    // EVENT - Fade in on scrolling down, fade out on top
    window.addEvent('scroll', function(){
        if (window.pageYOffset>0)
            container.fade('in');
        else
            container.fade('out');
    });


});