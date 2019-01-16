## A Bad Python Program That Checks if Professor John Doe or His Minion Typed Algebra on His HTML Papyrus Scroll ##
## Written by a feable plebian named G YELSEW that hates NASA ##
## Because why explore outer space ##
### With my research funds ##
## When you don't even understand ##
## Planet Earth ##

import requests, os.path, re

body = re.compile("<body>.*</body>",re.S)
algebra = re.compile("algebra",re.IGNORECASE)
urllist = ["http://www.math.ucla.edu/~mikel/","https://www.math.ucla.edu/~tao/","http://math.stanford.edu/~ksound/","https://math.berkeley.edu/people/grad/jed-duersch"]

def getURL():
	print("If you make a typo on the URL, just find out how to start the program or else it will fail...")
	URL = input("Enter a URL such as http://www.math.ucla.edu/~mikel/ or https://www.math.ucla.edu/~tao/ or whichever monk you'd like. ")
	return URL   
def istextand200(url):	 
	return requests.get(url, timeout=5).status_code == 200 and requests.get(url, timeout=5).headers['content-type'].split('/')[0].lower() == 'text'
def getText(url):
	try:
		return requests.get(url, timeout = 1).text
	except requests.exceptions.RequestException:
		print(" Professor hates providing his text. He uses cryptic methods or a lot of flair on his Papyrus. ")
		print(" You'd better try someone more down to Earth.")

def hastheAlgebra(text):
	match = algebra.search(text)
	if match:
		return True
	return False


def enteranySite():
	URL = getURL()
	if istextand200(URL):    		
		siteText = getText(URL)
		if hastheAlgebra(siteText):
			print("This persons web page contained the word algebra in it. Cool.")
		else:
			print("This persons web page did not contain the word algebra in it.")

def getPercentage(urllist):
	count=0
	count = float(count)
	for url in urllist:
		if(hastheAlgebra(getText(url))):
			count+=1
	return "{} percent of the sites had the word algebra!".format(count/float(len(urllist)))

print(getPercentage(urllist))

#print(istextand200("http://www.math.ucla.edu/~mikel/"))
"""
print(hastheAlgebra(getText("http://math.stanford.edu/~ksound/")))
print(hastheAlgebra(getText("https://www.math.ucla.edu/~tao/")))
print(hastheAlgebra(getText("https://math.berkeley.edu/people/grad/jed-duersch")))
print(hastheAlgebra(getText("http://www.math.ucla.edu/~mikel/")))
"""


