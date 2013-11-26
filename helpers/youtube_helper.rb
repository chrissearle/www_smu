module YoutubeHelper
  def youtube(yid)
    %Q{<iframe width="853" height="480" src="//www.youtube.com/embed/#{yid}" frameborder="0" allowfullscreen></iframe>}
  end
end
