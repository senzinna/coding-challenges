class Node:
    def __init__(self, data, next=None):
        self.__data = data
        self.__next = next

    def get_data(self):
        return self.__data

    def get_next(self):
        return self.__next

    def set_next(self, next):
        self.__next = next
