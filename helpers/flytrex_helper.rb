module FlytrexHelper
  def flytrex_phantom(fid, title)
    %Q{<a href="http://www.flytrex.com/mission/quadcopter-phantom-chris-searle-#{fid}">#{title} on flytrex.com</a>}
  end

  def flytrex_f550(fid, title)
    %Q{<a href="http://www.flytrex.com/mission/hexacopter-f550-chris-searle-#{fid}">#{title} on flytrex.com</a>}
  end
end

