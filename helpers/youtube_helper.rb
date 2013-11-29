module YoutubeHelper
  def youtube(yid)
    %Q{<div class="flex-video widescreen"><iframe src="//www.youtube.com/embed/#{yid}" frameborder="0" allowfullscreen></iframe></div>}
  end
end
