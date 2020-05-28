# Helper methods defined here can be accessed in any controller or view in the application
module Profile
  class App
    module PostHelper
      def markdown(content)
        render = HTMLPygments.new(hard_wrap: true, filter_html: true)
        options = {
            autolink: true,
            no_intra_emphasis: true,
            disable_indented_code_blocks: true,
            fenced_code_blocks: true,
            lax_spacing: true,
            strikethrough: true,
            superscript: true
        }
        Redcarpet::Markdown.new(render, options).render(content).html_safe
      end
    end

    helpers PostHelper
  end
end
