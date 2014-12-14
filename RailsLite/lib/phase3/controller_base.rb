require_relative '../phase2/controller_base'
require 'active_support'
require 'active_support/core_ext'
require 'active_support/inflector'
require 'erb'

module Phase3
  class ControllerBase < Phase2::ControllerBase
    # use ERB and binding to evaluate templates
    # pass the rendered html to render_content
    def render(template_name)
    	controller_name = self.class.name.underscore

    	path = "views/#{controller_name}/#{template_name}.html.erb"
    	file_template = File.read(path)
    	
        content = ERB.new(file_template).result(binding)
    	render_content(content, "text/html")
    end
  end
end