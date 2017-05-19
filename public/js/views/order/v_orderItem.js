var t_orderItem = require("raw-loader!../../../templates/order/t_orderItem.html")

var OrderItemView = Backbone.View.extend({

  initialize: function(params) {
    this.eventBus = params.eventBus;
    this.template = _.template(t_orderItem);
  },

  events: {
    'click li': 'detail',
    'click .glyphicon-trash': 'delete'
  },

  render: function () {
    this.$el.html(this.template({order: this.model}))
    return this
  },

  detail: function() {
    this.eventBus.trigger('view:order:detail', this.model.get('id'))
  },

  delete: function(event) {
    // We don't want the click event to be fired at the <li> parent
    event.stopPropagation()
    this.eventBus.trigger('view:order:delete', this.model.get('id'))
  }

});

module.exports = OrderItemView
