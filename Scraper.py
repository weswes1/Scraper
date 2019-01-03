# A method in object-oriented programming is a procedure associated with a class
import requests, re, string, random
# A scraper that scraps all links or images and saves them to a list. Organize indexed content and remove duplicates. Put in searchable file.


URL = "https://math.berkeley.edu/people/grad"
patternRE = "/people/grad/.*\">"
webTEXT = requests.get(URL,timeout=1).text
linkList = re.findall(patternRE,webTEXT)
patternNAME = "/people/grad/"

def getName(thing):
	closer = thing.split(patternNAME)[1]
	name = closer.split('">')
	return name[0]

nameList = [None]*len(linkList)
for i in range(0,len(linkList)):
	nameList[i] = getName(linkList[i])
nameList_final = [None]*len(linkList)
for i in range(0,len(linkList)):
	nameList_final[i]=str(nameList[i])


