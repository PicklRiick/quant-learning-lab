from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json
root=Path(__file__).resolve().parents[1]
class Links(HTMLParser):
 def __init__(self): super().__init__();self.urls=[];self.ids=set()
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.add(a['id'])
  for name in ['href','src']:
   if a.get(name):self.urls.append(a[name])
pages={}
for p in root.rglob('*.html'):
 x=Links();x.feed(p.read_text());pages[p]=x
errors=[]
for p,x in pages.items():
 for url in x.urls:
  u=urlsplit(url)
  if u.scheme or u.netloc:continue
  target=(p.parent/unquote(u.path)).resolve() if u.path else p
  if not target.exists():errors.append([str(p.relative_to(root)),url,'missing file'])
  elif u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:errors.append([str(p.relative_to(root)),url,'missing anchor'])
print(json.dumps({'pages':len(pages),'links':sum(len(x.urls) for x in pages.values()),'errors':errors},ensure_ascii=False,indent=2))
raise SystemExit(bool(errors))
