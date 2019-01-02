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
		charList[0] = 'https://www.'
		randomURLS.append(''.join(charList))
	return randomURLS

arandomURL = getRandomURLS(1)[1]
anotherrandomURL = getRandomURLS(1)[1]


"""
def getcontentType(randomURLS):
	contentType = []
	for i in range(0,len(randomURLS)):
		try:
			contentType.append(str("Wesbite Number " + str(i) + ": " + requests.get(randomURLS[i]).headers['Content-Type']))
		except Exception, Warning:
			contentType.append("Content Not Provided")
	return contentType

	def getcontentType(randomURLS):
	contentType = []
	for i in range(0,len(randomURLS)):
		try:
			contentType.append(str("Wesbite Number " + str(i) + ": " + requests.get(randomURLS[i]).headers['Content-Type']))
		except Exception, Warning:
			contentType.append("Content Not Provided")
	return contentType
"""

def getcontentType(randomURLS):
	contentType = []
	for i in range(0,len(randomURLS)):
		try:
			contentType.append(requests.get(randomURLS[i], timeout=1).headers['Content-Type'])
		except requests.exceptions.ConnectionError, requests.exceptions.ReadTimeout:
			contentType.append("Content not provided")
	return contentType



print(getcontentType(getRandomURLS(11)))

