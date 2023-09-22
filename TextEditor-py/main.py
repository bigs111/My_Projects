#
# main.py | text editor written using tkinter
#
from tkinter import *
from tkinter import ttk
from tkinter import filedialog
import tkinter as tk
import os

root = Tk()
root.title("Notepad")
root.geometry("800x500")

# global file path
global_path = {"file_path": None}  # Using a dictionary to store the file path

# title menu
menubar = Menu(root)

#
# BUTTON LOGIC
#


# function for opening files
def open_file():
    file_path = filedialog.askopenfilename(
        filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")]
    )
    if file_path:
        global_path["file_path"] = file_path  # Store the file path
        # Open the selected file for reading
        with open(file_path, "r") as f:
            file_content = f.read()
            # Insert the file content into the Text widget
            Text_box.delete(1.0, tk.END)  # Clear existing text
            Text_box.insert(tk.END, file_content)


# function for creating a new file
def create_new_file():
    # Open a file dialog to choose the file name and location
    file_path = filedialog.asksaveasfilename(
        defaultextension=".txt", filetypes=[("Text Files", "*.txt")]
    )

    # Check if a file name was provided
    if file_path:
        # Create the new file
        with open(file_path, "w") as new_file:
            pass  # You can write initial content to the file here if needed


# function for saving files
def save_file():
    file_path = global_path["file_path"]
    if file_path:
        content = Text_box.get(1.0, tk.END)
        # Write the content to the tracked file path
        with open(file_path, "w") as file:
            file.write(content)


#
# BUTTON LOGIC ^^^^
#


# Adding File Menu and commands
file = Menu(menubar, tearoff=0)
menubar.add_cascade(label="File", menu=file)
file.add_command(label="New File", command=create_new_file)
file.add_command(label="Open...", command=open_file)
file.add_command(label="Save", command=save_file)
file.add_separator()
file.add_command(label="Exit", command=root.destroy)

# Adding Edit Menu and commands
edit = Menu(menubar, tearoff=0)
menubar.add_cascade(label="Edit", menu=edit)
edit.add_command(label="Find...", command=None)

# displaying Menu
root.config(menu=menubar)

Grid.rowconfigure(root, 0, weight=1)
Grid.columnconfigure(root, 0, weight=1)

# text widget
Text_box = Text(root, bg="white")
# Set grid
Text_box.grid(row=0, column=0, sticky="NSEW")
root.mainloop()
