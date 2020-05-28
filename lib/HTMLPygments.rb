require 'redcarpet'
require 'rouge'
require 'rouge/plugins/redcarpet'

class HTMLPygments < Redcarpet::Render::HTML
  def initialize(extensions = {})
    super extensions.merge(link_attributes: { target: '_blank' })
  end
  include Rouge::Plugins::Redcarpet
end