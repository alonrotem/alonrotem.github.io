# Cleanup
# docker rm -f alon_site; docker image rm -f alon_site

# Build the image
# docker build -f ./Dockerfile -t alon_site .

# Just run Jekyll automatically (+ npx backend)
# docker rm -f stilnica; docker run --name stilnica -v $PWD:/site -p 4000:4000 -it alon_site

# Interactive connect
# docker rm -f stilnica; docker run --name stilnica -v $PWD:/site -p 4000:4000 -it alon_site /bin/bash
# 
# Run the site inside Docker:
# $ bundle exec jekyll serve --host=0.0.0.0

FROM ruby:3.0
WORKDIR /site
COPY . /site
ENV JEKYLL_ENV=development
RUN apt update
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y \
        zlib1g-dev \
        net-tools \
        curl \
        screenfetch \
        nano \
        iproute2 \
        nodejs \
        git \
        wget \
        jq \
        neofetch \
        python3.9 \
        python-is-python3 \
        python3-pip

RUN pip install google-api-python-client oauth2client google-analytics-data python-frontmatter

RUN bundle install
RUN npm install -g netlify-cms-proxy-server
RUN ruby --version
CMD echo "------ IP ADDRESS -----" && \
    ip -4 -o addr show eth0 | awk '{print $4}' && \
    echo "------ IP ADDRESS -----" && \
    echo && echo &&  \
    npx netlify-cms-proxy-server &  \
    bundle exec jekyll serve --host=0.0.0.0