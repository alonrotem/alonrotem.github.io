bundle clean --force
bundle install --redownload

echo "------ IP ADDRESS -----" && ip -4 -o addr show wlo1 | awk '{print $4}' && echo "------ IP ADDRESS -----" && echo && echo &&  bundle exec jekyll serve --host=0.0.0.0