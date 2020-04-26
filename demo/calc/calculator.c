#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>

int main(int argc, char ** argv) {
    printf("WebAssembly module loaded\n");
}

double EMSCRIPTEN_KEEPALIVE calculate(double num1, double num2, char operation) {
	double result = 0;

	if(operation == '+'){
		result = num1 + num2;
	}
	else if(operation == '-'){
		result = num1 - num2;
	}
	else if(operation == '*'){
		result = num1 * num2;
	}
	else if(operation == '/'){
		result = num1 / num2;
	}
	else{
		return -1;
	}

	return result;
}

