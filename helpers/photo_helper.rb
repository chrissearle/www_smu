module PhotoHelper
  def embed_500px(id, image_url, title)
    %Q{<a href="http://500px.com/photo/#{id}">
        <img class="embedimg" src="#{image_url}" alt="#{title} on 500px.com" border="0">
      </a>
      <br/>
      <font style="font-size: 120%;">
        <a href="http://500px.com/photo/#{id}">Winter Frost</a>
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
    caption = %Q{<p class="caption">#{alt}</p>} if alt
    %Q{<div class="image"><p><a class="fancybox" rel="group" href="#{href}" title="#{alt}"><img class="post" src="#{href}" alt="#{alt}"/></a></p>#{caption}</div>}
  end
end
