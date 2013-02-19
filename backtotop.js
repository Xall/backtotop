window.addEvent('domready', function() {
    var body = $$('body')[0];
    var container = new Element('a#backtotop',{
        html: '^<br>Back to top',
        href: '#',
    });
    container.inject(body);

    container.addEvent('click', function () {
        container.fade('out');
    });

    window.addEvent('scroll', function(){
        if (window.pageYOffset>0)
            container.fade('in');
        else
            container.fade('out');
    });


});