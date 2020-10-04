from Data_Structures.Linked_Lists.node import Node


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def insert(self, data):
        node = Node(data)
        node.set_next(self.head)
        self.head = node

    def search(self, data):
        current = self.head
        found = False
        while current and found is False:
            if current.get_data() == data:
                found = True
            else:
                current = current.get_next()

        if current is None:
            print("%d not found" % data)

        return current

    def delete(self, data):
        current = self.head
        previous = None
        found = False

        while current and found is False:
            if current.get_data() == data:
                found = True
            else:
                previous = current
                current = current.get_next()

        if current is not None:
            if previous is None:
                self.head = current.get_next()
            else:
                previous.set_next(current.get_next())

    def size(self):
        count = 0
        current = self.head
        while(current):
            count += 1
            current = current.get_next()
        return count

    def print(self):
        current = self.head
        while(current):
            print(current.get_data())
            current = current.get_next()
