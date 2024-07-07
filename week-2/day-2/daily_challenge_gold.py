usernumber = input("what is your birthdate? DD/MM/YYYY").split("/")
year = usernumber[2]
age = 2023 - int(year)
candle = age % 10
i = "i" * candle
print(f"    __{i}__")
print("    |:H:a:p:p:y:|")
print("  __|___________|__")
print(" |^^^^^^^^^^^^^^^^^|")
print(" |:B:i:r:t:h:d:a:y:|")
print(" |                 |")
print(" ~~~~~~~~~~~~~~~~~~~")