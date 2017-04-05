module ThingspeakHelper
  def thingspeak_iframe(cid, title, field)
    %Q{<iframe width="750" height="300" src="https://api.thingspeak.com/channels/#{cid}/charts/#{field}?dynamic=true&title=#{title}&type=line&xaxis=Date%2FTime&yaxis=Temperature+%28%CB%9AC%29&height=300&width=750&days=7"></iframe>}
  end
end



