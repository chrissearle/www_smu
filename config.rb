###
# Blog settings
###

Time.zone = "Europe/Oslo"

activate :blog do |blog|
  # blog.prefix = "blog"
  # blog.permalink = ":year/:month/:day/:title.html"
  blog.sources = "blog/:year/:month/:day-:title.html"
  # blog.taglink = "tags/:tag.html"
  # blog.layout = "layout"
  blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = ":year.html"
  # blog.month_link = ":year/:month.html"
  # blog.day_link = ":year/:month/:day.html"
  blog.default_extension = ".md.erb"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  blog.paginate = true
  blog.per_page = 10
  # blog.page_link = "page/:num"
end

activate :ogp do |ogp|
  ogp.namespaces = {
    fb: data.ogp.fb,
    # from data/ogp/fb.yml
    og: data.ogp.og
    # from data/ogp/og.yml
  }
  ogp.base_url = 'https://www.searle.me.uk/'
  ogp.blog = true
end

page "/feed.xml", :layout => false
page "blog/*", :layout => :article_layout
page "static/*", :layout => false, :directory_index => false

ignore 'category.html.haml'
ignore 'series.html.haml'
ignore 'series_list.html.haml'

activate :directory_indexes

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :build_dir, 'build/site'

set :images_dir, 'images'

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

activate :syntax

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

category_titles = {
  'rc' => 'Radio Control',
  'photo' => 'Photography',
  '3dp' => '3D Printing'
}

def page_sort(pages)
   sorted_pages = pages.sort do |a, b|
   if a.data && a.data.include?('date') && b.data && b.data.include?('date')
     DateTime.parse(b.data['date']).to_time.to_i <=> DateTime.parse(a.data['date']).to_time.to_i
   else
     puts "#{a.data} #{b.data}"
     a.data['title'] <=> b.data['title']
   end
  end
end

ready do
  blog.articles.group_by {|p| p.data["category"] }.each do |category, pages|
    if category
      category_key = category.downcase

      title = category
      if category_titles.include? category_key
        title = category_titles[category_key]
      end

      proxy "/categories/#{category_key}.html", "category.html", :locals => { :category => category, :title => title, :pages => page_sort(pages) }
    end
  end

  series_list = Hash.new { |hash, key| hash[key] = {} }

  blog.articles.group_by {|p| p.data["series"]}.each do |series, pages|
    if series
      title = series

      series_key = series.parameterize

      series_list[series_key][:title] = title
      series_list[series_key][:count] = pages.size

      proxy "/series/#{series_key}.html", "series.html", :locals => { :series => series, :title => title, :pages => page_sort(pages) }
    end
  end

  proxy "/series/list.html", "series_list.html", :locals => { :series => series_list }
end
