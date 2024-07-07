secret = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""

def create_colums() :
    secret_list = list(secret.split("\n"))
    lst = []
    for num in range(3) :
        lst.append([char[num] for char in secret_list])

    return lst

def decode() :
    secret = create_colums()
    # print("secret list", secret)
    final = ""
    for arr in secret :
        for char in arr :
            if str(char).isalpha() :
                    final += char
            else :
                final += " "
    print(final)

decode()
    