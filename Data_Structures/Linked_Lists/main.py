from Data_Structures.Linked_Lists.linked_list import LinkedList


def main():
    linkedList = LinkedList()
    linkedList.insert(3)
    linkedList.insert(2)
    linkedList.insert(1)
    linkedList.print()
    print("size: %d" % linkedList.size())

    linkedList.delete(2)
    linkedList.print()
    print("size: %d" % linkedList.size())


if __name__ == "__main__":
    main()
#
