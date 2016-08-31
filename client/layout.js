// $(document).ready(function () {
//   $('[data-toggle="offcanvas"]').click(function () {
//     $('.row-offcanvas').toggleClass('active')
//   });
// });

//iron router 
Router.configure({
    loadingTemplate: 'loading',
});

// Router.map(function() {
//     return this.route('home', {
//         path: '/',
//         waitOn: function() {
//             // return Meteor.subscribe('malePeople');
//             // return Meteor.subscribe('mds');
//         },
//         action: function() {
//             this.render('layout');
//         }
//     })
// });

Router.route('/', {
    loadingTemplate: 'loading', // 也是一个template
    waitOn() {
        return Meteor.subscribe('trees');
    },
    action() {
        this.render('layout');
    }
})
