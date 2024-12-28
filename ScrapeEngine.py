import sys
import requests
from bs4 import BeautifulSoup
sys.stdout.reconfigure(encoding='utf-8')

def Prettify(Soup):
  return BeautifulSoup(Soup, 'html.parser').prettify()

DefaultHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'utf-8',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'DNT': '1',
    'Cache-Control': 'max-age=0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
}
class ScrapeEngine:
  def __init__(self, Url, Params=None, Headers=DefaultHeaders, State="Scrapper"):
    self.Url = Url
    if State == "Scrapper":
      if Params == None:
        self.Response = requests.get(Url, headers=Headers)
      else:
        self.Response = requests.get(Url, params=Params, headers=Headers)
      if self.Response.status_code != 200:
        print(f'Failed to retrieve the page. Status code: {self.Response.status_code}')
        quit()
      self.Soup = BeautifulSoup(self.Response.text, 'html.parser')
      self.StatusCode = self.Response.status_code
    elif State == "Parser":
      Url = str(Url)
      self.Soup = BeautifulSoup(Url, 'html.parser')
  
  def __str__(self):
    return str(self.Soup)
  
  def Get(self, Selector):
    if self.Soup.select_one(Selector):
      return self.Soup.select_one(Selector).get_text()
    else:
      return None
  
  def GetAll(self, Selector, Recursive=True, Limit=None):
    return [Element.get_text() for Element in self.Soup.select(Selector, recursive=Recursive, limit=Limit if Limit is not None else Limit)]
  
  def GetAllHref(self, Selector, Recursive=True, Limit=None):
    if self.Soup.select_one(Selector):
      return [Element.get('href') for Element in self.Soup.select(Selector, recursive=Recursive, limit=Limit if Limit is not None else Limit)]
    else:
      return None
  
  def GetHref(self, Selector):
    if self.Soup.select_one(Selector):
      return self.Soup.select_one(Selector).get('href')
    else:
      return None
  
  def GetElementName(self, Selector, Call='CssSelector'):
    if Call == 'CssSelector':
      return [Point.name for Point in self.Soup.select(Selector)]
    elif Call == 'Text':
      return [Point.parent.name for Point in self.Soup.find_all(string=Selector)]
    else:
      return None
  
  def GetAttributes(self, Selector, Call='CssSelector'):
    if Call == 'CssSelector':
      return [AttributeDictionary.attrs for AttributeDictionary in self.Soup.select(Selector)]
    elif Call == 'Text':
      return [Point.parent.attrs for Point in self.Soup.find_all(string=Selector)]
  
  def GetHeadData(self):
    return self.Soup.select_one('head')
  
  def GetHead(self):
    return self.Soup.select_one('head').text
  
  def GetTitle(self):
    return self.Soup.select_one('title').getText()
   
  def GetChildren(self, Selector):
    return [Point.contents for Point in self.Soup.select(Selector)]
  
  def GetParent(self, Selector):
    Attributes = [Point.parent.attrs for Point in self.Soup.select(Selector)]
    for Count in range(len(Attributes)):
      Names = [Point.parent.name for Point in self.Soup.select(Selector)]
      Attributes[Count]['name'] = Names[Count]
    return Attributes
  
  def GetAllData(self, Selector, Recursive=True, Limit=None):
    if self.Soup.select_one(Selector):
      return self.Soup.select(Selector, recursive=Recursive, limit=Limit if Limit is not None else Limit)
    else:
      return None
  
  def HasAttribute(self, Selector, Attribute):
    return [Point.has_attr(Attribute) for Point in self.Soup.select(Selector)]
