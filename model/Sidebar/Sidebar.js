module.exports = Backbone.Model.extend({
    promptColor: function(){
        var cssColor = prompt('Please enter a CSS color:');
        this.set({ color: cssColor });
    }
});