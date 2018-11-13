.PHONY: build

develop:
	gatsby develop

build:
	gatsby build
	rm -rf build/site && cp -r public build/site

docker_build: build
	docker build -t chrissearle/www_smu:`git rev-parse --short HEAD` build

package: docker_build
	docker tag chrissearle/www_smu:`git rev-parse --short HEAD` chrissearle/www_smu:staging

stage:
	docker push chrissearle/www_smu:`git rev-parse --short HEAD`
	docker push chrissearle/www_smu:staging

promote:
	docker tag chrissearle/www_smu:staging chrissearle/www_smu:latest
	docker push chrissearle/www_smu:latest

run:
	docker run -d -p 8088:80 chrissearle/www_smu:`git rev-parse --short HEAD`

run_stage:
	docker run -d -p 8088:80 chrissearle/www_smu:staging

clean:
	rm -rf build/site