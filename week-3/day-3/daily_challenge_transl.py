from googletrans import Translator

# Initialize the translator
translator = Translator()

# List of French words
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Dictionary to store the translations
translations = {}

# Translate each word
for word in french_words:
    translated = translator.translate(word, src='fr', dest='en')
    translations[word] = translated.text

# Print the result
print(translations)