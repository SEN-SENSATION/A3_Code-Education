#include <iostream>

int main() {
    int favoriteNumber;
    
    std::cout << "What is your favorite Number? (between 1 - 100) : ";
    std::cin >> favoriteNumber;

    std::cout << "Great! that's my faorite Number too!" << std::endl;

    std::cout << "No Really, " << favoriteNumber << " is my favorite Number." << std::endl;

    return 0;
}