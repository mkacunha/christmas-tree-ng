FROM nginx:1.13.3-alpine
COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html