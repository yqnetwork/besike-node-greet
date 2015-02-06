compile:
	coffee --compile --output lib/ src/
# task test
test: compile
	mocha
# task package
package: test
	npm pack
.PHONY: compile
