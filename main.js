(function(){  // whole blocked is wrapped into anonymous Jquery function..

window.App = {   // defining app name space, You can rename it as per your project name..
	Models: {},
	Collections: {},
	Views: {}
};

window.template = function(id){
	return _.template( $('#' + id).html() );
};


// Person Model
App.Models.Person = Backbone.Model.extend({   // Person model referencing the App namespace model.
	defaults: {
		name: 'Guest User',
		age: 30,
		occupation: 'worker'
	}
});

// A List of People
// Same here. People is referencing now collection from App namespace
App.Collections.People = Backbone.Collection.extend({
	model: App.Models.Person   // Change here for Person Reference from App models namespace
});


// View for all people
/// Same here. People is referencing now views from App namespace
App.Views.People = Backbone.View.extend({
	tagName: 'ul',

	render: function(){
		this.collection.each(function(person){
                        // Change here for Person Reference from App Views namespace
			var personView = new App.Views.Person({ model: person });
			this.$el.append(personView.render().el);
		}, this);

		return this;
	}
});

// The View for a Person
// Change here for Person Reference from App Views namespace
App.Views.Person = Backbone.View.extend({
	tagName: 'li',

	template: template('personTemplate'),
	render: function(){
		this.$el.html( this.template(this.model.toJSON()));
		return this;
	}
});
// Change here for Person Reference from App Collections namespace
var peopleCollection = new App.Collections.People([
	{
		name: 'Mohit Jain',
		age: 26
	},
	{
		name: 'Taroon Tyagi',
		age: 25,
		occupation: 'web designer'
	},
	{
		name: 'Rahul Narang',
		age: 26,
		occupation: 'Java Developer'
	}
]);




var peopleView = new App.Views.People({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);
})();





// model
// Person Model
// var Person = Backbone.Model.extend({
// 	defaults: {
// 		name: 'Guest User',
// 		age: 30,
// 		occupation: 'worker'
// 	}
// });

// // A List of People
// var PeopleCollection = Backbone.Collection.extend({
// 	model: Person
// });

// var template = function(id){
// 	return _.template( $('#' + id).html() );
// };

// // View for all people
// var PeopleView = Backbone.View.extend({
// 	tagName: 'ul',
// 	render: function(){
// 		this.collection.each(function(person){
// 			var personView = new PersonView({ model: person });
// 			this.$el.append(personView.render().el); // calling render method manually..
// 		}, this);
// 		return this; // returning this for chaining..
// 	}
// });
// // The View for a Person
// var PersonView = Backbone.View.extend({
// 	tagName: 'li',
// 	// template: _.template($('#personTemplate').html()),
// 	template: template('personTemplate'),
//        //////////   initialize function is gone from there. So we need to call render method manually now..
// 	render: function(){
// 		this.$el.html( this.template(this.model.toJSON()));
// 		return this;  // returning this from render method..
// 	}
// });

// View for all people
// var PeopleView = Backbone.View.extend({
// 	tagName: 'ul',

// 	render: function(){
// 		this.collection.each(function(person){
// 			var personView = new PersonView({ model: person });
// 			this.$el.append(personView.el);
// 		}, this);
// 	}
// });

// // The View for a Person
// var PersonView = Backbone.View.extend({
// 	tagName: 'li',

// 	template: _.template($('#personTemplate').html()),

// 	initialize: function(){
// 		this.render();
// 	},

// 	render: function(){
// 		this.$el.html( this.template(this.model.toJSON()));
// 	}
// });

// var peopleCollection = new PeopleCollection([
// 	{
// 		name: 'Mohit Jain',
// 		age: 26
// 	},
// 	{
// 		name: 'Taroon Tyagi',
// 		age: 25,
// 		occupation: 'web designer'
// 	},
// 	{
// 		name: 'Rahul Narang',
// 		age: 26,
// 		occupation: 'Java Developer'
// 	}
// ]);


// var Person = Backbone.Model.extend({
// 	defaults: {
// 		name: 'Guest User',
// 		age: 23,
// 		occupation: 'worker'
// 	}
// });

// // A List of People
// var PeopleCollection = Backbone.Collection.extend({
// 	model: Person
// }); 


// var PersonView = Backbone.View.extend({
// 	tagName: 'li',

// 	template: _.template( $('#personTemplate').html()),

// 	initialize: function(){
// 		this.render();
// 	},

// 	render: function(){
// 		this.$el.html( this.template(this.model.toJSON()));
// 	}
// });

// var peopleCollection = new PeopleCollection([
// 	{
// 		name: 'Mohit Jain',
// 		age: 26
// 	},
// 	{
// 		name: 'Taroon Tyagi',
// 		age: 25,
// 		occupation: 'web designer'
// 	},
// 	{
// 		name: 'Rahul Narang',
// 		age: 26,
// 		occupation: 'Java Developer'
// 	}
// ]);

// var PersonView = Backbone.View.extend({
// 	tagName: 'li',

// 	my_template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),

// 	initialize: function(){
// 		this.render();
// 	},

// 	render: function(){
// 		this.$el.html( this.my_template(this.model.toJSON()));
// 	}
// });


// var PersonView = Backbone.View.extend({
//    tagName: 'li',

//    initialize: function(){
//      this.render();
//    },

//    render: function(){
//      this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
//   }
// });











// var Person = Backbone.Model.extend({
// 	defaults: {
// 		name: 'Guest User',
// 		age: 23,
// 		occupation: 'worker'
// 	},

// 	validate: function(attributes){
// 		console.log("----------------", attributes, 'enough');
// 		if ( attributes.age <  20){
// 			console.log('i am here');
// 			return 'Age must be positive.';
// 		}

// 		if ( !attributes.name ){
// 			return 'Every person must have a name.';
// 		}
// 	},

// 	work: function(){
// 		return this.get('name') + ' is working.';
// 	}
// });

// // view
// var PersonView = Backbone.View.extend({
// 	tagName: 'li',

//     initialize: function(){
//      this.render();
//    	},

//     render: function(){
//      this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
// 	}
// });