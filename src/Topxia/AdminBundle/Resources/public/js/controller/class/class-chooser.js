define(function(require, exports, module) {

    var Widget = require('widget');

    var ClassChooser = Widget.extend({
        attrs: {
            multiSelect:false,
            url:'/admin/class/list'
        },

        events: {
            "click": "openModal"
        },

        setup:function(){
        },

        openModal:function(){
            var self=this;
            $.post(
                self.get('url'),
                function(html){
                    var $modal=self.get('modalTarget');
                    $modal.modal('show');
                    $modal.html(html);

                    if(self.get('multiSelect')){
                        $modal.find('.class-item').each(function(){
                            $(this).attr('data-toggle','button'); 
                        });
                        self.multiSelect($modal);
                    }else{
                        $modal.find('#chooser-footer').hide();
                        self.singleSelect($modal);
                    }
                }
            ).error(function(){
                alert('error');
            });
        },


        singleSelect:function(modal){
            var self=this;
            modal.on('click','.class-item',function(){
                self.trigger('choosed',$(this).data().id,$(this).data().name);
                modal.modal('hide');
            });

        },

        multiSelect:function(modal){
            var self=this;
            modal.on('click','#class-select-btn',function(){
                var classItems=modal.find('.active');
                var classNames="";
                var classIds="";
                for(var i=0;i<classItems.length;i++){
                    classNames+=(','+classItems.eq(i).data().name);
                    classIds+=(','+classItems.eq(i).data().id);
                }
                if(classItems.length>0){
                    classNames=classNames.substring(1);
                    classIds=classIds.substring(1);
                }
                self.trigger('choosed',classIds,classNames);
                modal.modal('hide');
            });
        }

    });
    module.exports = ClassChooser;

});