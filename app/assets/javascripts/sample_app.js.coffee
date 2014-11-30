window.SampleApp =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->
    new SampleApp.Routers.Users()

$(document).ready ->
  SampleApp.initialize()
