export default function BoxWidgets(boxes){

	var element=$(boxes);
	element.each(function(element){
		var $this=$(this);
		var toolBox=$this.children('header')
				      .children('.float-right');

		 toolBox.children('[datawidget="toggle"]')
			.on('click', function(event){
				if(this.is('.collapsed')){
					this.children('main'+', '+'footer').slideDown(800,function(){
						this.removeClass("collapsed");
					}.bind(this));			
				}
				else {
					this.children('main'+', '+'footer').slideUp(800,function(){
						this.addClass("collapsed");
					}.bind(this));
				}
			}.bind($this));

		 toolBox.children('[datawidget="remove"]')
			.on('click', function(event){
					this.slideUp(800, function(){this.remove()}.bind(this))
			}.bind($this));
	});
}
