def main():
    print(factorial(3))


def factorial(number):
    if number >= 1:
        return number * factorial(number - 1)
    else:
        return 1


if __name__ == "__main__":
    main()
#
