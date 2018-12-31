

# A method in object-oriented programming is a procedure associated with a class
import requests, re, string, random

# A scraper that scraps all links or images and saves them to a list. Organize indexed content and remove duplicates. Put in searchable file.


def getRandomURLS(num):
	randomURLS=[]
	for z in range(0,num):
		charList = []
		for i in range(0,5):
			char = chr(random.randint(97,122))
			charList.append(char)
		charList.append(".com")
		charList[0] = 'http://www.'
		randomURLS.append(''.join(charList))
	return randomURLS

def getResponses(urlList):
	responseList = []
	for i in range(0,len(urlList)):
		try:
			responseList.append(requests.get(urlList[i]).status_code)
		except requests.exceptions.ConnectionError:
			responseList.append("Connection Refused")
	return responseList
	
def getContent(urlList):
	pass



##newList = getRandomURLS(2)
##print(getResponses(newList))


print(requests.get("http://www.kyba.com").content)		# Look at the status




