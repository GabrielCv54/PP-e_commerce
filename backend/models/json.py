import json

with open("/models/json/categorias.json",'r') as file:
    str_file = json.load(file)

print(str_file['examples'])