module PhotoHelper
  def embed_500px(id, image_url, title)
    %Q{<a href="http://500px.com/photo/#{id}">
        <img class="embedimg" src="#{image_url}" alt="#{title} on 500px.com" border="0">
      </a>
      <br/>
      <font style="font-size: 120%;">
        <a href="http://500px.com/photo/#{id}">#{title}</a>
        by
        <a href="http://500px.com/chrissearle">Chris Searle</a>
      </font>}
  end
  
  def link_500px(id, title)
    %Q{<a href="http://500px.com/photo/#{id}">#{title} on 500px.com</a>}
  end
  
  def embed_flickr(id, image_url, title)
    %Q{<a href="http://www.flickr.com/photos/chrissearle/#{id}" title="#{title} by Chris Searle, on Flickr">
         <img class="embedimg" src="#{image_url}" alt="#{title}">
       </a>}
  end

  def link_flickr(id, title)
    %Q{<a href="http://www.flickr.com/photos/chrissearle/#{id}">#{title} on Flickr</a>}
  end
  
  def photo_links(data)
    "<p>" + data[:ids].map{ |id| send("link_#{id[:type]}", id[:id], data[:title]) }.join(' | ') + "</p>"
  end
  
  def fancybox_image(href, alt)
    fancybox_image_options(href, alt, {})
  end

  def fancybox_image_options(href, alt, options)
    caption = %Q{<p class="caption">#{alt}</p>} if alt
    extra = yield if block_given?
    small = ''
    leftright = ''

    if options[:small]
      small = 'small'
    end

    if options[:leftright] == :left
      leftright = 'left'
    end

    if options[:leftright] == :right
      leftright = 'right'
    end

    %Q{<div class="image #{small} #{leftright}"><p><a class="fancybox" rel="group" href="#{href}" title="#{alt}"><img class="post #{small}" src="#{href}" alt="#{alt}"/></a></p>#{caption}#{extra}</div>}
  end

end
