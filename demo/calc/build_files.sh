cd ~/emsdk/upstream/emscripten/
demo_path="/home/lyubo/Uni/Web/Web2020-Report/demo/calc";

./emcc $demo_path/calculator.c -s WASM=1 -O3 -o $demo_path/calculator.js