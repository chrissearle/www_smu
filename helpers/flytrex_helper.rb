module FlytrexHelper
  def flytrex(fid, title)
    %Q{<a href="http://www.flytrex.com/mission/quadcopter-phantom-chris-searle-#{fid}">#{title} on flytrex.com</a>}
  end
end
