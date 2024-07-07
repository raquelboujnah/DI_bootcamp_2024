
class Phone:
    def __init__(self, phone_number):
        self.number = phone_number
        self.call_history = []
        self.messages = []
  
    def call(self, other_phone):
        history = print(f'{self.number} called {other_phone.number}')
        self.call_history.append(history)
        
    def show_call_history(self):
        print(self.call_history)
    
    def send_a_message(self, other_phone, content):
        message_history = {'to' : other_phone.number,
                           'from' : self.number,
                           'content' : content
                           }   
        self.messages.apppend(message_history)
    
    def show_outgoing_messages(self):
        print("outgoing messages: ")
        for message in self.messages:
            if message["from"] == self.number:
                print(f"To: {message['to']}: {message['content']}")
                
    def show_incoming_messages(self):    
        print("incoming messages: ")
        for message in self.messages:
            if message["to"] == self.number:
                print(f"From: {message['from']}: {message['content']}")
          
          
my_phone = Phone("0587815608")
friend = Phone("0537221091")
my_phone.send_a_message(friend, "tes ou la??")
friend.send_a_message(my_phone, "jarriveee")
my_phone.send_a_message(friend, "ca fais 1h je tattend")
friend.send_a_message(my_phone, "oui ba jetait avec un client")
friend.show_incoming_messages()
my_phone.show_outgoing_messages()
