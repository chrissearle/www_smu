module PhotoHelper
  def embed_500px(id, image_url, title)
    %Q{<a href="http://500px.com/photo/#{id}">
        <img src="#{image_url}" alt="#{title} on 500px.com" border="0" style="margin: 0 0 5px 0;" width="853">
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
    %Q{<a href="http://www.flickr.com/photos/chrissearle/#{id}" title="#{title} by Chris Searle, on Flickr"><img src="#{image_url}" width="853" alt="#{title}"></a>}
  end

  def link_flickr(id, title)
    %Q{<a href="http://www.flickr.com/photos/chrissearle/#{id}">#{title} on Flickr</a>}
  end
end
