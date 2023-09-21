# port_scanner.py | simple port scanner written in python
import socket

# user input
user_input = input("Enter Ip: ")

# creating socket 
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

targetIP = socket.gethostbyname(user_input)
print('Scanning: ', targetIP)

def scan_ports(port):
  try:
    s.connect((targetIP, port))
    return True
  except:
    return False

for port in range(1000):
  if scan_ports(port):
    print(f'{port} --> OPEN')

'''
This works! although I need to make it faster
'''