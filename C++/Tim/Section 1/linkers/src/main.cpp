#include <iostream>

extern int x;

int main() {
    int x = 12;
    std::cout << "Hello World" << std::endl;

    std::cout << x;

    return 0;
}
