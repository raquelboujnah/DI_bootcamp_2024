class BankAccount:
    def __init__(self, balance=0, username=None, password=None):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Authentication failed.")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated.")
        if amount > 0:
            self.balance += amount
        else:
            raise Exception("Deposit amount must be positive.")

    def withdraw(self, amount):
        if not self.authenticated:
            print("User not authenticated.")
            return amount
        else:
            raise Exception("Withdrawal amount must be positive.")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0, username=None, password=None):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def re_withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated.")
        amount = self.withdraw()
        if self.balance - amount >= self.minimum_balance:
            self.balance -= amount
        else:
            raise Exception("Withdrawal would bring balance below the minimum required balance.")
