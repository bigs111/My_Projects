# GetHash.py

import hashlib
import sys

print("Getting Hashes...")
if len(sys.argv) !=2:
    print("Usage: python script.py <file_path>")
    sys.exit(1)

file_path = sys.argv[1]
 
try:
    sha356_value = hashlib.sha256()
    md5_value = hashlib.md5()
    sha1_value = hashlib.sha1()
    blake2b_value = hashlib.blake2b()

    with open(file_path, 'rb') as f:
            for chunk in iter(lambda: f.read(4096), b''):
                sha356_value.update(chunk)
                md5_value.update(chunk)
                sha1_value.update(chunk)
                blake2b_value.update(chunk)

                # printing hash values
                print("sha256 hash: " + sha356_value.hexdigest())
                print("md5 hash: " + md5_value.hexdigest())
                print("sha1 hash: " + sha1_value.hexdigest())
                print("blake2b hash: " + blake2b_value.hexdigest())

except FileNotFoundError:
     print(f"File not found: {file_path}")
     sys.exit(1)
