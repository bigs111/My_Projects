# MainWindow.py
# advanced port scanner

from tkinter import * 

root = Tk()
root.option_add('*tearOff', FALSE)

# window title
root.title("ADVmapper")
# root window size
root.geometry("400x400")

# close button
close_btn = Button(root, text= 'Close', command=root.destroy)
close_btn.pack(side="bottom", expand=True)

# menu bar
menubar = Menu(root)
fileMenu = Menu(menubar)
fileMenu.add_command(Label="Test")



root.mainloop()