import itertools
import concurrent.futures
from Cryptodome.Cipher import AES

# Function to process a chunk of combinations
def process_chunk(start, end):
    for combination in itertools.islice(itertools.product(range(256), repeat=16), start, end):
        byte_array = bytearray(combination)
        fullKey = key + byte_array
        compare(fullKey)
    return None

def compare(fullKey):
    cipher = AES.new(fullKey, AES.MODE_ECB)
    dec = cipher.decrypt(ENCFLAG)
    try:
        val = dec.decode()
        if dec[:4] == "HTB{":
            print("FLAG: " + val)
            return True
        elif val.isprintable():
            print("Try: " + val)
            return None
    except UnicodeDecodeError:
        return None

# Read flag from file and convert as bytearray
with open('output.txt', 'r') as f:
    data = f.read().splitlines()

ENCFLAG = bytearray.fromhex(data[1])
key = bytearray.fromhex("786f36dd7c9d902f1921629161d9b057")

# Total number of combinations (256^16)
total_combinations = 256 ** 16

# Define the chunk size and number of chunks
chunk_size = 50000  # Adjust this size based on your needs and available memory
num_chunks = (total_combinations + chunk_size - 1) // chunk_size  # Ceiling division

# Use ThreadPoolExecutor to process chunks in parallel
with concurrent.futures.ThreadPoolExecutor() as executor:
    futures = [executor.submit(process_chunk, i * chunk_size, min((i + 1) * chunk_size, total_combinations)) for i in range(num_chunks)]

    # Process results as they complete
    found_result = None
    for future in concurrent.futures.as_completed(futures):
        result = future.result()
        if result is not None:
            break  # Stop after finding the correct hash

