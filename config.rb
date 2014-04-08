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

page "/feed.xml", :layout => false
page "blog/*", :layout => :article_layout

activate :directory_indexes

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

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

activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.host   = 'bryanek.chrissearle.org'
  deploy.path   = '/srv/www/www.searle.me.uk/htdocs'
  deploy.clean  = true
end

category_titles = {
  'rc' => 'Radio Control',
  'photo' => 'Photography'
}

ready do
  blog.articles.group_by {|p| p.data["category"] }.each do |category, pages|
    if category
      category_key = category.downcase

      title = category
      if category_titles.include? category_key
        title = category_titles[category_key]
      end

      sorted_pages = pages.sort do |a, b|
        if (a.data && a.data.include?('date') &% b.data && b.data.include?('date'))
          DateTime.parse(b.data['date']).to_time.to_i <=> DateTime.parse(a.data['date']).to_time.to_i
        else
          a.data['title'] <=> b.data['title']
        end
       end

      proxy "/categories/#{category_key}.html", "category.html", :locals => { :category => category, :title => title, :pages => sorted_pages }
    end
  end
end

#ready do
#  start_index = 0
#  page_num = 1
#  per_page_count = 5
#  quad_articles = blog.articles.select { |a| a.data.category == 'rc' }
#  quad_total_pages = quad_articles.size.fdiv(per_page_count).ceil
#
#  while start_index <= letters.size
#    proxy "rc/#{page_num}.html", "page_template.html", :locals => {
#        :paged_articles => articles.slice(start_index, per_page_count),
#        :current_page_num => page_num, # if you wanna set up a pager, or whatever
#        :total_pages => total_pages
#    }
#    start_index += per_page_count
#    page_num += 1
#  end
#end
