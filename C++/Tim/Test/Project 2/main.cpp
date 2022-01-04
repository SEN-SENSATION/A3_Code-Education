#include <iostream>
using namespace std;

int add() {
    int a;
    int b;
    int c;
    cout << "Enter A : ";
    cin >> a;
    cout << "Enter B : ";
    cin >> b;
    c = a + b;
    cout << c << endl;
    return 0;
}

int main() {
    int favoriteNumber{100};
    cout << "Hello from example projects 2fd" << endl;
    cout << "Input your favorite number is : " << endl;
    cout << "Input your favorite number is : ";
    cin >> favoriteNumber;
    cout << "Your favorite Number is " << favoriteNumber << endl;
    add();
    return 0;

}
